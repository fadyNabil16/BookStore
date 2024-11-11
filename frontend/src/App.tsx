import React from 'react';
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {UserProvider} from "@/Context/UserAuthContext.tsx";

type props = {};

const App = (props) => {
    return (
        <>
            <UserProvider>
                <Outlet/>
                <ToastContainer/>
            </UserProvider>
        </>
    );
};

export default App;