import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
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
    if (pathname === "/reserve") {
        return <></>;
    } else {
        return (
            <>
                {/* // THIS CODE IS IMPORTANT UNTIL HERE  */}
                <div className="about-div" id="about-div">
                    <img
                        src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Background-Images.jpg"
                        alt="honeyNightfood"
                        className="about-background"
                    />
                    <div class="about-centered-grid">
                        {/* Insert content here or else the layout will be all messed up  */}
                        <Box sx={{ margin: "10px auto" }}>
                            <Grid
                                container
                                // spacing={3}
                                // justifyContent="space-around"
                                // justifyContent="center"
                                // justifyContent="space-evenly"
                                // alignItems="center"
                                // sx={{ margin: "10px auto" }}
                                sx={{
                                    padding: {
                                        xs: "10px",
                                        sm: "25px",
                                        md: "50px",
                                    },
                                    width: {
                                        xs: "100vw",
                                        sm: "auto",
                                    },
                                }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    mt={5}
                                    // rowSpacing={1.5}
                                    // columnSpacing={1.5}
                                >
                                    <h3 className="SeoulHangangC">Our Story</h3>
                                    <p className="description">
                                    Looking for a taste of Korean cuisine that will tantalize your taste buds? Look no further than Honey Night, the premier Korean restaurant in town!
                                    Whether you're in the mood for savory bibimbap, spicy kimchi stew, or the delicious flavors of Korean barbecue, we have something for everyone.
                                    </p>
                                    <p className="description">
                                    안녕하세요! 우리 식당은 한국의 맛있는 음식을 제공하는 곳입니다. 저희는 다양한 한국적 요리, 예를 들어 비빔밥, 삼겹살, 김치찌개 등을 제공합니다. 또한 저희는 고객의 요구에 맞춰 적절한 음식을 추천하고, 최고의 서비스를 제공하겠습니다. 언제든지 저희 식당에 찾아주세요!
                                    </p>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    className="hidden-mobile"
                                    mt={5}
                                    rowSpacing={1.5}
                                    columnSpacing={1.5}
                                >
                                    {/* <p>this text is to be replaced with honeynight picture</p> */}
                                    <img class="aboutPic" src={aboutPic}></img>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* <p>
              We intend to spread korean cuisine and make it accessible for
              everyone
            </p>
            <p>
              <span style={{ color: "#e00202" }}>
                <u>No GST. No Service Charge.</u>
              </span>
            </p> */}
                    </div>
                </div>
            </>
        );
    }
}
export default About;
