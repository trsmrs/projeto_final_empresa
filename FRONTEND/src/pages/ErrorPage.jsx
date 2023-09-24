import errorImg from '../assets/logos/notFound.jpg'
import '../App.css'

import MenuBar from '../components/Menu/MenuBar'

const ErrorPage = () => {
    return (
        <>
            <MenuBar />

            <div className='errorPage'>
                <h1>Oops Esta página ainda não existe!</h1>
                <img src={errorImg}></img>
            </div>
        </>
    )

}

export default ErrorPage