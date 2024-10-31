import React from "react";
import { LeftSection } from "../../Components/Login/LoginLeftSection";
import { RightSection } from "../../Components/Login/LoginRightSection";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
        <LeftSection>
            <span>Manage your personal<br/>book collection</span>
        </LeftSection>
        <RightSection header={`Create account`}/>
    </div>
  );
};

export default Signup;
