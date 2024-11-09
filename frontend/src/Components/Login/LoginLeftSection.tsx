import React, { ReactNode } from "react";
import { style } from "../../types/styles";

interface LeftSectionProps {
  styles?: string | null;
  children?: ReactNode;
}

export const LeftSection = ({ styles, children }: LeftSectionProps) => {
  return (
    <div className={`w-[43%] bg-bgc-1 ${styles ? styles : ""}`}>
      <div className="pl-[2rem] pt-[2rem]">
        <p className="font-magilio text-txt-2 text-[2rem]">Booknest</p>
      </div>
      <div className="font-bold h-[100%] flex flex-col pl-[2rem]">
        <div className="h-[28%]"></div>
        <p className="text-[1.75rem] text-txt-3  lg:text-[1.9rem] xl:text-[2.4rem]">
          {children}
        </p>
      </div>
    </div>
  );
};

const styles: style = {};
