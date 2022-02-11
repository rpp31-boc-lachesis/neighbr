import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddRunForm from './AddRunForm.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1 },
};

export default function AddRunModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Post New Run</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-new-run"
        aria-describedby="modal-description"
        sx={{ '.MuiBox-root': { borderRadius: '4px' } }}
      >
        <Box sx={style}>
          <AddRunForm handlePostDest={props.handlePostDest} />
        </Box>
      </Modal>
    </div>
  );
}
