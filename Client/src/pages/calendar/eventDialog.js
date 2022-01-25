import { React } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';

export default function EventDialog(props) {

  const [type, setType] = useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add You event. You can add the event title, description and duration
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Event Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <Box sx={{ display: 'flex', flexDirection: 'row'}}>
            <TextField
              autoFocus
              margin="dense"
              id="from"
              label="From"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="to"
              label="To"
              type="text"
              fullWidth
              variant="standard"
            />
           
          </Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Event Type</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={type}
                onChange={handleChange}
                label="Type"
              >
                <MenuItem value={'Holiday'}>Holiday</MenuItem>
                <MenuItem value={'Vacation'}>Vacation</MenuItem>
                <MenuItem value={'Weekend'}>Weekend</MenuItem>
                <MenuItem value={'Travel'}>Travel</MenuItem>
              </Select>
            </FormControl>
         
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
