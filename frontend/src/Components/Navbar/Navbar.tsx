import Logo from "./Logo";
import { NavList } from "./NavList";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { ReactNode } from "react";



interface Props {

}

const Navbar = (props: Props) => {
    
    const pathsObj = {
        home : '/home',
        shop: '/shop',
        arriaves: '/arriaves',
        blog: '/blog',
        aboutus: '/aboutus'
    };


  return (
    <div className={styles["1"]}>
        <Logo _path={`/landing`} styles={`mr-6`}/>
        <NavList navList={pathsObj}/>
        <SearchInput/>
        <div className="text-[1rem] flex justify-between">
          <CiHeart className="mr-5"/>
          <IoCartOutline  className="mr-5"/>
          <CiUser  className="mr-5"/>
        </div>
    </div>
  );
};

interface SearchInput {

}
const SearchInput: React.FC = () => {
  return (
    <div className="relative">
      <input
        className="input bg-txt-1/0 border-txt-3 w-auto py-[0.1rem] placeholder:text-txt-2"
        type="text"
        placeholder="Search"
      />
      <IoIosSearch className="absolute top-[25%] right-3 text-txt-" />
    </div>
  );
};


export default Navbar;


const styles = {
    '1': "flex items-center justify-between px-[3rem] py-[0.5rem] w-[100%]",
    '2': ""
}