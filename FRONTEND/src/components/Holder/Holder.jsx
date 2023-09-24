import { useEffect, useState } from 'react'
import React from 'react';
import ReactDomServer from 'react-dom/server'
import './Holder.css'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import copy from 'react-copy-to-clipboard';


function Holder(data) {

    const switchs = data.data
    const [dados, setDados] = useState([])
    const [open, setOpen] = useState(false);




    useEffect(() => {
        setDados(switchs)
    }, [switchs])



    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        location.reload()
    };




    // Copia os dados da tabela para o ClipBoard do sistema(Control + C)
    const copyToClipboard = () => {

        let tableContent = switchs.map(row => { delete row.id; return Object.values(row).join('\t')}).join('\n');
        let html = ReactDomServer.renderToStaticMarkup(tableContent)

        copy(html, {
            asHtml: true
        })
        handleClickOpen()
    };


    // remove os dados selecionados da tabela holder
    function myHandleRemove(selectedSwitch) {
        const novosDados = switchs.filter(item => item !== selectedSwitch);
        data.onDelete(novosDados)
    };


    return (
        <>

            <Typography variant="h6" component='h6'
                className='text-info'
                bgcolor={'lightcoral'}
            >
                Dados a serem copiados
            </Typography>

            <section className="holder">
                <table className='tabela'>
                    {(
                        switchs.length ? (

                            <thead className='thead-holder'>
                                <tr id='tbl' className='tr-holder'>
                                    <th scope='col'>LOCAL</th>
                                    <th scope='col'>HOSTNAME</th>
                                    <th scope='col'>IP</th>
                                    <th scope='col'>SWITCH DE BORDA</th>
                                </tr>
                            </thead>
                        ) : null
                    )}
                    <tbody>
                        {(

                            switchs.map(_Switch => {
                                return <tr key={_Switch.id}>
                                    <td>{_Switch.local}</td>
                                    <td>{_Switch.hostname}</td>
                                    <td>{_Switch.ip}</td>
                                    <td>{_Switch.switchborda}</td>
                                    <td><button className='btn-remove'
                                        onClick={() => myHandleRemove(_Switch)}>
                                        Remover</button>
                                    </td>
                                </tr>
                            })
                        )}

                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Dados copiados para área de transferência!"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Dados foram copiados, esta janela pode ser fechada.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Fechar</Button>

                            </DialogActions>
                        </Dialog>

                    </tbody>
                </table>
                {
                    (
                        switchs.length ? (
                            <>
                                <button className="btn-copy"
                                    onClick={() => copyToClipboard()}>
                                    Copiar dados</button>
                            </>
                        ) : null
                    )
                }
            </section>


        </>
    )
}

export default Holder;