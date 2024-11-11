import React, {useState} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {useAuth} from "@/Context/UserAuthContext.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface RightSectionProps {
    header?: string | null;
    type?: string | null;
}

type LoginFormInputs = {
    userName?: string;
    password: string;
    email: string;
};
const validation = Yup.object().shape({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("Password is required"),
});

export const RightSection = ({header, type}: RightSectionProps) => {
    const {loginUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormInputs>({resolver: yupResolver(validation)});

    const handleLogin = (form: LoginFormInputs) => {
        console.log("Inside handleLogin", form.email)
        loginUser(form.email, form.password);
    }

    return (
        <div className="flex-1">
            <div className="text-end w-full py-[2rem]">
                <p className="mr-[2rem] text-txt-3 lg:text-[20px] xl:text-[23px]">En</p>
            </div>

            <div className="flex flex-col items-center w-[80%] mx-auto mt-[3.4rem] md:mt-0">
                <h1 className="h1 mr-auto my-4">{header}</h1>

                {/* =============================Form Inputs ==================== */}
                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col w-[100%]">
                    {/* =================Email Input================== */}
                    {
                        type !== "signin" && (
                            <div className={`mt-6 lg:mt-9`}>
                                <input className="input" type={`text`} placeholder="Username" {...register("userName")}/>
                            </div>)
                    }
                    {errors.email ? (
                        <p className="text-white">{errors.userName.message}</p>
                    ) : (
                        ""
                    )}
                    {/* =================Username Input================== */}
                    <div className="my-6 lg:my-9">
                        <input className="input" type="email" placeholder="Email" {...register("email")}/>
                    </div>
                    {/* ====================Password Input ================= */}
                    <div className="mb-2 lg:mb-4">
                        <input className="input" type="password" placeholder="Password" {...register("password")} />
                    </div>

                    {/*  */}
                    {/* ===========================Remember Me =================== */}
                    <div className="text-[9px] flex justify-between mb-8 mt-3">
                        <div className="flex align-middle">
                            <input className="mx-1" type="checkbox" aria-label="Rember me"/>
                            <span className="text-[11px]">Rember me</span>
                        </div>

                        <span className="text-txt-3 lg:text-[13px] xl:text-[14px]">
              Forget Password?
            </span>
                    </div>
                    {/* =======================Submit btn======================== */}
                    <button type="submit" className="btn">
                        {type === "signin" ? "Sign in" : "Sing up"}
                    </button>
                </form>
                {/* =============================End Form ================================ */}
                <div className="w-[100] text-center mt-[6rem] lg:text-[20px] xl:text-[23px]">
                    <p>
                        {type === "signin"
                            ? "Don't have already account?"
                            : "Already have an account?"}

                        <span className="ml-6 text-txt-3">
              {type !== "signin" ? "Sign in" : "Sign Up"}
            </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
