import React from "react";
import {
    Grid,
    Card,
    Typography,
    Box,
    CardMedia,
    CardContent,
} from "@mui/material";
import "./MenuItem.css";
// props:
// menuImage --> url of the image
// menuItemName --> name of the menu item
// menuItemPrice --> price of the menu item
// menuItemDescription --> description of the menu item

function MenuItem({ menuImage, menuItemName, menuItemPrice }) {
    return (
        <Grid item xs={12} sm={4}>
            <Card
                className="menuItemContainer"
                sx={{
                    background: "#2f3133",
                    transition: "background 0.3s, color 0.3s",
                    "&:hover": {
                        background: "#F49300",
                        color: "white",
                        // boxShadow:"8px 8px 8px #808080"
                    },
                    margin: "0 auto",
                }}
            >
                <CardMedia  src={menuImage} >
                  <img src={menuImage} className="menuItemImage" />
                </CardMedia>
                <CardContent></CardContent>
                {/* <Grid container>
                    <Grid item xs={12} md={6}>
                        <img src={menuImage} className="menuItemImage" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={9}>
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"left"}
                                    sx={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    {menuItemName}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"right"}
                                    sx={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    {menuItemPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Card>
        </Grid>
    );
}

export default MenuItem;
