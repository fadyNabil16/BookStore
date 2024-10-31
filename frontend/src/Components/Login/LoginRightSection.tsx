import React from "react";

interface RightSectionProps  {
    header?: string | null,
    type?: string | null 
}


export const RightSection: React.FC<RightSectionProps> = ({header, type}: RightSectionProps) => {
    return (
      <div className="flex-1">
        <div className="text-end w-full py-[2rem]">
          <p className="mr-[2rem] text-txt-3 lg:text-[20px] xl:text-[23px]">En</p>
        </div>
  
        <div className="flex flex-col items-center w-[80%] mx-auto mt-[3.4rem] md:mt-0">
          <h1 className="h1 mr-auto my-4">{header}</h1>
  
          {/* =============================Form Inputs ==================== */}
          <form action="#" className="flex flex-col w-[100%]">
            {/* =================Email Input================== */}
            <div className={`${type === 'signin' ? 'hidden': ''} mt-6 lg:mt-9`}>
              <input className="input" type={`email`} placeholder="Email" />
            </div>
            {/* =================Username Input================== */}
            <div className="my-6 lg:my-9">
              <input className="input" type="text" placeholder="Username" />
            </div>
            {/* ====================Password Input ================= */}
            <div className="mb-2 lg:mb-4">
              <input className="input" type="password" placeholder="Password" />
            </div>

            {/*  */}
            {/* ===========================Remember Me =================== */}
            <div className="text-[9px] flex justify-between mb-8 mt-3">
              <div className="flex align-middle">
                <input className="mx-1" type="checkbox" aria-label="Rember me" />
                <span className="text-[11px]">Rember me</span>
              </div>
              <span className="text-txt-3 lg:text-[13px] xl:text-[14px]">Forget Password?</span>
            </div>
            {/* =======================Submit btn======================== */}
            <button type="submit" className="btn">
              {type=== "signin"  ? "Sign in" : "Sing up"}
            </button>
          </form>
          {/* =============================End Form ================================ */}
          <div className="w-[100] text-center mt-[6rem] lg:text-[20px] xl:text-[23px]">
            <p>
                {
                    type === "signin" ?
                    "Don't have already account?" : "Already have an account?"
                }
              
              <span className="ml-6 text-txt-3">{type !== "signin" ?"Sign in": "Sign Up"}</span>
            </p>
          </div>
        </div>
      </div>
    );
  };