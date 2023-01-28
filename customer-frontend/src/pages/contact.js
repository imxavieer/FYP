import React from 'react';
import Footer from "../components/Footer";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./contact.css";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const mapStyles = {
  width: "30%",
  height: "30%"
}

function Contact() {
  return (
    <>

      <Grid container justifyContent={'center'} margin={"40px 0px"}>
          <Grid item xs={6}>
            <Box textAlign={'center'}>
              <h2>Locate Us</h2>
            <p>Kindly refer to the interactive map below find us</p>
            <div id="Map"><b>Google Map supposed to be displayed here</b></div>

            </Box>
          </Grid>  
          <Grid item xs={6}>
            <Box textAlign={'center'}>
              <h2>More details</h2>
            <p>Kindly refer to infographic below for our opening hours and contact information</p>
            <p><b>Opening hrs and contact details supposed to be displayed here</b></p>
            </Box>

          </Grid>

        </Grid>

        <Box> 
          <Grid
            container
            justifyContent={'center'}
            margin={"40px 0px"}>
          </Grid>
        </Box>
    <Footer></Footer>
    
      
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>

    <script src="./googlemap.js"></script> 
      
  </>
  );
  }

export default Contact;