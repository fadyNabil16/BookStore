import CustomCarousel from "@/Components2/carousel/carousel";
import Navbar from "@/Components2/Navbar/Navbar";
import SectionPreview from "@/Components2/SectionPreview/SectionPreview";
import {UserProvider} from "@/Context/UserAuthContext.tsx";
import {ToastContainer} from "react-toastify";
import {Outlet} from "react-router-dom";

// type Props = {};
const Landing = () => {
    return (
        <div className="overflow-hidden">
            <Navbar/>
            <CustomCarousel/>
            <div className="md:mx-8">
                <SectionPreview/>
            </div>
        </div>

    );
};

export default Landing;
