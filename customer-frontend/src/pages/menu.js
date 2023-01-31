import React from "react";
import { Grid, Button, Link } from "@mui/material";
import MenuItem from "../components/menu/MenuItem";
import MenuPdf from "../documents/menu.pdf";
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
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 1",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
        {
            menuImage:
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 2",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
        {
            menuImage:
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 3",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
        {
            menuImage:
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 4",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
        {
            menuImage:
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 5",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
        {
            menuImage:
                "https://res.cloudinary.com/duxqahhdk/image/upload/v1675128915/samples/food/pot-mussels.jpg",
            menuItemName: "Menu Item 6",
            menuItemPrice: "$25",
            menuItemDescription:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        },
    ];
    return (
        <div className="menu">
            <h2>Menu page</h2>
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
            <Link target={"_blank"} href={MenuPdf}>
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
        </div>
    );
}
export default Menu;
