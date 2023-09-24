import * as React from 'react';
import { useState } from 'react';


import MenuBar from '../components/Menu/MenuBar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import _data from '../data/informations.json'

// import '../App.css'
import '../index.css'



function Procedimentos() {
    const [collapse, setCollapse] = useState(-1)
    const [data, setData] = useState(_data.dataProcedimentos)


    //  abrir o problema clicado.
    function toogleCollapse(index) {
        if (index === collapse) {
            setCollapse(-1)
            return
        }
        setCollapse(index)
    }

    return (
        <>
            <MenuBar />
            {/* <BasicMenu /> */}
            <div className='div-procedimentos'>
                <div className='div-title'>
                    <h2 className='collapse__title'>Procedimentos para incidentes - Passo a Passo</h2>
                </div>
                <div className='collapse__faq'>
                    {data.map((item, index) => {
                        return <div key={index} onClick={() => toogleCollapse(index)}>
                            <div className='collapse__faq-heading'>
                                <h3 className={collapse === index ? "active" : ""}>{item.problem}</h3>
                            </div>
                            <div>
                                {collapse === index ? (
                                    <>
                                        <ExpandLessIcon fontSize='medium' color='info' />
                                    </>)
                                    :
                                    (
                                        <>
                                            <ExpandMoreIcon fontSize='medium' color='info' />
                                        </>)}

                            </div>
                            <div>
                                <p id="collapse-solution" className={collapse === index ? "active" : "inactive"}>
                                    {item.solution}
                                </p>
                                <div className={collapse === index ? "active" : "inactive"}>

                                    {/* <img className='collapse-img' src={item.img}></img>
                                    <img className='collapse-img' src={item.img1}></img>
                                    <img className='collapse-img' src={item.img2}></img>
                                    <img className='collapse-img' src={item.img3}></img>
                                    <img className='collapse-img' src={item.img4}></img>
                                    <img className='collapse-img' src={item.img5}></img> */}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Procedimentos

