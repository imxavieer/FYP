import React from "react";
import Footer from "../components/Footer";

import "./about.css";

function About() {
  return (
    <>
      <div className="home-div">
        <img
          src="https://lh3.googleusercontent.com/pw/AMWts8A5JUdio1CGSW4N4yS23QFvd6_ud7ghDFyD2YBRA9z0cqgQyXWYD8OPNmRJ1PEvQ5vbU4rkq5xMuVINFAZhmQ4oIAbKdda2zPsdQMOFMgHMYtwDL4e7pORRfuI5om683LYDXIJL5_DJTXZ2WazB5h89nw=w472-h465-no?authuser=0"
          alt="honeyNightfood"
          className="about-background"
        />
        <div class="about-centered-text">
          <p>We intend to spread korean cuisine and make it accessible for everyone</p>
          <p> <span style={{color: "#e00202"}}><u>No GST. No Service Charge.</u></span></p>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}
export default About;
