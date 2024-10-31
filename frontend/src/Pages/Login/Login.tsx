import React, { ReactFragment } from "react";
import * as Yup from "yup";
import { RightSection } from "../../Components/Login/LoginRightSection";
import { LeftSection } from "../../Components/Login/LoginLeftSection";

type Props = {};

// type LoginFormInputs = {
//     email: string;
//     password: string;
// };

// const validation = Yup.object().shape({
//     email: Yup.string().required("Email is Required"),

// });

const Login = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
        <LeftSection styles={`md:block hidden`}>
            <span>Be the first to know about<br/> new releases, discounts<br/> and exclusive offers!</span>
        </LeftSection>
        <RightSection type="signin" header={`Welcome back!`}/>
    </div>
  );
};


export default Login;
