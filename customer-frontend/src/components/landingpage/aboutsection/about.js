import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Box, Button, CardMedia } from "@mui/material";
import aboutPic from "../../../images/HoneyNightBG.png";
import "./about.css";

function scrollToMenu() {
    document.getElementById("menu-div").scrollIntoView({ behavior: "smooth" });
}

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowResize);
    });
    if (pathname === "/reserve") {
        return <></>;
    } else {
        return (
            <>
                {/* // THIS CODE IS IMPORTANT UNTIL HERE  */}
                <Box
                    className="about-div"
                    id="about-div"
                    sx={{
                        backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Background-Images.jpg)`,
                    }}
                >
                    <div class="about-centered-grid">
                        {/* Insert content here or else the layout will be all messed up  */}
                        <Box sx={{ margin: "10px auto" }}>
                            <Grid
                                container
                                rowSpacing={{ xs: 0, md: 2 }}
                                // gap={}
                                sx={{
                                    padding: {
                                        xs: "20px",
                                        sm: "35px",
                                        md: "50px",
                                    },
                                    width: {
                                        xs: "100vw",
                                        sm: "auto",
                                    },
                                    // margin: "0 0 0 0",
                                }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    sx={{ padding: "0px" }}
                                >
                                    <Box
                                        sx={{
                                            margin: "0 auto",
                                            paddingRight: {
                                                xs: "0px",
                                                md: "10px",
                                            },
                                        }}
                                    >
                                        <h1
                                            className="title"
                                            style={{
                                                textAlign:
                                                    windowWidth < 600
                                                        ? "center"
                                                        : "left",
                                            }}
                                        >
                                            Our Story
                                        </h1>
                                        <p
                                            className="englishdescription"
                                            style={{
                                                textAlign:
                                                    windowWidth < 600
                                                        ? "center"
                                                        : "left",
                                            }}
                                        >
                                            Looking for a taste of Korean
                                            cuisine that will tantalize your
                                            tastebuds? Look no further than
                                            Honey Night, the premier Korean
                                            restaurant in town! Whether you're
                                            in the mood for savory bibimbap,
                                            spicy kimchi stew, or the delicious
                                            flavors of Korean barbecue, we have
                                            something for everyone. <br></br>
                                        </p>
                                        <p
                                            className="description"
                                            style={{
                                                textAlign:
                                                    windowWidth < 600
                                                        ? "center"
                                                        : "left",
                                            }}
                                        >
                                            {/* Insert doNotWrap for those phrases that you don't want the responsive browser to separate */}
                                            ???????????????! ?????? ????????? ?????????
                                            ????????? ????????? ????????????
                                            <span class="doNotWrap">
                                                {" "}
                                                ????????????.{" "}
                                            </span>
                                            ????????? ????????? ????????? ??????, ?????? ??????
                                            ?????????,
                                            <span class="doNotWrap">
                                                {" "}
                                                ?????????,{" "}
                                            </span>
                                            ???????????? ?????? ???????????????<br></br>
                                            ?????? ?????????
                                            <span class="doNotWrap">
                                                {" "}
                                                ?????????
                                            </span>
                                            ????????? ?????? ????????? ????????? ????????????,
                                            ????????? ????????????<br></br>
                                            ?????????????????????. ????????????
                                            <span class="doNotWrap">
                                                {" "}
                                                ??????{" "}
                                            </span>
                                            ????????? ???????????????!
                                        </p>
                                    </Box>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    mt={5}
                                    rowSpacing={1.5}
                                    columnSpacing={1.5}
                                    sx={{ padding: "0px" }}
                                >
                                    <Box
                                        sx={{
                                            margin: "0 auto",
                                            paddingLeft: {
                                                xs: "0",
                                                md: "10px",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component={"img"}
                                            src={aboutPic}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Box>
            </>
        );
    }
}
export default About;
