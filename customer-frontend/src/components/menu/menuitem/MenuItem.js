import React, { useState } from "react";
import {
    Grid,
    Card,
    Typography,
    CardContent,
} from "@mui/material";
import "./MenuItem.css";
// props:
// menuImage --> url of the image
// menuItemName --> name of the menu item
// menuItemPrice --> price of the menu item
// menuItemDescription --> description of the menu item

const imageProperties = {
    backgroundSize: {
        xs: "100% 400px",
        sm: "100% 300px",
        md: "100% 400px",
        lg: "100% 450px",
    },
    height: {
        xs: "400px",
        sm: "300px",
        md: "400px",
        lg: "450px",
    },
};

function MenuItem({ menuImage, menuItemName, menuItemPrice }) {
    const { backgroundSize, height } = imageProperties;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                className="menuItemContainer"
                sx={{
                    backgroundImage: `url(${menuImage})`,
                    transition: "background 0.3s, color 0.3s",
                    "&:hover": {
                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${menuImage}) `,
                        color: "white",
                        backgroundSize,
                        height,
                    },
                    backgroundSize,
                    height,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "start",
                }}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
            >
                <CardContent
                    sx={{
                        width: "100%",
                    }}
                >
                    {isHovered ? (
                        <>
                            <Typography
                                variant={"h6"}
                                textAlign={"center"}
                                style={{
                                    width: "100%",
                                    // background: "rgba(0,0,0,0.5)",
                                }}
                            >
                                {menuItemName}
                            </Typography>
                            <Typography
                                variant={"h6"}
                                textAlign={"center"}
                                style={{
                                    width: "100%",
                                    // background: "rgba(0,0,0,0.5)",
                                }}
                            >
                                {menuItemPrice}
                            </Typography>
                        </>
                    ) : (
                        <></>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default MenuItem;
