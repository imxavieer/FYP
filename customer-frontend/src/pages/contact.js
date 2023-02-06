import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./contact.css";
import { useEffect } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const mapStyles = {
  width: "30%",
  height: "30%",
};

function Contact() {
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
        <div id="contact-div">
          <Grid container justifyContent={"center"} margin={"40px 0px"}>
            <Grid item xs={6}>
              <Box textAlign={"center"}>
                <h2>Locate Us</h2>
                <p>Kindly refer to the interactive map below find us</p>
                <div id="Map">
                  <b>Google Map supposed to be displayed here</b>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign={"center"}>
                <h2>More details</h2>
                <p>
                  Kindly refer to infographic below for our opening hours and
                  contact information
                </p>
                <p>
                  <b>
                    Opening hrs and contact details supposed to be displayed
                    here
                  </b>
                </p>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Grid
              container
              justifyContent={"center"}
              margin={"40px 0px"}
            ></Grid>
          </Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ultrices fermentum ornare. Donec eu arcu sit amet velit maximus
          laoreet eu et velit. Praesent facilisis turpis id congue rutrum.
          Curabitur sodales felis rutrum auctor luctus. Vivamus est odio,
          porttitor nec consectetur non, finibus non leo. Vivamus laoreet a ante
          eu facilisis. Nunc placerat, nisl quis porta dapibus, metus massa
          sodales nulla, ac eleifend enim turpis in magna. Suspendisse vulputate
          dui orci, in bibendum enim blandit ac. Sed non orci non leo eleifend
          euismod id a erat. Integer eleifend odio vitae lorem imperdiet, ut
          porttitor odio condimentum. Sed quis leo condimentum, convallis dolor
          nec, sollicitudin est. Aenean lobortis porta massa, ac tempor nisl
          eleifend ut. Nam consequat pharetra ornare. Donec consectetur tellus
          quis enim vulputate, quis molestie ex blandit. Donec id posuere augue.
          Aliquam feugiat diam ut auctor venenatis. Vivamus consequat quam nibh,
          semper facilisis lorem bibendum auctor. Duis porttitor nisl commodo
          nisl ultricies euismod. Maecenas quis nulla ante. Integer finibus
          libero massa, eu tincidunt nisi consequat at. Vivamus ullamcorper odio
          in nisl interdum vehicula. Etiam auctor ipsum vel est lacinia rhoncus.
          Vestibulum blandit sed nisl id volutpat. Aliquam at arcu dui. In
          tempus massa est. Nulla posuere maximus nisi, id gravida mi maximus
          id. Nunc fermentum euismod magna, nec congue ligula. Aenean in lectus
          tincidunt, rutrum felis eu, finibus est. Suspendisse semper odio id
          faucibus lobortis. Morbi eu leo sapien. Curabitur at sem tristique,
          efficitur turpis quis, volutpat sem. Maecenas in pulvinar lectus, ut
          imperdiet lectus. Sed fringilla libero non nibh viverra, at bibendum
          mi finibus. In porttitor luctus felis a congue. Praesent ac nulla sed
          urna scelerisque cursus a et ligula. Nam placerat tortor nec odio
          suscipit pellentesque. Curabitur aliquam dignissim justo, quis semper
          metus vehicula vitae. Nullam consectetur tellus sed arcu sagittis
          facilisis. Aenean ultrices et lacus dictum pulvinar. Nullam vehicula
          egestas ex. Donec viverra ante non magna congue cursus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Cras risus ipsum,
          hendrerit nec semper vitae, pretium eget metus. Nam et turpis eget
          eros facilisis auctor. Nunc sed sapien vitae felis hendrerit
          scelerisque. Praesent fringilla molestie sem, non ultricies justo
          convallis ut. In ac libero molestie, pharetra lorem a, aliquam diam.
          Pellentesque nulla mauris, fringilla quis eros et, malesuada
          ullamcorper nibh. Etiam a ullamcorper purus. Mauris bibendum pharetra
          suscipit. Aliquam eu est eu odio sodales suscipit et id justo.
          Praesent mollis tincidunt sem non lobortis. Donec sit amet imperdiet
          dui. Vivamus ut egestas augue, sit amet laoreet ligula. Quisque ac est
          imperdiet, ornare mi eu, suscipit ligula. Ut at cursus nibh. Aliquam
          varius est sed risus scelerisque, sit amet cursus dolor condimentum.
          Donec suscipit diam quis eros lacinia porta. Mauris egestas orci id
          sagittis accumsan. Suspendisse congue laoreet lacus eget tristique.
          Fusce diam turpis, mattis ac laoreet sit amet, semper non justo.
          <Footer></Footer>
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
            defer
          ></script>
          <script src="./googlemap.js"></script>
        </div>
      </>
    );
  }
}

export default Contact;
