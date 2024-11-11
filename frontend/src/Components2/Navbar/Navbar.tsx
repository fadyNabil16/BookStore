import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { FcAbout, FcHome, FcNews, FcPhone, FcSearch } from "react-icons/fc";
import {
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  OutlinedInput,
  TextField,
  //   ListItemText,
} from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import MenuItem from "@mui/material/MenuItem";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Logo from "@/Components/Navbar/Logo";
import { FaUsers } from "react-icons/fa";
import CustomCarousel from "../carousel/carousel";
import OrderSummary from "../Cart/OrderSummary";
import { useAuth } from "@/Context/UserAuthContext.tsx";
import { useNavigation } from "react-router-dom";

type Props = {};
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
}));
const ListItemText = styled("p")(({ theme }) => ({
  display: "inline-block",
  fontWeight: "bold",
  fontSize: 16,
  padding: theme.spacing(0, 1),
}));

const SideBar = (): React.ReactNode => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerList = [
    {
      title: "Home",
      id: 1,
      icon: <FcHome />,
    },
    {
      title: "New Arriaves",
      id: 2,
      icon: <FcNews />,
    },
    {
      title: "About US",
      id: 3,
      icon: <FaUsers />,
    },
    {
      title: "Contact US",
      id: 4,
      icon: <FcPhone />,
    },
  ];

  function toggleDrawer(): void {
    setOpenDrawer(!openDrawer);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="large"
        onClick={toggleDrawer}
        color="inherit"
        sx={{ marginLeft: "auto" }}
      >
        <IoReorderThree />
      </IconButton>
      <Drawer
        transitionDuration={500}
        onClose={toggleDrawer}
        open={openDrawer}
        anchor="left"
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
            },
          },
        }}
      >
        <DrawerHeader>
          <Logo styles={`text-bgc-3 text-4xl py-2 px-3`} _path={""} />
          <IconButton onClick={toggleDrawer}>
            <IoReorderThree className="text-5xl" />
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          {drawerList.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton
                sx={{
                  fontSize: 25,
                  // justifyContent: "center",
                }}
                onClick={() => true}
              >
                {/* <div className="w-[50%] flex"> */}
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
                {/* </div> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

const Navbar = (props: Props) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigation();

  function handleNavigationToLogin() {
    navigate((location = "/login"));
  }

  return (
    <AppBar position="static" color="#fff">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          paddingInline: "1rem",
          marginBlock: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo styles={`text-4xl text-bgc-3`} _path={""} />
        {/* ================Start Search =============== */}
        <div className="flex flex-grow ml-auto">
          <OutlinedInput
            type="text"
            id="outlined-adornment-weight"
            placeholder="Search books, authors, ISBNs"
            sx={{
              margin: 1,
              marginLeft: "auto",
              marginRight: 5,
              width: "45%",
              paddingBlock: 0,
              backgroundColor: "#f6f5f7",
              borderRadius: 0,
              height: "3rem",
              display: { xs: "none", md: "flex" },
            }}
            endAdornment={
              <span className="absolute bg-[#e8e8e8] min-h-[100%] right-0 flex items-center justify-center w-[14%]">
                <FcSearch />
              </span>
            }
          />
          {!isLoggedIn ? (
            <button onClick={handleNavigationToLogin}>
              <FaRegUserCircle className="text-2xl" />
            </button>
          ) : null}
        </div>

        {/* ================End Search =============== */}
        <SideBar />
      </Container>
    </AppBar>
  );
};

export default Navbar;
