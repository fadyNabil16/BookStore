import React from "react";
import BannerSkeleton from "../../Components/BannerSkeleton/BannerSkeleton";
import { LoremText } from "../../Helpers/Loreum";

interface IAuthor {
  authorName: string | null;
  birthYear: number;
  deathYear?: number;
  isAlive: boolean | null;
  about?: string;
}

const Author = ({
  authorName,
  birthYear,
  isAlive,
  about,
  deathYear,
}: IAuthor) => {
  return (
    // =================== Section One ======================//
    <BannerSkeleton>
      <div className="md:grid md:grid-rows-12 h-full ml-2 md:flex-none overflow-hidden">
        <h1 className="row-span-1 h1">{authorName || "Hanz Filck"}</h1>
        {/* Birth and Death of author */}
        <p className="row-span-1 body-1 self-center">{`${
          birthYear || "1997"
        } - ${isAlive ? "present" : deathYear || new Date().getFullYear()}`}</p>

        <div className="body-1 row-span-10 overflow-scroll">
          {about || LoremText.concat([LoremText, LoremText, LoremText])}
        </div>
      </div>
    </BannerSkeleton>

    // ==================== Section Two ======================//
  );
};

export default Author;
