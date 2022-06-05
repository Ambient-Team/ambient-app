import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import FormControl from '@mui/material/FormControl'

export default function FormDialog() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handlePrevious1 = () => {
    setOpen1(false);
  };

  const handleNext1 = () => {
    setOpen1(false);
    setOpen2(true);
  };

  const handlePrevious2 = () => {
    setOpen2(false);
    setOpen1(true)
  };

  const handleNext2 = () => {
    setOpen2(false);
    setOpen3(true);
  };

  const handlePrevious3 = () => {
    setOpen3(false);
    setOpen2(true)
  };

  const handleNext3 = () => {
    setOpen3(false);
    setOpen4(true);
  };

  const handlePrevious4 = () => {
    setOpen4(false);
    setOpen3(true)
  };

  const handleNext4 = () => {
    setOpen4(false);
  };

  return (
    <div>
        <Button variant="contained" endIcon={<AddSharpIcon />} color="primary" sx={{ mt: 1, ml: 11, borderRadius: 5 }} position="absolute" onClick={handleClickOpen}>
            Add request
        </Button>
      <Dialog open={open1} onClose={handleClose}>
        <DialogTitle>Request1</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the request for your service.
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 500, minHeight: 100 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            fullWidth
            variant="standard"
          />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePrevious1}>Previous</Button>
          <Button onClick={handleNext1}>Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>Request2</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the request for your service.
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 500, minHeight: 100 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            fullWidth
            variant="standard"
          />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePrevious2}>Previous</Button>
          <Button onClick={handleNext2}>Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open3} onClose={handleClose}>
        <DialogTitle>Request3</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the request for your service.
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 500, minHeight: 100 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            fullWidth
            variant="standard"
          />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePrevious3}>Previous</Button>
          <Button onClick={handleNext3}>Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open4} onClose={handleClose}>
        <DialogTitle>Request4</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the request for your service.
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 500, minHeight: 100 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            fullWidth
            variant="standard"
          />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePrevious4}>Previous</Button>
          <Button onClick={handleNext4}>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}