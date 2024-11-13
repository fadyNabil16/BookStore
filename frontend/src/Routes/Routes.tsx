import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import RegisterPage from "../Pages/Register/RegisterPage";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Author from "../Pages/AuthorPage/Author";
import Carousel from "../Components/Carousel/Carousel";
import CustomCarousel from "../Components/Carousel/Carousel";
import BookOverview from "@/Components/BookSection/BookOverview";
import Navbar from "@/Components2/Navbar/Navbar";
import OrderSummary from "@/Components2/Cart/OrderSummary";
import SectionPreview from "@/Components2/SectionPreview/SectionPreview";
import AdminPage from "@/Pages/adminpage/AdminPage";
import AddInfoPanel from "@/Components2/AddInfoPanel/AddInfoPanel.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Landing/>},
            {path: "login/", element: <Login/>},
            {path: "admin/", element: <AdminPage/>},
        ],
   },
   {
    path: "/info",
    element: <AddInfoPanel/>
   }
]);

export default router;
