import React from 'react'
import { Box, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const ModalInfo = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Typography onClick={handleOpen} variant='body2' color='#1976d2' sx={{cursor:'pointer', mt:'3px'}}>Show more</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color='#333' bgcolor='#f2f6e8' p={1}>
           Detailed text of the card
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            {props.text}
          </Typography>
          <Typography onClick={handleClose} variant='body2' color='#1976d2' sx={{cursor:'pointer', mt:'3px'}}>Close</Typography>
        </Box>
      </Modal>
    </>
  )
}

export default ModalInfo;