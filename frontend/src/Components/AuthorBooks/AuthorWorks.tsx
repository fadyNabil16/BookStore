import React from "react";
import { books } from "./constant";
import { style } from "../../types/styles";

interface IAuthorWorks {}

const AuthorWorks = (props: IAuthorWorks) => {
  return (
    <div className={styles[1]}>
      <div className={styles[2]}>
        <p className={styles[3]}>Author Books</p>
      </div>
      <div className={styles[4]}>
        <div className={styles[5]}>
          <img src={books[1].src} alt="dasd" className={styles[6]} />
        </div>
        <div className={styles[7]}>
          {books.map((book) => (
            <div className="basis-1/2">
              <img
                key={book.id}
                src={book.src}
                alt={book.alt}
                className={styles[8]}
              />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

const styles: style = {
  1: "flex flex-col mx-[1rem] sm:mx-[1.5rem] md:mx-[3rem] ",
  2: "my-[1.5rem]",
  3: "h1 text-txt-3/90",
  4: "flex flex-col md:max-h-[70vh] bg-bgc-5/20 md:flex-row md:bg-bgc-1/0",
  5: "md:w-[35%] flex justify-center items-center md:mr-[1rem]",
  6: "rounded-full aspect-square w-[50%] md:min-w-full my-[2rem] md:my-0 md:rounded-lg md:aspect-auto",
  7: "grid grid-rows-2 gap-3 mx-auto w-[90%] md:w-[65%]  flex flex-wrap flex-grow",
  8: "w-full h-full object-cover",
};

export default AuthorWorks;
