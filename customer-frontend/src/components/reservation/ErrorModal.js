import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid red',
    boxShadow: 24,
    p: 4,
};

export default function ErrorModal(props) {
    const count = 0
    const openModal = props.openModal;
    const [open, setOpen] = React.useState(openModal);
    const handleClose = () => setOpen(false);
    const errors = props.errors;
    console.log(errors);
    console.log(open);
    console.log(openModal);

    return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Error!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <span>{(errors.numpax)}</span>
                <span>{(errors.date)}</span>
                <span>{(errors.timeslot)}</span>
                <span>{(errors.email)}</span>
            </Typography>
        </Box>
        </Modal>
    </div>
    );
}