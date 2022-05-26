import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddSharpIcon from '@mui/icons-material/AddSharp';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" endIcon={<AddSharpIcon />} color="primary" sx={{ mt: 5, ml: 11, borderRadius: 5 }} position="absolute" onClick={handleClickOpen}>
            Add request
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the request for your service.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}