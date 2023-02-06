import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./home.css";

function Home() {
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
  const { pathname } = useLocation();
  if (pathname === "/reserve") {
    return <></>;
  } else {
    return (
      <>
        <div className="home-div" id="home-div">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipM2-1q3y02OLtQRglRivhdYtyLJzKASZgslUM2M=w1080-h608-p-no-v0"
            alt="honeyNightfood"
            className="home-background"
          />
          <div class="home-centered-text">
            Delivering the most authentic Korean taste
          </div>
        </div>
      </>
    );
  }
}

export default Home;
