import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import "./MenuItem.css";
// props:
// menuImage --> url of the image
// menuItemName --> name of the menu item
// menuItemPrice --> price of the menu item
// menuItemDescription --> description of the menu item

function MenuItem({
    menuImage,
    menuItemName,
    menuItemPrice,
    menuItemDescription,
}) {
    return (
        <Grid item xs={12} sm={6}>
            <Card className="menuItemContainer">
                <Grid container spacing={2}>
                    {/* image */}
                    <Grid item xs={12} sm={4}>
                        <img src={menuImage} className="menuItemImage" />
                    </Grid>

                    {/* other details */}
                    <Grid item xs={12} sm={8}>
                        {/* name & price */}
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h5" textAlign={"left"}>
                                    {menuItemName}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    variant="subtitle1"
                                    textAlign={"right"}
                                >
                                    {menuItemPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <h6 className={"menuItemDescription"}>
                            {" "}
                            {menuItemDescription}
                        </h6> */}
                        {/* <Box
                            sx={{
                                padding: "5px",
                                maxHeight: {
                                    sm: "50%",
                                    overflow: "hidden",
                                },
                            }}
                        > */}
                        <Typography
                            variant="subtitle2"
                            className="menuItemDescription"
                            sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {menuItemDescription}
                        </Typography>
                        {/* </Box> */}
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

export default MenuItem;
