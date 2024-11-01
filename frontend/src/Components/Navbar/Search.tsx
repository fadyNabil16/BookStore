import { IoIosSearch } from "react-icons/io";

interface SearchInput {

}
const SearchInput: React.FC = () => {
  return (
    <div className="hidden md:block relative overflow-hidden">
      <input
        className="input w-max bg-txt-1/0 border-txt-3 py-[0.1rem] placeholder:text-txt-2"
        type="text"
        placeholder="Search"
      />
      <IoIosSearch className="absolute top-[25%] right-3 text-txt-" />
    </div>
  );
};



export default SearchInput;