import React from "react";
import Footer from "../components/Footer";

import "./home.css";

function Home() {
  return (
    <>
      <div className="home-div">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipM2-1q3y02OLtQRglRivhdYtyLJzKASZgslUM2M=w1080-h608-p-no-v0"
          alt="honeyNightfood"
          className="home-background"
        />
        <div class="home-centered-text">
          Delivering the most authentic Korean taste
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
