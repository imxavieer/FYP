import React from "react";
import { Grid, Button, Link } from "@mui/material";
import MenuItem from "../components/menu/MenuItem";
import MenuPdf from "../documents/menu.pdf";
import PopupPrompt from "../components/PopupPrompt";
import "./menu.css";
function Menu() {
    // MenuItem
    // menuImage --> url of the image
    // menuItemName --> name of the menu item
    // menuItemPrice --> price of the menu item
    // menuItemDescription --> description of the menu item
    const menuItems = [
        {
            menuImage:
                "https://www.thespruceeats.com/thmb/m-tYmUNj3nHdyXsTXdp_xsqH1oM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kimbap-korean-sushi-rolls-2118795-Hero_01-2453c846edd1449ab87c26761be72064.jpg",
            menuItemName: "Honey Night Kimbab",
            menuItemPrice: "$9.90",
            menuItemDescription:
                "Seasoning rice roll with egg, pork ham, crabstick, carrot, spinach, burdock, yellow radish.",
        },
        {
            menuImage:
                "https://assets.bonappetit.com/photos/624f3dc73a6e981591892a9d/master/pass/0407-bibimbap-at-home-lede.jpg",
            menuItemName: "Bimbimbap",
            menuItemPrice: "$10",
            menuItemDescription:
                "Mixed rice and homemade chill paste sauce with variety of vegetables and Chicken or Tuna. Serve with Soup.",
        },
        {
            menuImage:
                "https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC_5089-3.jpg",
            menuItemName: "Kimchi Stew",
            menuItemPrice: "$12",
            menuItemDescription:
                "Kimchi stew is one of the most loved of all the stews in Korean cuisine. You can choose pork or tuna. Serve with Rice.",
        },
        {
            menuImage:
                "https://asianinspirations.com.au/wp-content/uploads/2021/09/R00397-Hot-Spicy-Tteokbokki.jpg",
            menuItemName: "Spicy Rice Cake",
            menuItemPrice: "$13",
            menuItemDescription:
                "popular Korean food made from chewy rice cakes cooked in a red, spicy broth.",
        },
        {
            menuImage:
                "https://as2.ftcdn.net/v2/jpg/02/67/01/95/1000_F_267019566_2xc1s5VszZCMLXhpDfRlwpaLtuzCBUJ4.jpg",
            menuItemName: "Stir Fried Baby Octupus",
            menuItemPrice: "$26",
            menuItemDescription:
                "Baby octopus are marinated in a spicy gochujang sauce and seared quickly on the grill",
        },
        {
            menuImage:
                "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg",
            menuItemName: "Boneless Chicken",
            menuItemPrice: "$15",
            menuItemDescription:
                "An undeniable Korean favorite loved for its aromatic and irrestible crunch",
        },
    ];
    return (
        <div className="menu">
            <h1>Menu</h1>
            <Grid container spacing={2}>
                {menuItems.map((item, index) => {
                    const {
                        menuImage,
                        menuItemName,
                        menuItemPrice,
                        menuItemDescription,
                    } = item;
                    return (
                        <MenuItem
                            key={index}
                            menuImage={menuImage}
                            menuItemName={menuItemName}
                            menuItemPrice={menuItemPrice}
                            menuItemDescription={menuItemDescription}
                        />
                    );
                })}
                {/* <Grid item xs={12}>
                    <Link target={"_blank"} href={MenuPdf}>
                        <Button
                            variant="filled"
                            className={"actionButton"}
                            sx={{
                                background: "#e19200",
                                color: "white",
                                margin: "10px auto",
                            }}
                        >
                            View Full Menu
                        </Button>
                    </Link>
                </Grid> */}
            </Grid>
            <Link target={"_blank"} href={MenuPdf}
            sx = {{
                textDecoration:"none"
            }}>
                <Button
                    variant="filled"
                    className={"actionButton"}
                    sx={{
                        background: "#e19200",
                        color: "white",
                        margin: "10px auto",
                        display:"flex",
                        padding:"10px"
                    }}
                >
                    View Full Menu
                </Button>
            </Link>
            <PopupPrompt/>
        </div>
    );
}
export default Menu;
