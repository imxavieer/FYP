import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HoneyNightLogo from "../honeynightlogo.PNG";
import DrawerComponent from "./DrawerComponent";

const HoneyNightKorean = styled(Link)({
  textDecoration: "none",
  color: "#F49300",
  fontSize: "25px",
  fontWeight: "bold",
  marginLeft: 30,
  marginRight: 30,
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#F49300",
  fontSize: "25px",
  fontWeight: "bold",
  marginLeft: 30,
  marginRight: 30,
  "&:hover": {
    color: "black",
    borderBottom: "1px solid black",
  },
});
const StyledLinkTwo = styled(Link)({
  textDecoration: "none",
  color: "white",
  backgroundColor: "#F49300",
  fontSize: "25px",
  fontWeight: "bold",
  marginLeft: 40,
  marginRight: 40,
});

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <AppBar
      position="sticky"
      style={{
        background: colorChange ? "#f9d230" : "transparent",
        boxShadow: "none",
      }}
    >
      <CssBaseline />
      <Toolbar>
        <img src={HoneyNightLogo} width="50" height="50" />
        <HoneyNightKorean to="/">HONEY NIGHT 꿀밤 </HoneyNightKorean>{" "}
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div>
            <StyledLink to="/">Home </StyledLink>{" "}
            <StyledLink to="/about">About </StyledLink>{" "}
            <StyledLink to="/menu">Menu </StyledLink>{" "}
            <StyledLink to="/contact">Contact Us </StyledLink>
            <StyledLinkTwo to="https://qashiereats.com/honeynight">
              Order{" "}
            </StyledLinkTwo>{" "}
            <StyledLinkTwo to="/reserve">Reserve </StyledLinkTwo>{" "}
          </div>
        )}{" "}
      </Toolbar>{" "}
    </AppBar>
  );
}
export default Navbar;
