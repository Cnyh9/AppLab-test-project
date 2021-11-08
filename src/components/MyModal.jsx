import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

export const MyModal = () => {

    const {modalState, setModalState, handleSubmit} = useContext(MyContext)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#fff',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
            open={modalState}
            onClose={() => setModalState(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Yo!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The note should not be {handleSubmit() ? 'empty' : 'repeated'}.
                </Typography>
            </Box>
        </Modal>
    )
}
