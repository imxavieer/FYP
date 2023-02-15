import React from "react";
import Home from "../../components/landingpage/homesection/home";
import About from "../../components/landingpage/aboutsection/about";
import Menu from "../../components/menu/menu";
import Contact from "../../components/landingpage/contactsection/contact";
import Annoucement from "../../components/landingpage/annoucementsection/annoucement";
function LandingPage() {
    return (
        <div>
            <Home />
            <About />
            <Menu />
            <Annoucement />
            <Contact />
        </div>
    );
}

export default LandingPage;
