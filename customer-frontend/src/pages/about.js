import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import "./about.css";
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import aboutPic from '../HoneyNightBG.png';



function About() {
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
      <>
        {/* // THIS CODE IS IMPORTANT UNTIL HERE  */}
        <div className="about-div" id="about-div">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Background-Images.jpg"
            alt="honeyNightfood"
            className="about-background"
          />
          <div class="about-centered-grid">
            {/* Insert content here or else the layout will be all messed up  */}
            <Box>
              <Grid
                container
                // spacing={1}
                // justifyContent="space-around"
                // justifyContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item xs={12} sm={5} mt={5}>
                  <p class="small-text">
                    <u>Our Story  </u>
                  </p>
                  <h1>Honey Night</h1>
                  <p>We intend to spread korean cuisine and make it accessible for everyone</p>
                  <p>
                    <span style={{ color: "#e00202" }}>
                      No GST. No Service Charge.
                    </span>
                  </p>
                  <p class="small-text">Enquire now: 6677 2946</p>
                  <Button variant="outlined" color="warning"><a href="/#menu-div">View Menu</a></Button>
                </Grid>


                <Grid item sm={5} className="hidden-mobile" mt={5}>
                  {/* <p>this text is to be replaced with honeynight picture</p> */}
                  <img class="aboutPic" src={aboutPic}></img>
                </Grid>  

              </Grid>
            </Box>
            {/* <p>
              We intend to spread korean cuisine and make it accessible for
              everyone
            </p>
            <p>
              <span style={{ color: "#e00202" }}>
                <u>No GST. No Service Charge.</u>
              </span>
            </p> */}
          </div>
        </div>
      </>
    );
  }
}
export default About;
