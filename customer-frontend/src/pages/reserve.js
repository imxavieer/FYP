import * as React from "react";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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

  const handleChange = (event) => {
    setNumPax(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container justifyContent={'center'} margin={"40px 0px"}>
        <Box textAlign={'center'}>
          <h5 >RESERVATION</h5>
          <h2>Book A Table</h2>
          <p>Honey Night will be open for all days except Tuesday</p>
          <b><p>Book a reservation here or send a booking request to <span style={{color: "#F49300"}}>+65 8671 1443</span></p></b>
        </Box>
      </Grid>
      <Box sx={{ minWidth: 120 }}>
        <Grid container>
          <Grid item xs={3}>
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="num-pax-label">Number of People</InputLabel>
                <Select
                  labelId="num-pax-label"
                  id="num-pax"
                  value={numpax}
                  label="Number of People"
                  onChange={handleChange}
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
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="YYYY-MM-DD"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="time"
              label="Time"
              type="time"
              defaultValue="12:00"
              minutesStep="30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1800, // 30 min
              }}
              sx={{ width: 150 }}
            />
          </Grid>

          <Grid item xs={3}>
            <BookTableButton variant="contained">BOOK A TABLE</BookTableButton>
          </Grid>
        </Grid>
      </Box>

      
    </React.Fragment>
  );
}

export default Reserve;
