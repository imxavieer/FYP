import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  marginLeft: 20,
  "&:hover": {
    color: "yellow",
    borderBottom: "1px solid black",
  },
});
const BlackTypography = styled(Typography)({
  color: "black",
});
function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <CssBaseline />
      <Toolbar>
        <BlackTypography variant="h4">Navbar </BlackTypography>{" "}
        <div>
          <StyledLink to="/">Home </StyledLink> <Link to="/about">About </Link>{" "}
          <Link to="/contact">Contact Us </Link> <Link to="/menu">Menu </Link>{" "}
          <Link to="https://qashiereats.com/honeynight">Order </Link>{" "}
          <Link to="/reserve">Reserve </Link>{" "}
        </div>{" "}
      </Toolbar>{" "}
    </AppBar>
  );
}
export default Navbar;
