import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import environments from '../environments/environments'
const API_URL = environments.API_URL;

import {
    Button,
    TextField,
    Snackbar,
    Stack,
    Container,
    FormControl,
    Chip,
    Alert,
    AlertTitle
} from "@mui/material"
import '../App.css'
import ReplyIcon from '@mui/icons-material/Reply'



const CreateSwitchs = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const [form, setForm] = useState({
        local: "",
        hostname: "",
        ip: "",
        switchborda: "",
    })


    const handleClick = () => {
        setOpen(true);
        clearFields()

    }

    const handleClose = (event, reason) => {
        if (reason === 'click') {
            return;
        }

        setOpen(false);
    }

    const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
      };

    const handleInputChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${API_URL}/switchs`, form)
            .then(response => {
                handleClick()
            })
        } catch (err) {
            console.log(err)
        }
        setOpen(!open)
        clearFields()
    }

    const clearFields = () => {
        setForm({
            local: "",
            hostname: "",
            ip: "",
            switchborda: ""
        })

    }

    const handleBack = () => {
        navigate('/addswitch')
    }

    // Estilização dos componentes
    const styles = theme => ({
        multilineColor: {
            color: 'red'
        }
    });

    return (

        <>
            <Container sx={{ position: 'fixed', top: '0', left: '28vw' }}>
                {/*Container principal-engloba toda a página */}

                <Container sx={{ marginLeft: '-40px' }}>
                    <Chip sx={{
                        bgcolor: 'white', color: '#6cabdf', marginTop: '70px',
                        fontWeight: 'bold',
                        "&:hover": { bgcolor: '#938a6b', color: '#fff' }
                    }}

                        icon={<ReplyIcon fontSize='large' color='#6cabdf' />}
                        label='Voltar'
                        onClick={handleBack} />
                </Container>

                <Container component='form'
                    maxWidth='sm'
                    onSubmit={handleSubmit}
                    sx={{
                        marginTop: 10,
                        borderRadius: 4,
                        border: '4px solid white',
                        height: 500,
                        bgcolor: '#365f81'

                    }}>
                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField className="textfield" sx={{ color: '#ddd', bgcolor: 'white' }}
                            error={form.local.error}
                            label="Local"
                            name="local"
                            value={form.local}
                            onInput={toInputUppercase}
                            onChange={handleInputChange}
                            variant={"filled"}
                            required

                        />
                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: '#fff', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            error={form.hostname.error}
                            label="Host Name"
                            name="hostname"
                            value={form.hostname}
                            onInput={toInputUppercase}
                            onChange={handleInputChange}
                            variant={"filled"}

                            required
                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: 'white', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            error={form.ip.error}
                            label="IP"
                            name="ip"
                            value={form.ip}
                            onInput={toInputUppercase}
                            onChange={handleInputChange}
                            variant={"filled"}


                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: 'white', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            error={form.switchborda.error}
                            label="Switch de Borda"
                            name="switchborda"
                            value={form.switchborda}
                            onInput={toInputUppercase}
                            onChange={handleInputChange}
                            variant={"filled"}


                        />

                    </FormControl>


                    <FormControl sx={{ width: '100%', marginTop: 7 }}>
                        <Button sx={{
                            bgcolor: 'green', color: '#fff',
                            fontWeight: 'bold',
                            height: 40,
                            "&:hover": { bgcolor: 'darkgreen', color: '#ddd' }
                        }}
                            type="submit"
                        >Cadastrar</Button>


                    </FormControl>
                </Container>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert severity="success" onClose={handleClose}>
                            <AlertTitle>Switch Criado</AlertTitle>
                            <strong>Switch criado com sucesso!</strong>
                        </Alert>
                    </Snackbar>
                </Stack>
            </Container>
        </>


    )
}



export default CreateSwitchs