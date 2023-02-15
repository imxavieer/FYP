import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import "./reserve.css";
import ErrorModal from "../../components/reservation/ErrorModal";
import SuccessModal from "../../components/reservation/SuccessModal";
// import axios from "axios";

import {
    Paper,
    TextField,
    Stack,
    Grid,
    Button,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

import Typography from "@mui/material/Typography";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
];

const Image = styled("img")({
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    width: "400px",
});

const BookTableButton = styled(Button)({
    padding: "10px 110px",
    margin: "20px",
    marginBottom: "0px",
    backgroundColor: "#F49300",
    fontWeight: "bold",
    color: "black",
    borderRadius: "5px",
    ":hover": {
        backgroundColor: "black",
        color: "#F49300",
    },
});

function Reserve() {
    let [timingFetched, fetchTiming] = useState([]);

    const todayDate = new Date();

    let [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    let [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        console.log(event.key);
    };

    let [numpax, setNumPax] = useState("");
    const handlePaxChange = (event) => {
        let newPax = event.target.value;
        setNumPax(newPax);
        numpax = newPax;
        getTiming();
    };

    let [reserveDate, setDate] = useState(todayDate);
    const handleDateChange = (event) => {
        setDate(event);
        reserveDate = event.$d;
        getTiming();
    };

    const [timeslot, setTimeslot] = useState("");
    const handleTimeslotChange = (event) => {
        setTimeslot(event.target.value);
    };

    function TimeLogicHandling({ arrayStatus }) {
        if (arrayStatus.length > 0) {
            return (
                <FormControl
                    sx={{ m: 1, minWidth: 300 }}
                    id="timeInput"
                    style={{ borderColor: "black" }}
                >
                    <InputLabel>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <AccessTimeIcon id="shiftIcon" />
                            <Typography className="roboto">Time</Typography>
                        </Stack>
                    </InputLabel>
                    <Select
                        value={timeslot}
                        label="pax"
                        onChange={handleTimeslotChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        id="selectTime"
                    >
                        {timingFetched.map((timing) => (
                            <MenuItem value={timing}>{timing}</MenuItem>
                        ))}
                        ;
                    </Select>
                </FormControl>
            );
        } else if (arrayStatus.length === 0) {
            return (
                <FormControl
                    sx={{ m: 1, minWidth: 300 }}
                    id="timeInput"
                    disabled
                >
                    <InputLabel>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <AccessTimeIcon id="shiftIcon" />
                            <Typography className="roboto">
                                None Available
                            </Typography>
                        </Stack>
                    </InputLabel>
                    <Select
                        value={timeslot}
                        label="pax"
                        onChange={handleTimeslotChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        id="selectTime"
                    >
                        {timingFetched.map((timing) => (
                            <MenuItem value={timing}>{timing}</MenuItem>
                        ))}
                        ;
                    </Select>
                </FormControl>
            );
        }
    }

    const getTiming = async (event) => {
        let timing_list = [
            "1200",
            "1230",
            "1300",
            "1330",
            "1400",
            "1430",
            "1500",
            "1530",
            "1600",
            "1630",
            "1700",
            "1730",
            "1800",
            "1830",
            "1900",
            "1930",
            "2000",
            "2030",
            "2100",
            "2130",
            "2200",
            "2230",
        ];

        let dateObject = new Date(reserveDate.toJSON().split("T")[0]);
        let year = dateObject.getFullYear();
        let month = dateObject.getMonth() + 1;
        let day = dateObject.getDate();

        let dayOfToday = todayDate.getDate();

        if (day < dayOfToday) {
            day += 1;
        }

        if (month < 10) {
            month = "0" + month;
        }

        let date = `${year}-${month}-${day}`;

        let pax = +numpax;

        // console.log(date);
        // console.log(pax);

        await fetch(`${process.env.REACT_APP_BACKEND_URL}reservation/timing`, {
            crossDomain: true,
            method: "POST",
            body: JSON.stringify({
                date: date,
                pax: pax,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                let return_list = [];
                response.map(function (timing) {
                    let index = timing_list.indexOf(timing);
                    timing_list.splice(index, 1);
                });
                timing_list.map(function (timing) {
                    let newTiming = changeTimeFormat(timing);
                    return_list.push(newTiming);
                });
                fetchTiming(return_list);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    };

    const changeTimeFormat = (time) => {
        let hour = time.slice(0, 2);
        let minute = time.slice(2);

        if (hour === "13") {
            hour = "1:";
        } else if (hour === "14") {
            hour = "2:";
        } else if (hour === "15") {
            hour = "3:";
        } else if (hour === "16") {
            hour = "4:";
        } else if (hour === "17") {
            hour = "5:";
        } else if (hour === "18") {
            hour = "6:";
        } else if (hour === "19") {
            hour = "7:";
        } else if (hour === "20") {
            hour = "8:";
        } else if (hour === "21") {
            hour = "9:";
        } else if (hour === "22") {
            hour = "10:";
        } else {
            hour = "12:";
        }

        let newString = hour + minute + "PM";
        return newString;
    };

    return (
        <React.Fragment>
            <div className="firstBlock" style={{}}>
                {/*Start of First Block*/}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    id="first_block"
                    style={{ backgroundImage: `url("")` }}
                >
                    <Grid container spacing={0} className="gridContainer">
                        <Grid container className="reservationText">
                            <Box textAlign={"center"}>
                                <h6 className="roboto" id="reservationWord">
                                    R E S E R V A T I O N
                                </h6>
                                <h1
                                    className="seoul"
                                    id="bookTableWord"
                                    style={{
                                        color: "#F49300",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Book A Table
                                </h1>
                                <p className="roboto" id="changeOne">
                                    Honey Night is open everyday besides Tuesday
                                </p>
                                <p className="roboto" id="changeThree">
                                    Operating Hours: 12pm to 11pm
                                </p>
                                <p className="roboto" id="changeTwo">
                                    Make a reservation online or send a booking
                                    request on{" "}
                                    <Button
                                        id="whatsapp"
                                        style={{
                                            padding: "",
                                            fontWeight: "bold",
                                            color: "black",
                                        }}
                                        variant="contained"
                                        size="small"
                                        onClick={handleOpenDialog}
                                    >
                                        WHATSAPP
                                    </Button>
                                </p>
                                <Dialog
                                    open={open}
                                    onClose={handleCloseDialog}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle>
                                        Scan or Whatsapp to +65 86711443
                                    </DialogTitle>
                                    <DialogContent>
                                        <img
                                            style={{
                                                width: "350px",
                                                height: "350px",
                                            }}
                                            alt=""
                                            src="https://lh3.googleusercontent.com/p/AF1QipPmQu_-uCy1LJeNnJNJHlkA9JwG1xebj19pVUH6=s1280-p-no-v1"
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseDialog}>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Grid>
                    </Grid>
                    {/*End of First Block*/}

                    {/*Start of Pax Input Field Block*/}
                    <Grid container className="GridContainerCenter">
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <AccountCircleIcon id="shiftIcon" />
                                    <Typography className="roboto">
                                        Number of Pax
                                    </Typography>
                                </Stack>
                            </InputLabel>
                            <Select
                                value={numpax}
                                label="pax"
                                onChange={handlePaxChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                            >
                                <MenuItem value={1}>1 Pax</MenuItem>
                                <MenuItem value={2}>2 Pax</MenuItem>
                                <MenuItem value={3}>3 Pax</MenuItem>
                                <MenuItem value={4}>4 Pax</MenuItem>
                                <MenuItem value={5}>5 Pax</MenuItem>
                                <MenuItem value={6}>6 Pax</MenuItem>
                                <MenuItem value={7}>7 Pax</MenuItem>
                                <MenuItem value={8}>8 Pax</MenuItem>
                                <MenuItem value={9}>9 Pax</MenuItem>
                                <MenuItem value={10}>10 Pax</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/*End of Time Input Field Block*/}

                    {/*Start of Date Input Field Block*/}
                    <Grid container className="GridContainerCenter">
                        <FormControl
                            sx={{ m: 1, minWidth: 300 }}
                            id="dateInput"
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={reserveDate}
                                    onChange={handleDateChange}
                                    inputFormat="YYYY/MM/DD"
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                    InputAdornmentProps={{ position: "start" }}
                                    minDate={todayDate}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    {/*End of Date Input Field Block*/}

                    {/*Start of Time Input Field Block*/}
                    <Grid container className="GridContainerCenter">
                        <TimeLogicHandling arrayStatus={timingFetched} />
                    </Grid>
                    {/*End of Time Input Field Block*/}

                    {/*Start of Email Input Field Block*/}
                    <Grid container className="GridContainerCenter">
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": { m: 1, width: "34ch" },
                            }}
                            noValidate
                            autoComplete="off"
                            id="emailInput"
                        >
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Email"
                                onKeyDown={handleEmailChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon id="shiftIcon" />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Box>
                    </Grid>
                    {/*End of Email Input Field Block*/}

                    {/*Start of Book Button Block*/}
                    <Grid container className="GridContainerCenter">
                        <BookTableButton>Book Now</BookTableButton>
                    </Grid>
                    {/*End of Book Button Block*/}
                </Grid>
            </div>

            {/*Start of Second Block*/}
            <div className="secondBlock">
                {/*}
                    <div class = "wrapper">
                        <div class = "bee">
                            <div class = "bee-body">
                                <div class = "blink"></div>
                                <div class = "mouth"></div>
                                <div class = "antenae"></div>
                                <div class = "bee-left"></div>
                                <div class = "bee-right"></div>
                            </div>
                        </div>
                        <div class = "shadow"></div>
                    </div>
                    {*/}
                <div
                    style={{
                        backgroundColor: "",
                        textAlign: "center",
                        marginTop: "80px",
                        marginBottom: "50px",
                    }}
                >
                    <h1
                        className="seoul"
                        id="bookTableWord"
                        style={{
                            backgroundColor: "",
                            color: "#F49300",
                            marginLeft: "84px",
                            marginRight: "84px",
                            fontSize: "4vw",
                        }}
                    >
                        A N N O U N C E M E N T S
                    </h1>
                </div>
                <Carousel
                    id="carousel"
                    focusOnSelect={true}
                    infiniteLoop
                    breakPoints={breakPoints}
                    style={{ backgroundColor: "" }}
                >
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipPHlM7f_2xQkT1Ed3pmXYppxbm6zxw9YOCHUiKf=w768-h768-n-o-v1"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipNUB1gMQY-bvdgkTKmLhrl86CV62FsZq-7uZOho=s1280-p-no-v1"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipNtL7lVz3XrsrXbJ8H97f23xe5CZlz3L33yOme2"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipMf2pHQKO6oFn5NYseeXaSI_S4ldIhALPkcFiVt=s1280-p-no-v1"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipPzowFP9fx_PgrrE6UHX_CSuM3b0ebigOjmKMfj=w768-h768-n-o-v1"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipM27Lw3LVGFkGLz80yAfIBdIpljlcLXJPFkicSt"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipPE9bX0DRzRq9gVIw0kxAQ73Ccp4R0HH_v-KQli"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipPQVs5sVdwhji4BPIVQLpOkHPN1KtKbXF5MsNj8"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipMq08BUaP1QnOgHnVZANWhlAIKMygiHXTPAhnNC=s1280-p-no-v1"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipM3prkRns_zSbi_Flgsfcp_pLukh0EUNsrnBOEM"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://lh3.googleusercontent.com/p/AF1QipMfWOBPWQm_MpwoDo1SYaze38Db3RssGWHQYwz7"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/276997867_1983630401816866_8498284467251807484_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=1kOU5VDM2CMAX9ODXCb&_nc_ht=scontent-xsp1-3.xx&oh=00_AfDHN-RT_LcJ_Zy3TSIKGHu653F6o1ODKJaRsNg7TnE4Sg&oe=63EF754D"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/279484859_2004520346394538_974556120937099312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=x6aZzJArt5MAX8We9-g&_nc_ht=scontent-xsp1-2.xx&oh=00_AfB7nZlw8kzjJOss77f2aU4YqwBUNfFCA-0aTH3iqst3ZQ&oe=63EFE142"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/111614733_1501413300038581_4936354285827641844_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=R85RxqYlf0EAX_OS8Vl&_nc_ht=scontent-xsp1-3.xx&oh=00_AfDrex1f8221LZmjvZvVBxiyXUUqWwtprDndiq64g5VZXg&oe=64129B82"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/110015347_1500728776773700_6402248089709668441_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PV5_8KPcbRQAX9qrzpm&_nc_ht=scontent-xsp1-2.xx&oh=00_AfDwBK6hwdmZhXtNdg_U8-TU9lu8Ml5qKR3M9bNhX71mGA&oe=64129B2A"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/88196493_1391611561018756_5433170488849334272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=CFoqSJpWC44AX9F7wiz&_nc_ht=scontent-xsp1-1.xx&oh=00_AfAjyY69MOC1QwL8g98DDBj8cBZFrSH7nb8l6ym0eGQU1w&oe=6412C59D"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82384205_1349964255183487_5276597327224635392_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=rA1GPqGqP00AX98gEIm&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAqCAjArHbTPSeaMi58EJN54RZ8RhWs3Iajj5Kw740yWg&oe=6412A67F"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/81625894_1329871723859407_7954305567067996160_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=nlxMNuVzQTwAX-FQYeP&_nc_ht=scontent-xsp1-3.xx&oh=00_AfDIqyFlp2Zf4Vj9Fp2axoomt-rb24uYhoIwqDo0Cuw7Mw&oe=6412BDD5"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/69586256_1221861111327136_1644961698295054336_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=PB2Js0YUK5QAX8w1pbf&_nc_ht=scontent-xsp1-1.xx&oh=00_AfAs5wF4Se241hmTqCS1nvxLmvYdw82midW0N0c5ZNiAnQ&oe=6412A292"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/66440165_1186708068175774_488103220506263552_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=eA5IG7sMSTYAX8rBkqT&_nc_ht=scontent-xsp1-3.xx&oh=00_AfBS4KjACd_37Vcdh-eHH2Cqre2C55RE_HbtWZ82fQ2kww&oe=6412B016"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/58796889_1133884403458141_8288111705213370368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XVUAWeDdeTkAX_5Vb6y&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBzdf0BYk47CS6kc4dtWxPVla_seCu7_oZwZ-wf7lai2g&oe=6412C102"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/59549770_1133884393458142_648811417729761280_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=OS6iZ5fN7uUAX-QGF7S&_nc_ht=scontent-xsp1-3.xx&oh=00_AfBNTMxqzr_pzUYIKd2CHm5Yh4R4uzK31AJ1X0Lmhzb6lQ&oe=6412B584"
                        draggable="false"
                    />
                    <Image
                        alt="image1"
                        id="img"
                        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/62235591_1173942472785667_3580511495038959616_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XifLJbSFfMgAX9SvZhf&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBCioA3AzTpl0atxAA_mDEMpH1Z4pvXNcRfSZcw08OMpw&oe=6412D039"
                        draggable="false"
                    />
                </Carousel>
            </div>
            {/*End of Second Block*/}

            {/*Start of Third Block */}
            <div className="thirdBlock">
                <Grid container>
                    <Grid item lg={7} id="mapBlock">
                        <h1>Map will be here</h1>
                    </Grid>

                    <Grid item lg={5} id="mapDetailBlock">
                        <h1>Details will be here</h1>
                    </Grid>
                </Grid>
            </div>

            {/*End of Third Block */}
        </React.Fragment>
    );
}

export default Reserve;
