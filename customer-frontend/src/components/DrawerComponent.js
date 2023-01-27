import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const MobileStyledLink = styled(Link)({
  textDecoration: "none",
  color: "#F49300",
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: 40,
  marginRight: 40,
  "&:hover": {
    color: "white",
    backgroundColor: "#F49300",
  },
});
const MobileIconButton = styled(IconButton)({
  color: "#F49300",
  justifyContent: "space-between",
});
function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="/">Home</MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="/about">About</MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="/menu">Menu</MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="/contact">Contact</MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="https://qashiereats.com/honeynight">
                Order
              </MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <MobileStyledLink to="/reserve">Reserve</MobileStyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <MobileIconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </MobileIconButton>
    </>
  );
}
export default DrawerComponent;
