import { React, useState } from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Alert,
    Input,
    Typography
} from '@mui/material'
import '../App.css'



const DialogConfirm = (
    { open,
        onClose,
        onConfirm,
        title,
        msg,
        onInput,
        onColor
    }
) => {
    const [caps, setCaps] = useState(false)
    function acceptEnter(ev) {
        if (ev.key === 'Enter') {
            onConfirm()
        }
    }


    // esta função checa se o caps está ligado e passa para o useState
    // const checkCapsLock = (event) => {
    //     if (event.getModifierState('CapsLock')) {
    //         setCaps(true);
    //     } else {
    //         setCaps(false);
    //     }
    // };

    const checkCapsLock = () => {
        window.addEventListener("keydown", function (event) {
            if (event.getModifierState("CapsLock")) {
                setCaps(true)
            } else {
                setCaps(false)
            }
        });
    }

    return (
        <>
            <Dialog disableRestoreFocus
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title-pass"
                aria-describedby="alert-dialog-description-pass"
            >
                <DialogTitle id="alert-dialog-pass"
                >
                    {title}
                    <Alert severity="warning"
                        sx={{
                            position: 'relative',
                            top: -40,
                            width: '10px',
                            bgcolor: '#0c3b69',
                            fontSize: 'large',
                        }}
                    >
                    </Alert>
                </DialogTitle>
                <DialogContent sx={{ bgcolor: "#0c3b69", marginTop: '-30px' }}>
                    <DialogContentText id={onColor}>
                        {msg}
                    </DialogContentText>

                    {caps && (
                        <p className='caps-lock'>Aviso! Caps Lock está ligado</p>
                    )}

                </DialogContent>
                <Input className="input-pass" placeholder='Entre com a senha'
                    autoFocus
                    type='password'
                    onChange={onInput}
                    onKeyUp={checkCapsLock}
                    onKeyDown={acceptEnter}
                    variant='outlined'
                    

                />
                <DialogActions sx={{ bgcolor: '#0c3b69' }}>
                    <Button id="btn-modal-left-pass" onClick={onClose}>Cancelar</Button>
                    <Button id="btn-modal-right-pass" onClick={onConfirm}>Acessar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default DialogConfirm