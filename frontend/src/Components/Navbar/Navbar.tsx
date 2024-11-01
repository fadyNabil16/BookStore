import Logo from "./Logo";
import { NavList } from "./NavList";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { ReactNode } from "react";
import SearchInput from "./Search";

interface Props {}

const Navbar = (props: Props) => {
  const pathsObj = {
    home: "/home",
    shop: "/shop",
    arriaves: "/arriaves",
    blog: "/blog",
    aboutus: "/aboutus",
  };

  return (
    <div className={`${styles["1"]}`}>
      <Logo _path={`/landing`} styles={styles[2]} />
      <NavList navList={pathsObj} className={styles[3]} />
      <SearchInput />
      {/* =================Icons Part ================= */}
      <div className={styles[4]}>
        <CiHeart className="mr-5" />
        <IoCartOutline className="mr-5" />
        <CiUser className="mr-5" />
      </div>
    </div>
  );
};

const styles: { [key: number]: string } = {
  1: "flex overflow-hidden items-center justify-between px-[3rem] py-[0.5rem] w-[100%] fixed bg-bgc-4/90 backdrop-blur-md",
  2: "mr-5 text-[2.6rem] md:text-[2.4rem]",
  3: "hidden md:block",
  4: "hidden text-[1rem] md:flex justify-between",
};

export default Navbar;
