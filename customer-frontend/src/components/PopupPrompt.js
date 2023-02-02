import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PopupPrompt.css";
import "../index.css";
import DiningIcon from "@mui/icons-material/Dining";
function PopupPrompt() {
    const navigate = useNavigate();
    const redirectToReservation = () => {
        navigate("/reserve");
    };
    const redirectToOrder = () => {
        window.location.replace("https://qashiereats.com/honeynight");
    };
    return (
        <Box className="popupContainer">
            <Box className="iconContainer">
                <DiningIcon />
            </Box>
            <Button
                variant={"filled"}
                onClick={() => {
                    redirectToOrder();
                }}
                sx={{
                    background: "#e19200",
                    "&:hover": {
                        background: "#A56402",
                    },
                }}
            >
                Order here
            </Button>
        </Box>
    );
}

export default PopupPrompt;
