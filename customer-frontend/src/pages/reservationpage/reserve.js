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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

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
                        {timingFetched.map((timing) => {
                            const { value, label } = timing;
                            return <MenuItem value={value}>{label}</MenuItem>;
                        })}
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
                    // the value should still be in in HHmm (this is for the datetime part for adding reservation)
                    // the formatted timing can be used as a label
                    return_list.push({ value: timing, label: newTiming });
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

    const bookTable = async () => {
        const stringifiedDate = JSON.stringify(reserveDate)
        const day = stringifiedDate.substring(9, 11);
        const month = stringifiedDate.substring(6, 8);
        const year = stringifiedDate.substring(1, 5);

        const timeSlotString = timeslot.toString();
        const hour = timeSlotString.substring(0, 2);
        const minutes = timeSlotString.substring(2, 4);
        console.log({
            day,
            month,
            year,
            timeSlotString,
            hour,
            minutes,
        });
        const currDate = new Date(year, month-1, day, hour, minutes, 0, 0);
        await fetch(`${process.env.REACT_APP_BACKEND_URL}reservation`, {
            crossDomain: true,
            method: "POST",
            body: JSON.stringify({
                name: "Michiru Sama",
                email,
                pax: numpax,
                date_of_visit: currDate,
            }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message);
            })
            .catch((error) => {
                console.error("Error", error);
                alert("Reservation failed!");
            });
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
                                value={email}
                                // onKeyDown={handleEmailChange}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
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
                        <BookTableButton
                            onClick={() => {
                                bookTable();
                            }}
                        >
                            Book Now
                        </BookTableButton>
                    </Grid>
                    {/*End of Book Button Block*/}
                </Grid>
            </div>
            {/*End of Third Block */}
        </React.Fragment>
    );
}

export default Reserve;
