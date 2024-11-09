import React, { useEffect } from "react";
import book3 from "../../assets/book3.jpg";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { style } from "../../types/styles";
import BannerSkeleton from "../BannerSkeleton/BannerSkeleton";

interface IBookOverview {
  Title?: string;
  Rate?: number | null;
  BookName?: string;
  BookSummary?: string | null;
}

const BookOverview = ({ Title, Rate, BookSummary }: IBookOverview) => {
  const Booksum =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi iure sint a eum excepturi tempore autem iusto amet laudantium architecto voluptatum iste ad quae facilis est nostrum placeat vitae.";
  const bookName = "Franz Kafka - THe Metamoposis";

  return (
    <BannerSkeleton BaseImageSrc={book3}>
      <h1 className={styles[1]}>{Title || bookName}</h1>
      <p className={styles[2]}>{BookSummary || Booksum}</p>
      <div className={styles[3]}>
        <div className={styles[4]}>
          {Rate &&
            [...Array(Math.ceil(Rate)).keys()].map((_, idx) =>
              idx + 1 > Rate ? (
                <FaStarHalf className="text-txt-4" />
              ) : (
                <FaStar className="text-txt-4" />
              )
            )}{" "}
          {Rate}
        </div>
        {/* Buttons section */}
        <div className={styles[5]}>
          <div className={styles[6]}>
            Price: <span className="text-txt-3">6$</span>
          </div>
          <div className={styles[7]}>
            <button className={styles[8]}>Add to favorite</button>
            <button className={styles[9]}>Add to basket</button>
          </div>
        </div>
      </div>
    </BannerSkeleton>
  );
};

const styles: style = {
  1: "h1 text-txt-3 mb-3",
  2: "font-normal text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem]",
  3: "flex flex-col mt-[4rem] md:mt-auto",
  4: "flex items-center",
  5: "mt-[1.2rem] flex flex-col gap-4 md:flex md:flex-row md:justify-between md:items-center",
  6: "font-bold text-[1.3rem]",
  7: "flex flex-col gap-1 md:flex md:flex-row md:ml-auto md:w-[60%] md:items-center",
  8: "w-full p-2 md:basis-1/2 md:p-0  border rounded-full md:my-[0.85rem] md:ml-[0.5rem] text-[0.85rem] bg-opacity-0 text-txt-3 md:py-[0.4rem]",
  9: "w-full p-2 md:basis-1/2 md:p-0  border rounded-full md:my-[0.85rem] md:ml-[0.5rem] text-[0.85rem] text-[#fff] bg-bgc-3 md:py-[0.4rem]",
};

export default BookOverview;
