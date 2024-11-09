import React, { useState } from "react";
import CustomCarousel from "../carousel/carousel";
import Carousel from "react-material-ui-carousel";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartArrowDown,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

type Props = {};

const BookItem = ({ length }: { length: number }) => {
  const [current, setCurrent] = useState(0);
  const prevClick = () => {
    if (current != 0) {
      setCurrent(current - 1);
      console.log(current);
    }
  };
  const nextClick = () => {
    if (current != length - 3) {
      setCurrent(current + 1);
      console.log(current);
    }
  };
  const Rate = 3.5;
  return (
    <div className="relative">
      <div className="flex overflow-clip gap-3 mx-10">
        {Array(length)
          .fill(null)
          .map((_, idx) => (
            <div
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
              className={`flex flex-col  items-center min-w-[35%] md:min-w-[20%] ease-in-out duration-300 do-magic`}
              key={idx}
            >
              <img
                src={"https://placehold.co/1200x2000/000000/FFFFFF/png"}
                alt="Book cover"
                className="aspect-[80/120]"
              />
              <p>Book name</p>
              <p>Author name</p>
              <div>
                <div className="flex items-center">
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
              </div>
            </div>
          ))}
      </div>
      <button
        onClick={prevClick}
        className="absolute top-1/2 text-[#000] rounded-full bg-bgc-5/60 p-2"
        role="back"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextClick}
        className="absolute top-1/2 text-[#000] rounded-full bg-bgc-5/60 p-2 right-0"
        role="back"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

const SectionPreview = (props: Props) => {
  const handleCarousel = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-[1.4rem]">
        <p className="font-serif text-[2.3rem] italic px-8">Bestsellers</p>
        <p className="underline text-[0.8rem]">See All</p>
      </div>
      <BookItem length={10} />
    </div>
  );
};

export default SectionPreview;
