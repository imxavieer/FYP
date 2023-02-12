import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import "./home.css";

function Home() {
    // THIS CODE IS IMPORTANT FROM HERE
    let location = useLocation();
    const pictures = [
        "https://i.imgur.com/3hoca6H.jpg",
        "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Korean-Side-Dishes.png",
        "https://media.timeout.com/images/105303587/image.jpg",
    ];
    const [currentPicture, setCurrentPicture] = useState(0);
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

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         changePictureOnRight();
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // });

    // triggered via timeout
    const changePictureOnRight = () => {
        if (currentPicture == pictures.length - 1) {
            // setCurrentPicture(0);
            changePicture(0);
        } else {
            // setCurrentPicture(currentPicture + 1);
            changePicture(currentPicture + 1);
        }
    };

    const changePictureOnLeft = () => {
        if (currentPicture == 0) {
            // setCurrentPicture(pictures.length - 1);
            changePicture(pictures.length - 1);
        } else {
            // setCurrentPicture(currentPicture - 1);
            changePicture(currentPicture - 1);
        }
    };

    // to add animation
    const changePicture = (newPicture) => {
        setCurrentPicture(newPicture);
    };

    const { pathname } = useLocation();
    if (pathname === "/reserve") {
        return <></>;
    } else {
        return (
            <>
                {/* // THIS CODE IS IMPORTANT UNTIL HERE  */}
                <div className="home-div" id="home-div">
                    <img
                        src={pictures[currentPicture]}
                        alt="honeyNightfood"
                        className="home-background"
                    />
                    <div className="home-centered-text">
                        Delivering the most authentic Korean taste
                    </div>
                    <div className="arrowButtonContainer">
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => {
                                changePictureOnLeft();
                            }}
                        >
                            <ArrowBackIosIcon />
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            onClick={() => {
                                changePictureOnRight();
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
