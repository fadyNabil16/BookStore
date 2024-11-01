import React, { useEffect } from "react";
import book3 from "../../assets/book3.jpg";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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
    <div className={styles[1]}>
      <div className={styles[2]}>
        <div className={styles[3]}>
          <img src={book3} alt="book3" className={styles[4]} />
        </div>
      </div>
      {/* ==================Section  2 ====================*/}
      <div className={styles[5]}>
        <h1 className={styles[6]}>{Title || bookName}</h1>
        <p className={styles[7]}>{BookSummary || Booksum}</p>
        <div className={styles[8]}>
          <div className={styles[9]}>
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
          <div className={styles[10]}>
            <div className={styles[11]}>
              Price: <span className="text-txt-3">6$</span>
            </div>
            <div className={styles[12]}>
              <button className={styles[13]}>Add to favorite</button>
              <button className={styles[14]}>Add to basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: number]: string } = {
  1: "flex flex-col md:grid md:grid-cols-12 md:gap-4 mx-[1.5rem] sm:mx-[1.5rem] m-[3rem] bg-bgc-5/20 p-[1rem] rounded-md",
  2: "md:col-span-4",
  3: "bg-[#ebee53]/60 p-[0.6rem] rounded-lg",
  4: "rounded-lg aspect-[80/120]",
  5: "mt-[1.5rem] md:col-span-8 md:flex md:flex-col",
  6: "h1 text-txt-3 mb-3",
  7: "font-normal text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem]",
  8: "flex flex-col mt-[4rem] md:mt-auto",
  9: "flex items-center",
  10: "mt-[1.2rem] flex flex-col gap-4 md:flex md:flex-row md:justify-between md:items-center",
  11: "font-bold text-[1.3rem]",
  12: "flex flex-col gap-1 md:flex md:flex-row md:ml-auto md:w-[60%] md:items-center",
  13: "w-full p-2 md:basis-1/2 md:p-0  border rounded-full md:my-[0.85rem] md:ml-[0.5rem] text-[0.85rem] bg-opacity-0 text-txt-3 md:py-[0.4rem]",
  14: "w-full p-2 md:basis-1/2 md:p-0  border rounded-full md:my-[0.85rem] md:ml-[0.5rem] text-[0.85rem] text-[#fff] bg-bgc-3 md:py-[0.4rem]",
};

export default BookOverview;
