import React from "react";
import { Box } from "@mui/material";
import "./PopupPrompt.css";
import "../index.css";
import DiningIcon from "@mui/icons-material/Dining";
function PopupPrompt() {

    const redirectToOrder = () => {
        window.location.href = "https://qashiereats.com/honeynight";
    };
    return (
        <Box
            className="popupContainer"
            onClick={() => {
                redirectToOrder();
            }}
        >
            <Box className="iconContainer">
                <DiningIcon />
            </Box>
            Order here
        </Box>
    );
}

export default PopupPrompt;
