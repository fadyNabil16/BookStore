import React from "react";
import * as Yup from "yup";
import {RightSection} from "../../Components/Login/LoginRightSection";
import {LeftSection} from "../../Components/Login/LoginLeftSection";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserProvider} from "@/Context/UserAuthContext.tsx";

type Props = {};

const Login = (props: Props) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <LeftSection styles={`hidden md:block`}>
                <span>
                  Be the first to know about
                  <br/> new releases, discounts
                  <br/> and exclusive offers!
                </span>
            </LeftSection>
            <RightSection type="signin" header={`Welcome back!`}/>
        </div>
    );
};

export default Login;
