import React, { useEffect, useLayoutEffect } from "react";
import * as Yup from "yup";
import { RightSection } from "../../Components/Login/LoginRightSection";
import { LeftSection } from "../../Components/Login/LoginLeftSection";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, UserProvider } from "@/Context/UserAuthContext.tsx";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <LeftSection styles={`hidden md:block`}>
        <span>
          Be the first to know about
          <br /> new releases, discounts
          <br /> and exclusive offers!
        </span>
      </LeftSection>
      <RightSection type="signin" header={`Welcome back!`} />
    </div>
  );
};

export default Login;
