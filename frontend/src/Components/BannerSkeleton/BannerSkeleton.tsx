/* 
//      -----------------------------------------
//      |           |                           |
//      |           |                           |
//      |           |                           |
//      |           |  Children of skeleton     |
//      |left image |                           |
//      |  skeleton |                           |
//      |           |                           |
//      |           |                           |
//      |           |                           |
//      -----------------------------------------
*/

import React, { ImgHTMLAttributes, ReactElement, ReactNode } from "react";
import { style } from "../../types/styles";

interface IBannerSkeleton {
  baseImageSrc?: string;
  children?: React.ReactNode[] | React.ReactElement;
  imageAlt?: string;
  imageBgColor?: string;
}

const BannerSkeleton = ({
  baseImageSrc,
  children,
  imageAlt,
  imageBgColor,
}: IBannerSkeleton): ReactNode => {
  return (
    <div className={styles[1]}>
      <div className={styles[2]}>
        <div className={styles[3]}>
          <img
            src={baseImageSrc}
            alt={imageAlt || "Image"}
            className={`${styles[4]} ${imageBgColor || "bg-bgc-5/70"}`}
          />
        </div>
      </div>
      <div className={styles[5]}>{children}</div>
    </div>
  );
};

const styles: style = {
  1: "flex flex-col h-[70vh] grid-rows-1 overflow-hidden md:grid md:grid-cols-12 md:gap-4 mx-[1.5rem] sm:mx-[1.5rem] m-[3rem] bg-bgc-5/20 p-[1rem] rounded-md",
  2: "md:col-span-4 row-span-1",
  3: "p-[0.6rem] rounded-lg w-full h-full",
  4: "rounded-lg aspect-[80/120] w-full h-full object-fill",
  5: "md:col-span-8 md:row-span-1",
};

export default BannerSkeleton;
