import React from "react";
import Entrance from "../honeynightentrance.jpg";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./home.css";
function SocialMedia({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={4}>
      <div className="center-text">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => window.open('https://www.instagram.com/honeynightsg/')}
        >
          <InstagramIcon color="warning" fontSize="large"/>
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => window.open('https://www.facebook.com/HONEYNIGHTSG/')}
        >
          <FacebookIcon color="warning" fontSize="large"/>
        </IconButton>
      </div>
    </Grid>
  );
}
function CompanyLogo({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={4}>
      <div className="center-text company-logo">
        <img
          src="https://honeytesting.netlify.app/assets/images/logo/logo_bottom_yellow.png"
          alt="honeynight logo"
        />
      </div>
    </Grid>
  );
}
function CopyRight({ classes }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={12} md={4}>
      <div className="center-text copyright">© Copyright Honey Night Co.</div>
    </Grid>
  );
}

function Home() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
        }}
      >
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipM2-1q3y02OLtQRglRivhdYtyLJzKASZgslUM2M=w1080-h608-p-no-v0"
          alt="honeyNightfood"
          style={{
            display: "block",
            margin: "auto",
            height: "120vh",
            width: "auto",
            opacity: 0.8,
            position: "relative",
            alignSelf: "center",
          }}
        />
      </div>
      <div className="footer-bg">
        <Grid container spacing={1}>
          <SocialMedia />
          <CompanyLogo />
          <CopyRight />
        </Grid>
      </div>
    </>
  );
}

export default Home;
