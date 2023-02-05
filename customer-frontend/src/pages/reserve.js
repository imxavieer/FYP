import * as React from "react";
import { styled } from '@mui/material/styles';
import './reserve.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Paper from '@mui/material/Paper';

const BookTableButton = styled(Button)({
  padding: "12px 40px",
  margin: "5px",
  backgroundColor: "#F49300",
  color: "black",
  borderRadius: "0px",
  '&:hover': {
    backgroundColor: "#F49300",
    color: "black"
  }
})


function Reserve() {
  const [numpax, setNumPax] = React.useState('');
  const handleNumPaxChange = (event) => {
    setNumPax(event.target.value);
  };

  var [reserveDate, setDate] = React.useState();
  const handleDateChange = (newValue) => {
    setDate(newValue);
    reserveDate = newValue.$d
    reserveDate = JSON.stringify(reserveDate)
  }
  const todayDate = new Date();

  const [timeslot, setTimeslot] = React.useState('');
  const handleTimeslotChange = (event) => {
    setTimeslot(event.target.value);
  };

  const [showConfirmationPaper, setShowPaper] = React.useState(false);
  const openConfirmationPaper = () => setShowPaper(true);

  return (
    <React.Fragment>
      <Grid container className='reservationText'>
        <Box textAlign={'center'}>
          <h5 >RESERVATION</h5>
          <h2>Book A Table</h2>
          <p>Honey Night will be open for all days except Tuesday</p>
          <b><p>Book a reservation here or send a booking request to <span style={{color: "#F49300"}}>+65 8671 1443</span></p></b>
        </Box>
      </Grid>
      <Box sx={{minWidth: 120}}>
        <Grid container padding={5}>
          <Grid item xs={3}>
            <FormControl sx={{minWidth: 300}}>
              <InputLabel id="num-pax-label">Number of People</InputLabel>
                <Select
                  labelId="num-pax-label"
                  id="num-pax"
                  value={numpax}
                  label="Number of People"
                  onChange={handleNumPaxChange}
                  >
                  <MenuItem value={1}>1 Person</MenuItem>
                  <MenuItem value={2}>2 Person</MenuItem>
                  <MenuItem value={3}>3 Person</MenuItem>
                  <MenuItem value={4}>4 Person</MenuItem>
                  <MenuItem value={5}>5 Person</MenuItem>
                  <MenuItem value={6}>6 Person</MenuItem>
                  <MenuItem value={7}>7 Person</MenuItem>
                  <MenuItem value={8}>8 Person</MenuItem>
                  <MenuItem value={9}>9 Person</MenuItem>
                  <MenuItem value={10}>10 Person</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date"
                  value={reserveDate}
                  inputFormat="DD/MM/YYYY"
                  minDate={todayDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{minWidth: 300}}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={3}>
          <FormControl sx={{ minWidth: 300, marginLeft:'40px' }}>
              <InputLabel id="timeslot-label">Time</InputLabel>
                <Select
                  labelId="timeslot-label"
                  id="timeslot"
                  value={timeslot}
                  label="Time"
                  onChange={handleTimeslotChange}
                  >
                  <MenuItem value={1130}>11:30 AM</MenuItem>
                  <MenuItem value={1200}>12:00 PM</MenuItem>
                  <MenuItem value={1230}>12:30 PM</MenuItem>
                  <MenuItem value={1300}>1:00 PM</MenuItem>
                  <MenuItem value={1330}>1:30 PM</MenuItem>
                  <MenuItem value={1400}>2:00 PM</MenuItem>
                  <MenuItem value={1430}>2:30 PM</MenuItem>
                  <MenuItem value={1500}>3:00 PM</MenuItem>
                  <MenuItem value={1530}>3:30 PM</MenuItem>
                  <MenuItem value={1600}>4:00 PM</MenuItem>
                  <MenuItem value={1630}>4:30 PM</MenuItem>
                  <MenuItem value={1700}>5:00 PM</MenuItem>
                  <MenuItem value={1730}>5:30 PM</MenuItem>
                  <MenuItem value={1800}>6:00 PM</MenuItem>
                  <MenuItem value={1830}>6:30 PM</MenuItem>
                  <MenuItem value={1900}>7:00 PM</MenuItem>
                  <MenuItem value={1930}>7:30 PM</MenuItem>
                  <MenuItem value={2000}>8:00 PM</MenuItem>
                  <MenuItem value={2030}>8:30 PM</MenuItem>
                  <MenuItem value={2100}>9:00 PM</MenuItem>
                  <MenuItem value={2130}>9:30 PM</MenuItem>
                  <MenuItem value={2200}>10:00 PM</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <BookTableButton variant="contained" onClick={openConfirmationPaper} sx={{marginLeft: '50px'}}>NEXT</BookTableButton>
          </Grid>
        </Grid>

        {showConfirmationPaper && (
          <Grid>
            <Paper elevation={3} className='confirmation-paper'>
              <h2>{JSON.stringify(reserveDate).substring(9,11)}/{JSON.stringify(reserveDate).substring(6,8)}/{JSON.stringify(reserveDate).substring(1,5)} - {timeslot}</h2>
              <p>Number of People: {numpax}</p>
              <b><p>Please confirm your reservation by entering your email address.</p></b>
              <b><p>You will receive a confirmation email upon booking.</p></b>
              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <TextField
                    required
                    id="standard-required"
                    label="Email Address"
                    defaultValue=""
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={4}>
                  <BookTableButton variant="contained">BOOK A TABLE</BookTableButton>
                </Grid>
              </Grid>
            </Paper>
        </Grid>)}
      </Box>
    </React.Fragment>
  );
}

export default Reserve;
