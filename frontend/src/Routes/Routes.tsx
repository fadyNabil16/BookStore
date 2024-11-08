import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../Pages/Register/RegisterPage";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/register",
        element: <Signup/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

export default router;