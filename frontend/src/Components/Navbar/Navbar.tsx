import Logo from "./Logo";
import { NavList } from "./NavList";
import { IoCartOutline, IoReorderThreeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import SearchInput from "./Search";
import { style } from "../../types/styles";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FaTruckMonster } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FcNews } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Typography,
} from "@mui/material";
import { FcHome } from "react-icons/fc";

interface Props {}

const Navbar = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const pathsObj = {
    home: "/home",
    arriaves: "/arriaves",
    aboutus: "/aboutus",
  };

  const DrawerList = (): React.ReactNode => {
    return (
      <Box>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          subheader={
            <ListSubheader>
              <div className="flex justify-between text-5xl px-2 py-5 cursor-pointer">
                <Logo styles={`text-bgc-3`} />
                <IoReorderThreeOutline
                  className="cursor-pointer"
                  onClick={toggleDrawer}
                />
              </div>
            </ListSubheader>
          }
        >
          {/* =========Home btn ============ */}
          <ListItemButton
            onClick={() => console.log("Home")}
            sx={{ paddingY: "1rem", fontSize: 20 }}
          >
            <ListItemIcon>
              <FcHome />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Home
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton
            onClick={() => console.log("Home")}
            sx={{ paddingY: "1rem", fontSize: 20 }}
          >
            <ListItemIcon>
              <FcNews />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  New Arriaves
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton
            onClick={() => console.log("Home")}
            sx={{ paddingY: "1rem", fontSize: 20 }}
          >
            <ListItemIcon>
              <FaUsers />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  About Us
                </Typography>
              }
            />
          </ListItemButton>

          <ListItemButton
            onClick={() => console.log("Home")}
            sx={{ paddingY: "1rem", fontSize: 20 }}
          >
            <ListItemIcon>
              <FcPhone />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Contact Us
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      </Box>
    );
  };

  const toggleDrawer = (event: React.MouseEvent) => {
    // if(event.target)
    // console.log(event.target.nodeName);

    setOpened(!opened);
  };
  const CloseDrawer = (): React.ReactNode => {
    return (
      <button onClick={toggleDrawer} className="text-5xl block">
        <IoReorderThreeOutline />
      </button>
    );
  };

  return (
    <div className={`${styles[1]}`}>
      <Logo _path={`/landing`} styles={styles[2]} />
      <NavList navList={pathsObj} className={styles[3]} />
      <SearchInput />
      {/* =================Icons Part ================= */}
      <div className={`${styles[4]} hidden smlap:flex`}>
        <CiHeart className="mr-5" />
        <div className="mr-5 relative">
          <div className=" absolute rounded-full bg-[#570606] text-[9px] text-[#ffffff] px-[0.33rem] -top-[0.67rem] -right-2">
            2
          </div>
          <IoCartOutline className="absoulte text-lg" />
        </div>
        <CiUser className="mr-5" />
      </div>
      <button className="text-5xl block smlap:hidden" onClick={toggleDrawer}>
        <IoReorderThreeOutline />
      </button>
      <Drawer
        anchor={`left`}
        open={opened}
        // onClose={() => setOpened(false)}
        PaperProps={{
          sx: {
            width: "100%",
          },
          square: true,
        }}
        transitionDuration={1000}
      >
        {DrawerList()}
      </Drawer>
    </div>
  );
};

const styles: style = {
  1: "flex overflow-hidden items-center justify-between px-[3rem] py-[0.5rem] w-[100%] fixed bg-bgc-4/90 backdrop-blur-md",
  2: "mr-5 text-[2.6rem] md:text-[2.4rem]",
  3: "hidden smlap:block",
  4: "hidden text-[1rem] justify-between",
};

export default Navbar;
