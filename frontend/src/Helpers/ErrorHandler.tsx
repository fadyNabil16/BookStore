import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (err: any) => {
  if (axios.isAxiosError(err)) {
    var error = err.response;
    if (Array.isArray(error?.data.errors)) {
      for (let val of error?.data.errors) {
        console.log(val.description);
      }
    } else if (typeof error?.data.errors === "object") {
      for (let e in error?.data.errors) {
        console.log(error.data.errors[e][0]);
      }
    } else if (error?.data) {
      console.log(error.data);
    } else if (error?.status === 401) {
      console.log("Please Login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (error?.data) {
      console.log(error.data);
    }
  }
};
