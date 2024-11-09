import book1 from "../../assets/book1.jpg";
import { style } from "../../types/styles";
import { images } from "../Header/constants";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles[1]}>
      <div className={styles[2]}>
        <p className={styles[3]}>Browse Books</p>
        <p className={styles[4]}> See all</p>
      </div>
      <div className={styles[5]}>
        {images.map((item) =>
          [1, 2].map((_) => (
            <div className={styles[6]} key={item.id + _}>
              <img src={item.src} alt={item.alt} className={styles[7]} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hero;

const styles: style = {
  1: "flex flex-col w-full px-[3rem]",
  2: "flex justify-between items-center py-[3rem]",
  3: "h1 text-2xl text-bgc-2",
  4: "text-bgc-3 text-[0.6rem] md:text-sm",
  5: "flex flex-wrap gap-x-[6%] gap-y-[1rem] md:grid md:grid-cols-12 md:gap-x-12 md:gap-y-8",
  6: "md:col-span-3 basis-[47%]",
  7: "md:w-fit rounded-lg aspect-[90/120]",
};
