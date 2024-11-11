import axios from "axios";
import {UserProfileToken} from "../Models/User";

const api = "http://localhost:/api";

export const loginApi = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/account/login", {
            email: email,
            password: password
        });
    } catch (error) {
        throw error;
    }
};

export const registerApi = async (email: string, username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/account/login", {
            email: email,
            username: username,
            password: password
        });
    } catch (e) {
        console.error(e);
    }
};
  

