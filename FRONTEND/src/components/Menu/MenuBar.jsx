import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../routes/AppRoutes'
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'
import { Divider, Menu, MenuItem } from '@mui/material';
import auth from '../../auth/Auth';
import DialogPass from '../../modals/DialogPass'
const PASS = auth.PASSWORD
import '../../App.css'


export default function SearchAppBar() {
    const [_pass, set_Pass] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [mens, setMens] = useState('Entre com a senha para acesso')
    const [_color, _setColor] = useState('alert-dialog-description')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLink1 = () => {
        navigate('/procedimentos')
        handleClose()

    };

    const handleLink2 = () => {
        navigate('/algar')
        handleClose()

    };

    const handleLink3 = () => {
        navigate('/resumoprocedimentos')
        handleClose()

    };

    const handleLink4 = () => {
        navigate('/sistemas')
        handleClose()

    };

    const handleLink5 = () => {
        window.open('/informacoes', '_banlk')
        handleClose()

    };

    const handleLink6 = () => {
        window.open('/switchportas', '_banlk')
        handleClose()

    };

    const handleLink7 = () => {
        navigate('/switchsaps')
        handleClose()

    };


    // Chama o modal para acesso com senha do gerenciador de switchs
    const handleLink8 = () => {
        handleToggleOpenModal()

    };

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)

    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleConfirmModal = (pass) => {
        pass = _pass
        if (pass == PASS) {
            <AppRoutes auth={true} />
            navigate('/addswitch')
        } else {
            teste()
        }

    }

    const teste = () => {
        setMens("Senha errada!")
        _setColor('alert-dialog-description-red')
    }

    // passa  a senha para o setState
    const myHandlePAss = (e) => {
        set_Pass(e)
        _setColor('alert-dialog-description')
        setMens('Entre com a senha para acesso')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>

                        <Link to={"/"}><img src={logo}></img></Link>

                        <nav className='navbar'>
                            <ul>
                                <li>
                                    <Link to="/switchs">Switchs</Link>
                                </li>
                                <Divider orientation="vertical" variant='middle' flexItem
                                    sx={{ backgroundColor: 'white' }}
                                >
                                </Divider>
                                <li>
                                    <Link to="/switchspoa">Switchs Poa</Link>
                                </li>
                                <Divider orientation="vertical" variant='middle' flexItem
                                    sx={{ backgroundColor: 'white' }}
                                >
                                </Divider>
                                <li id='li-proc'

                                    onMouseDown={handleClick}
                                    onMouseLeave={handleClose}
                                >Prodecimentos
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',

                                        }}
                                    >
                                        <MenuItem
                                            sx={{ fontWeight: 'bold' }}
                                            onClick={handleLink1}
                                        >Procedimentos simples
                                        </MenuItem>

                                        <MenuItem
                                            sx={{ fontWeight: 'bold' }}
                                           
                                        >Procedimentos intermediários
                                        </MenuItem>
                                        <MenuItem
                                            sx={{ fontWeight: 'bold' }}
                                           
                                        >Procedimentos avançados
                                        </MenuItem>

                                    </Menu>
                                </li>
                                <Divider orientation="vertical" variant='middle' flexItem
                                    sx={{ backgroundColor: 'white' }}
                                >
                                </Divider>
                                <MenuItem sx={{
                                    fontWeight: 'bold',
                                    "&:hover": {
                                        color: '#000',
                                        borderRadius: '2px',
                                        background: '#1976d214'
                                    }
                                }}
                                    onClick={handleLink8}>
                                    Gerenciar Switchs</MenuItem>
                            </ul>
                        </nav>
                    </Toolbar>
                </AppBar>
            </Box>

            <DialogPass
                open={openModal}
                onClose={() => handleToggleOpenModal()}
                onConfirm={() => handleConfirmModal()}
                title="Acesso Restrito"
                msg={mens}
                onColor={_color}
                onInput={(e) => myHandlePAss(e.target.value)}
            />
        </>
    );
}