import MenuBar from '../components/Menu/MenuBar'
import logo from '../assets/logos/images.jpeg'
import '../App.css'


export default function CorpoInicio() {

    return (
        <>
            <MenuBar />
            <div className='container-index'>
                <div className='container-index-title'>
                    <h1>Nome da Empresa Aqui</h1>
                </div>
                <div className='container-imgs'>
                    <div>
                        <img src={logo}
                         draggable={false}
                        ></img>
                    </div>

                </div>
            </div>
        </>
    )
}


