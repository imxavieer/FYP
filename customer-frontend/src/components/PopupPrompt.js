import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PopupPrompt.css";
import "../index.css";
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
            <Typography variant="h4">Welcome!</Typography>
            <Typography className = "popupText">Want to dine in?</Typography>
            <Button
                variant={"filled"}
                onClick={() => {
                    redirectToReservation();
                }}
                sx = {{
                    background:"#e19200",
                }}
            >
                Reserve here
            </Button>

            <Typography className = "popupText">Know what to eat?</Typography>
            <Button
                variant={"filled"}
                onClick={() => {
                    redirectToOrder();
                }}
                sx = {{
                    background:"#e19200",
                }}
            >
                Order here
            </Button>
        </Box>
    );
}

export default PopupPrompt;
