import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Button, Link, Box, Toolbar } from "@mui/material";
import MenuItem from "./menuitem/MenuItem";
import MenuPdf from "../../documents/menu.pdf";
import "./menu.css";

function Menu({ setMenuItemSize }) {
    // MenuItem
    // menuImage --> url of the image
    // menuItemName --> name of the menu item
    // menuItemPrice --> price of the menu item
    // menuItemDescription --> description of the menu item

    const menuItems = [
        {
            menuImage: "https://i.imgur.com/ndyIwwL.jpg",
            menuItemName: "Honey Night Kimbab",
            menuItemPrice: "$9.90",
        },
        {
            menuImage:
                "https://assets.bonappetit.com/photos/624f3dc73a6e981591892a9d/master/pass/0407-bibimbap-at-home-lede.jpg",
            menuItemName: "Bimbimbap",
            menuItemPrice: "$10",
        },
        {
            menuImage:
                "https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC_5089-3.jpg",
            menuItemName: "Kimchi Stew",
            menuItemPrice: "$12",
        },
        {
            menuImage:
                "https://asianinspirations.com.au/wp-content/uploads/2021/09/R00397-Hot-Spicy-Tteokbokki.jpg",
            menuItemName: "Spicy Rice Cake",
            menuItemPrice: "$13",
        },
        {
            menuImage:
                "https://as2.ftcdn.net/v2/jpg/02/67/01/95/1000_F_267019566_2xc1s5VszZCMLXhpDfRlwpaLtuzCBUJ4.jpg",
            menuItemName: "Stir Fried Baby Octupus",
            menuItemPrice: "$26",
        },
        {
            menuImage:
                "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg",
            menuItemName: "Boneless Chicken",
            menuItemPrice: "$15",
        },
    ];
    // THIS CODE IS IMPORTANT FROM HERE
    const { pathname } = useLocation();
    let location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);
    if (pathname === "/reserve") {
        return <></>;
    } else {
        return (
            <div className="menu-div" id="menu-div">
                <Toolbar />
                <h6
                    className="roboto"
                    id="reservationWord"
                    style={{
                        color: "#F49300",
                        margin: "0 auto",
                    }}
                    align="center"
                >
                    T O P 6
                </h6>
                <h1
                    className="seoul"
                    id=""
                    style={{
                        fontWeight: "bold",
                        margin:"0",
                        marginTop:"0",
                        marginBottom:"20px"
                    }}
                >
                    Menu
                </h1>

                <Grid container justifyContent="space-evenly" spacing={1}>
                    <Grid item xs={12}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid
                                container
                                spacing={1}
                                id="menuItems"
                                sx={{
                                    width: {
                                        xs: "100vw",
                                        sm: "80vw",
                                        md: "60vw",
                                    },
                                    // margin: "0 auto",
                                }}
                            >
                                {menuItems.map((item, index) => {
                                    const {
                                        menuImage,
                                        menuItemName,
                                        menuItemPrice,
                                    } = item;
                                    return (
                                        <MenuItem
                                            key={index}
                                            menuImage={menuImage}
                                            menuItemName={menuItemName}
                                            menuItemPrice={menuItemPrice}
                                            setMenuItemSize={setMenuItemSize}
                                        />
                                    );
                                })}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Link
                    target={"_blank"}
                    href={MenuPdf}
                    sx={{
                        textDecoration: "none",
                        
                    }}
                >
                    <Button
                        variant="filled"
                        className={"actionButton"}
                        sx={{
                            background: "#e19200",
                            color: "white",
                            display: "flex",
                            padding: "10px",
                            margin: "40px auto",
                        }}
                    >
                        View Full Menu
                    </Button>
                </Link>
            </div>
        );
    }
}
export default Menu;
