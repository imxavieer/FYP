import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link as LinkMui } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HoneyNightLogo from "../honeynightlogo.PNG";
import DrawerComponent from "./DrawerComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Navbar.css";
import Home from "../pages/home";
import About from "../pages/about";
import Menu from "../pages/menu";
import Contact from "../pages/contact";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "@fontsource/roboto/300.css";

import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const HoneyNightKorean = styled(Link)({
  textDecoration: "none",
  color: "#F49300",
  fontSize: "2.0vw",
  fontWeight: "bold",
  marginLeft: 20,
  marginRight: 40,
});

const StyledTab = styled(Tab)({
  textDecoration: "none",
  color: "white",
  fontSize: "1.8vw",
  fontWeight: "bold",
  marginLeft: 40,
  marginRight: 40,
  "&:hover": {
    color: "black",
    borderBottom: "1px solid black",
  },
});
const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
  fontSize: "1.1vw",
  fontWeight: "bold",
  marginLeft: 78,
  // marginRight: 40,
  "&:hover": {
    // color: "black",
    color: "#F49300",
    borderBottom: "1px solid black",
  },
});
const StyledLinkTwo = styled(LinkMui)({
  textDecoration: "none",
  color: "white",
  backgroundColor: "#F49300",
  fontSize: "1.5vw",
  fontWeight: "bold",
  marginLeft: 60,
  borderRadius: "5px",
  // marginRight: 40,
  "&:hover": {
    color: "black",
    borderBottom: "1px solid black",
  },
});

function Navbar() {
  // let [start, setStart] = useState([true, false, false, false]);
  // const [value, setValue] = useState(0);

  // const onLeave = function (origin, destination, direction) {
  //   setValue(destination.index);
  //   setStart(
  //     start.map((_, index) => {
  //       if (index === destination.index) return true;
  //       return false;
  //     })
  //   );
  // };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // const all = [
  //   <Home start={start[0]} />,
  //   <About start={start[1]} />,
  //   <Menu start={start[2]} />,
  //   <Contact start={start[3]} />,
  // ];
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <span>
      <AppBar
        position="sticky"
        style={{
          background: "#000000",
          borderBottom: "1px solid grey",
          // boxShadow: "none",
        }}
      >
        <CssBaseline />
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Grid container spacing={0}>
            <Grid item xs={5} lg={5}>
              <div className="nav-title">
                <img
                  src={HoneyNightLogo}
                  alt="honeynightlogo"
                  className="honeynight-logo"
                />
                <HoneyNightKorean to="/" className="seoul-hangang ">
                  HONEY NIGHT 꿀밤
                </HoneyNightKorean>{" "}
              </div>
            </Grid>
            <Grid item xs={7} lg={7}>
              {isMobile ? (
                <DrawerComponent />
              ) : (
                <div className="nav-links">
                  <StyledLink to="/#home-div" className="roboto">
                    Home{" "}
                  </StyledLink>{" "}
                  <StyledLink to="/#about-div" className="roboto">
                    About{" "}
                  </StyledLink>
                  <StyledLink to="/#menu-div" className="roboto">
                    Menu{" "}
                  </StyledLink>{" "}
                  <StyledLink to="/#contact-div" className="roboto">
                    Contact Us{" "}
                  </StyledLink>
                  <StyledLink
                    onClick={() =>
                      window.open("https://qashiereats.com/honeynight")
                    }
                    to={window.location.href}
                    className="roboto padding-navitem-order hover-effect-class"
                  >
                    Order{" "}
                  </StyledLink>{" "}
                  <StyledLink
                    to="/reserve"
                    className="roboto padding-navitem-reserve "
                  >
                    Reserve{" "}
                  </StyledLink>{" "}
                </div>
              )}{" "}
            </Grid>
          </Grid>
        </Toolbar>{" "}
      </AppBar>
    </span>
  );
}
export default Navbar;
