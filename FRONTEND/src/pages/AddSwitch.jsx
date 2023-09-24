import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import environments from '../environments/environments'
const API_URL = environments.API_URL;


import MenuBar from '../components/Menu/MenuBar'
import { Delete, Edit } from '@mui/icons-material'
import {
    Box, Button, Typography, Snackbar,
    Stack,
    Alert,
    AlertTitle
} from '@mui/material'
import '../App.css'

import ModalConfirm from '../modals/ModalConfirm'


const AddSwitch = () => {
    const [loadSwitchs, setLoadSwitchs] = useState([])
    const [loadSwitchsPoa, setLoadSwitchsPoa] = useState([])
    const [deletedId, setDeletedId] = useState({})
    const [busca, setBusca] = useState('')
    const [buscaP, setBuscaP] = useState('')

    const [openModal, setOpenModal] = useState(false)
    const [openModalPoa, setOpenModalPoa] = useState(false)
    // const searchUpperCase = busca.toLocaleUpperCase()

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
    };

    // faz o carregamento dos dados a primeira vez que a página é carregada
    useEffect(() => {

        fetchDataSwitchs()
            .catch(console.error)

        fetchDataSwitchsPoa()
            .catch(console.error)
    }, [])

    //   carrega dados dos switchs na tabela
    const fetchDataSwitchs = async () => {
        await axios.get(`${API_URL}/switchs`)
            .then(res => {
                const data = res.data
                setLoadSwitchs(data)
            })
    }
    // carrega dados dos switchsPoa na tabela
    const fetchDataSwitchsPoa = async () => {
        await axios.get(`${API_URL}/switchspoa`)
            .then(res => {
                const data = res.data
                setLoadSwitchsPoa(data)
            })
    }


    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)

    }

    const handleToggleOpenModalPoa = () => {
        setOpenModalPoa(!openModalPoa)
    }


    const handleConfirmModal = () => {


        myHandleDelet(deletedId)
        handleToggleOpenModal()

    }

    const handleConfirmModalPoa = () => {
        myHandleDeletPoa(deletedId)
        handleToggleOpenModalPoa()

    }

    function handleClickDelete(id) {
        setDeletedId(id)
        handleToggleOpenModal()
    }

    function handleClickDeletePoa(id) {
        setDeletedId(id)
        handleToggleOpenModalPoa()
    }


    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'click') {
            return;
        }

        setOpen(false);
    }

    // filtra os switchs pela pesquisa no input
    const filtarSwitchs = (() => {
        const res = loadSwitchs.filter((_switch) => _switch.hostname?.includes(busca)
            || _switch.local?.includes(busca))

        return res.sort((a, b) => b.local < a.local ? 1 : -1 && b.hostname < a.hostname ? 1 : -1)
    })

    // filtra os switchs de poa pela pesquisa no input
    const filtarSwitchsPoa = (() => {
        const res = loadSwitchsPoa.filter((_switch) => _switch.hostname?.includes(buscaP)
            || _switch.local?.includes(buscaP))
        
        return res.sort((a, b) => b.local < a.local ? 1 : -1 && b.hostname < a.hostname ? 1 : -1)
    })

    // função adicionar um novo switch
    function myHandleAddSwitch() {
        navigate('/createswitchs')
    }


    // função adicionar um novo switch
    function myHandleAddSwitchPoa() {
        navigate('/createswitchspoa')
    }

    // Edita os switchs
    function myHandleEdit(id) {
        navigate(`/switchs/edit/${id}`)
    }

    // Edita os Switchs de POA
    function myHandleEditPoa(id) {
        navigate(`/switchspoa/edit/${id}`)
    }


    // Deleta o Switch selecionado pelo ID
    async function myHandleDelet(id) {
        await axios.delete(`${API_URL}/switchs/${id}`)
            .then(({ data }) => {
                const newSwitchs = loadSwitchs.filter(_switchs => _switchs.id !== id)

                setLoadSwitchs(newSwitchs)
            }).then(handleClick())
    }

    // Deleta o Switch de POA selecionado pelo ID
    async function myHandleDeletPoa(id) {

        await axios.delete(`${API_URL}/switchspoa/${id}`)
            .then(() => {
                const newSwitchs = loadSwitchsPoa.filter(_switchs => _switchs.id !== id)

                setLoadSwitchsPoa(newSwitchs)
            }).then(handleClick())
    }

    return (

        <div className='div-all'>

            <input className='search' type='search' placeholder='Pesquisar...'
                id='topo'
                // value={busca}
                onInput={toInputUppercase}
                onChange={(e) => setBusca(e.target.value)}
            />

            <input className='searchP' type='search' placeholder='Pesquisar...'
                id='topoP'
                // value={busca}
                onInput={toInputUppercase}
                onChange={(e) => setBuscaP(e.target.value)}
            />

            <MenuBar />
            <section className='container' id='container'>
                <Typography component='h6'
                    variant='h6'
                    sx={{
                        marginTop: '0', marginLeft: '7%',
                        backgroundColor: 'salmon',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#000'
                    }}
                >Switchs</Typography>
                   <Box>
                   <Button
                        sx={{
                            border: '1px solid greenyellow',
                            width:'180px',
                            marginTop:'5px',
                            marginLeft: '50px',
                            bgcolor: 'green',
                            color: '#fff',
                            "&:hover": {
                                bgcolor: '#074d07', color: '#fff',
                                borderRadius: '4px'
                            }
                        }}
                        onClick={myHandleAddSwitch}
                    >Criar Switch</Button>
                </Box>
                <table className='table-comarcas'>
                    <thead className='thead-comarcas'>
                        <tr>
                            <th scope='col'>LOCAL</th>
                            <th scope='col'>HOSTNAME</th>
                            <th scope='col'>IP</th>
                            <th scope='col'>SWITCH DE BORDA</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filtarSwitchs().map(_switches => {
                            return <tr key={_switches.id}>
                                <th scope='row'>{_switches.local}</th>
                                <td>{_switches.hostname}</td>
                                <td>{_switches.ip}</td>
                                <td>{_switches.switchborda}</td>
                                <td width="93px">

                                    <Edit color='warning' sx={{
                                        marginLeft: '2px',
                                        marginRight: '15px',
                                        cursor: 'pointer',
                                        "&:hover": {
                                            bgcolor: 'darksalmon', color: '#fff',
                                            borderRadius: '2px'
                                        }
                                    }}
                                        onClick={() => myHandleEdit(_switches.id)}>
                                    </Edit>

                                    <Delete color='error' sx={{
                                        marginLeft: '2px',
                                        marginRight: '5px',
                                        cursor: 'pointer',
                                        "&:hover": {
                                            bgcolor: 'darksalmon', color: '#fff',
                                            borderRadius: '2px'
                                        }
                                    }}
                                        onClick={() => handleClickDelete(_switches.id)}>
                                        </Delete>

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        

            {/* Codigo para os Switchs de poa */}
            <section className='containerPoa' id='containerPoa'>
                <Typography component='h6'
                    variant='h6'
                    sx={{
                        marginTop: '0', marginLeft: '7%',
                        backgroundColor: 'salmon',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: '#000'
                    }}
                >Switchs POA</Typography>
                   <Box>
                    <Button
                        sx={{
                            border: '1px solid greenyellow',
                            width:'180px',
                            marginTop:'5px',
                            marginLeft: '50px',
                            bgcolor: 'green',
                            color: '#fff',
                            "&:hover": {
                                bgcolor: '#074d07', color: '#fff',
                                borderRadius: '4px'
                            }
                        }}
                        onClick={myHandleAddSwitchPoa}
                    >Criar Switch POA</Button>
                </Box>
                <table className='table-comarcasPoa'>
                    <thead className='thead-comarcasPoa'>
                        <tr>
                            <th scope='col'>LOCAL</th>
                            <th scope='col'>HOSTNAME</th>
                            <th scope='col'>IP</th>
                            <th scope='col'>SWITCH DE BORDA</th>

                        </tr>
                    </thead>
                    <tbody>

                        {filtarSwitchsPoa().map(_switches => {
                            return <tr key={_switches.id}>
                                <th scope='row'>{_switches.local}</th>
                                <td>{_switches.hostname}</td>
                                <td>{_switches.ip}</td>
                                <td>{_switches.switchborda}</td>
                                <td width="93px">
                                        <Edit color='warning' sx={{
                                            marginLeft: '2px',
                                            marginRight: '15px',
                                            cursor: 'pointer',
                                            "&:hover": {
                                                bgcolor: 'darksalmon', color: '#fff',
                                                borderRadius: '2px'
                                            }
                                        }}
                                            onClick={() => myHandleEditPoa(_switches.id)}>
                                        </Edit>
                                    
                                        <Delete color='error' sx={{
                                            marginLeft: '2px',
                                            marginRight: '5px',
                                            cursor: 'pointer',
                                            "&:hover": {
                                                bgcolor: 'darksalmon', color: '#fff',
                                                borderRadius: '2px'
                                            }
                                        }}
                                            onClick={() => handleClickDeletePoa(_switches.id)}>

                                            </Delete>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>        
            <ModalConfirm
                open={openModal}
                onClose={() => handleToggleOpenModal()}
                onConfirm={handleConfirmModal}
                title="Excluir Switch"
                msg="Deseja realmente excluir este Switch?"
            />
            <ModalConfirm slotProps={{
                backdrop: {
                    timeout: 100,
                },
            }}
                open={openModalPoa}
                onClose={handleToggleOpenModalPoa}
                onConfirm={handleConfirmModalPoa}
                title="Excluir Switch."
                msg="Deseja realmente excluir este Switch?"
            />
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="warning" onClose={handleClose}>
                        <AlertTitle>Switch Excluído!</AlertTitle>
                        <strong>Switch Excluído com Sucesso!</strong>
                    </Alert>
                </Snackbar>
            </Stack>

        </div>


    )
}


export default AddSwitch