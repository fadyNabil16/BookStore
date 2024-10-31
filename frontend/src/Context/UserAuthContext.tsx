import { createContext, ReactNode, useEffect, useState } from "react";
import { UserProfileToken } from "../Models/User";
import { json, useNavigate } from "react-router-dom";
import { registerApi } from "../Services/AuthonticateServices";
import axios from "axios";

export type UserContextType = {
    user: UserProfileToken | null;
    token: string | null;
    registerUser: () => void;
    loginUser: () => void;
    logoutUser: () => void;
    isLoggedIn: () => boolean;
};

type Props = {children : ReactNode}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();
    
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfileToken | null>(null);

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token"); 
        if(user && token) {
            setUser(JSON.parse(user));
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

            // save an obl user as obj string by using json.stringfy
            const userObj: any = {
                userName: res?.data.userName,
                email: res?.data.email 
            }
            localStorage.setItem("user", JSON.stringify(userObj));
            setToken(res?.data.token!);
            setUser(userObj);
            navigate("/search");
        })
        .catch((e) => console.error(e))        
    }


    return (
        <UserContext.Provider value={{registerUser, isLoggedIn, }}>

        </UserContext.Provider>
    );
};