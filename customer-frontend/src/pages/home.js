import React from "react";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

import "./home.css";

function Home() {
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
