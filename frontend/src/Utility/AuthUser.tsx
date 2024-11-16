import axios from "axios";
import { handleError } from "@/Helpers/ErrorHandler.tsx";
import { UserProfileToken } from "@/Models/User.tsx";

const api = "http://localhost:5298/api/user/login";

export const loginApi = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api, {
      email: email,
      password: password,
    });

    return data;
  } catch (e) {
    handleError(e);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const registerApi = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "/login", {
      username: username,
      password: password,
      email: email,
    });
    return data;
  } catch (e) {
    handleError(e);
  }
};
