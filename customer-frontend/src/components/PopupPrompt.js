import React from "react";
import { Box } from "@mui/material";
import "./PopupPrompt.css";
import "../index.css";
import DiningIcon from "@mui/icons-material/Dining";
import { useLocation } from "react-router-dom";
function PopupPrompt() {
  const { pathname } = useLocation();
  const redirectToOrder = () => {
    window.location.href = "https://qashiereats.com/honeynight";
  };
  if (pathname === "/reserve") {
    return <></>;
  } else {
    return (
      <Box
        className="popupContainer"
        onClick={() => {
          window.open("https://qashiereats.com/honeynight");
        }}
      >
        <Box className="iconContainer">
          <DiningIcon />
        </Box>
        Order here
      </Box>
    );
  }
}

export default PopupPrompt;
