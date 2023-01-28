import React from "react";
import Footer from "../components/Footer";

import "./home.css";

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
      <Footer></Footer>
    </>
  );
}

export default Home;
