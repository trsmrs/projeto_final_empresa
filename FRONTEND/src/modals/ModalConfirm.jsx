import { React, useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Input
} from '@mui/material'
import '../App.css'


const ModalConfirm = (
  { open,
    onClose,
    onConfirm,
    title,
    msg }
) => {
  
 

  return (
    <>

      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Alert severity="warning"
           color='warning'
            sx={{
              bgcolor: 'rgba(204, 8, 8, 0)',
              fontSize: 'large',
              marginLeft: '30px',
              color: 'white'
            }}
          >
            {title}
          </Alert>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: 'rgba(204, 8, 8, 0.822)' }}>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ bgcolor: 'rgb(16, 28, 36)' }}>
          <Button id="btn-modal" onClick={onClose}>Cancelar</Button>
          <Button id="btn-modal" onClick={onConfirm}>Confirmar</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}


export default ModalConfirm