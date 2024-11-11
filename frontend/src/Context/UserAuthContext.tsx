import React, {createContext, ReactNode, useEffect, useState} from "react";
import {UserProfileToken} from "../Models/User";
import {json, useNavigate} from "react-router-dom";
import {registerApi} from "../Services/AuthanticateServices.tsx";
import axios from "axios";
import {toast} from "react-toastify";
import {loginApi} from "@/Utility/AuthUser.tsx";

export type UserContextType = {
    user: UserProfileToken | null;
    token: string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (email?: string, password?: string) => void;
    logoutUser: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();

    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfileToken | null | string>(null);

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user && token) {
            console.log("user is loged in");
            setUser(user);
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        email: string,
        username: string,
        password: string
    ) => {
        await registerApi(email, username, password)
            .then((res) => {
                localStorage.setItem("token", res?.data.token);

                // save an objuser as obj string by using json.stringfy
                const userObj: UserProfileToken = {
                    userName: res?.data.userName,
                    email: res?.data.ermail,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!);
                setUser(userObj);
                toast.success<string>("login successfull");
                navigate("/");
            })
            .catch((e) => toast.warning<string>("server error"));
    };

    const loginUser = async (email?: string, password?: string) => {
        await loginApi(email, password)
            .then((res) => {
                console.log(res?.data, "Response data");
                localStorage.setItem("token", res?.data.token);
                // save an obl user as obj string by using json.stringfy
                const userObj: UserProfileToken = {
                    userName: res?.data.userName,
                };
                console.log(res?.data);
                localStorage.setItem("user", res?.data.userName);
                setToken(res?.data.token!);
                setUser(userObj);
                toast.success<string>("login successfull");
                navigate("/");
            })
            .catch((e) => toast.warning<string>("server error"));
    };

    const isLoggedIn = () => !!user;

    const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        navigate("/landing");
    };

    const value = {
        loginUser,
        logoutUser,
        user,
        token,
        isLoggedIn,
        registerUser,
    };
    return (
        <UserContext.Provider value={value}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);
