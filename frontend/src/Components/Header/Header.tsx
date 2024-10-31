import { images } from "./constants";



type Props = {};

const Header = () => {
  return (
    <div className={styles[1]}>
      {/* ===========================Left section ================ */}
      <div className={styles[2]}>
        <h1 className={styles[3]}>Find your next<br/> favorite book</h1>
        <p className={styles[4]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Laudantium
          quibusdam veniam deleniti atque vero dolore, <br /> facilis aperiam illum
          nulla sed hic officiis amet quae <br /> aliquam aliquid libero sapiente
          temporibus alias.
        </p>
        <button className={styles[5]}>Shop Now</button>
      </div>

      {/* ==========================  Right Section =================================*/}
        <div className={styles[6]}>
          {
              images.map((item) => (
                <div className={styles[7]}>
                    <img className={styles[8]} src={item.src} alt={item.alt} />
                </div>
              ))
          }
        </div>
    </div>
  );
};

export default Header;

const styles: { [key: string]: string } = {
  1: "flex overflow-clip",
  2: "flex flex-col px-[3rem] min-w-[60%] pr-[6rem]",
  3:"h1 mt-[2rem] text-[2.6rem] font-normal leading-tight",
  4:"my-[2.5rem] text-[0.9rem]",
  5:"btn rounded-3xl w-[6rem] text-4 text-white bg-bgc-3 mb-[1.5rem]",
  6:"flex items-center min-w-[40%] overflow-visible",
  7:"mr-[0.1rem] min-w-[40%]",
  8:"w-[140px] h-[240px] rounded-lg hover:scale-125 transition-all delay-75"
};
