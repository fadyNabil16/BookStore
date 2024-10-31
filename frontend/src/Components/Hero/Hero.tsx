import book1 from "../../assets/book1.jpg"
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
            {
                images.map((item) => (
                   [1,2].map((_)=> (
                    <div className={styles[6]} key={item.id+_}>
                      <img src={item.src} alt={item.alt} className={styles[7]}/>
                    </div>
                   )) 
                ))
            }
        </div>
    </div>
  );
};

export default Hero;

const styles: {[key: string]: string} = {
    1:"flex flex-col w-full px-[3rem]",
    2:"flex justify-between py-[3rem]",
    3:"h1 text-2xl text-bgc-2",
    4:"text-bgc-3 text-sm",
    5:"grid grid-cols-12 gap-x-12 gap-y-8",
    6:"col-span-3",
    7:"w-fit h-fit  rounded-lg aspect-[90/120]",
}
