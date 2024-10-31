import Logo from "./Logo";
import { NavList } from "./NavList";

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
        <Logo _path={`/landing`}/>
        <NavList navList={pathsObj}/>
        <input type="text"/>
    </div>
  );
};


export default Navbar;


const styles = {
    '1': "flex items-center justify-between px-[3rem] py-[0.5rem] w-[100%]",
    '2': ""
}