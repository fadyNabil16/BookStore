import { IoIosSearch } from "react-icons/io";
import { style } from "../../types/styles";

interface SearchInput {}
const SearchInput: React.FC = () => {
  return (
    <div className={styles[1]}>
      <input className={styles[2]} type="text" placeholder="Search" />
      <IoIosSearch className={styles[3]} />
    </div>
  );
};

const styles: style = {
  1: "hidden smlap:block relative overflow-hidden",
  2: "input w-max bg-txt-1/0 border-txt-3 py-[0.1rem] placeholder:text-txt-2 pr-[2rem]",
  3: "absolute top-[25%] right-3 text-txt-",
};

export default SearchInput;
