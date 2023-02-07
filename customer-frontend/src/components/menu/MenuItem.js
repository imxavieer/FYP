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
      <Card className="menuItemContainer"
      sx = {{
        background:"#2f3133",
        transition:"background 0.3s, color 0.3s",
        "&:hover": {
          background: "#F49300",
          color:"white",
          // boxShadow:"8px 8px 8px #808080"
      },
      }}
      >
        <Grid container spacing={2}>
          {/* image */}
          <Grid item xs={12} md={6}>
            <img src={menuImage} className="menuItemImage" />
          </Grid>

          {/* other details */}
          <Grid item xs={12} md={6}>
            {/* name & price */}
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle1" textAlign={"left"} sx={{
                    fontWeight: 'bold',
                    color:"white",
                }}>
                  {menuItemName}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" textAlign={"right"} sx={{
                    fontWeight: 'bold',
                    color: 'white'
                }}>
                  {menuItemPrice}
                </Typography>
              </Grid>
            </Grid>
             <box 
             sx={{
                height: '40px',
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                <Typography
                    variant="subtitle2"
                    className="menuItemDescription">
                    {menuItemDescription}
                </Typography>
              </box>

            {/* </Box> */}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default MenuItem;
