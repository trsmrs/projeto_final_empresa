import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
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

import ReplyIcon from '@mui/icons-material/Reply'


const EditSwitchsPoa = () => {
    const [form, setForm] = useState({
        local: '',
        hostname: '',
        ip: '',
        switchborda: '',
    })
    const { local, hostname, ip, switchborda } = form
    const { id } = useParams()
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()




    //  Carrega os dados assim que o componente é criado ou alterado.
    useEffect(() => {

        getSwitchsIdPoa()

    }, [])

    async function getSwitchsIdPoa() {
        axios.get(`${API_URL}/switchspoa/${id}`)
        .then(res => {
            setForm({
                ...form,
                local: res.data[0].local,
                hostname: res.data[0].hostname,
                ip: res.data[0].ip,
                switchborda: res.data[0].switchborda,
            })
        })
    }
    
    const handleInputChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    const handleClick = () => {
        setOpen(true)
        clearFields()

        setTimeout(() => {
            navigate('/addswitch')
        }, 1000)
    }


    // limpa os campos
    const clearFields = () => {
        setForm({
            local: "",
            hostname: "",
            ip: "",
            switchborda: "",

        })
    }
    // volta para página de edição/del/add
    const handleBack = () => {
        navigate('/addswitch')
    }

    // fechar
    const handleClose = (ev, res) => {
        if (res === 'click') {
            return;
        }
        setOpen(false)
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${API_URL}/switchspoa/${id}`, form)
            .then(res => {
            if(res.data.Status === "Success"){
                    handleClick()
                }
            })
    }

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
                            // error={local}
                            label="Local"
                            name="local"
                            value={local}
                            onChange={handleInputChange}
                            variant={"filled"}
                            required

                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: '#fff', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            // error={form.hostname.error}
                            label="Host Name"
                            name="hostname"
                            value={hostname}
                            onChange={handleInputChange}
                            variant={"filled"}

                            required
                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: 'white', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            // error={form.ip.error}
                            label="IP"
                            name="ip"
                            value={ip}
                            onChange={handleInputChange}
                            variant={"filled"}


                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 3 }}>
                        <TextField sx={{ color: 'white', bgcolor: 'white' }} inputProps={{ className: 'color-white' }}
                            InputLabelProps={{ className: 'color-white' }}
                            // error={form.switchborda.error}
                            label="Switch de Borda"
                            name="switchborda"
                            value={switchborda}
                            onChange={handleInputChange}
                            variant={"filled"}


                        />

                    </FormControl>


                    <FormControl sx={{ width: '100%', marginTop: 7 }}>
                        <Button sx={{
                            bgcolor: 'orange', color: '#fff',
                            fontWeight: 'bold',
                            height: 40,
                            "&:hover": { bgcolor: 'darkorange', color: '#ddd' }
                        }}
                            type="submit"
                        >Editar</Button>


                    </FormControl>
                </Container>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert severity="success" onClose={handleClose}>
                            <AlertTitle>Switch Editado</AlertTitle>
                            <strong>Switch Editado com sucesso!</strong>
                        </Alert>
                    </Snackbar>
                </Stack>
            </Container>
        </>
    )

} //fim do script




export default EditSwitchsPoa;