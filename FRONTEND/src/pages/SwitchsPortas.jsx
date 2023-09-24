import * as React from 'react';
import info from '../data/consultaportas.json'


import MenuBar from '../components/Menu/MenuBar'




function SwitchsPortas() {
   
    return (
        <>
            <MenuBar />
            <div className='pagservices'>
                <h1>Consulta Switchs Portas</h1>
            </div>
            <div className='container-infos'>
                <table className='infos-switch-portas'>
                    <thead className='thead-infos-portas'>
                        <tr>
                            <th scope='col'>LOCAL</th>
                            <th scope='col'>NOME</th>
                            <th scope='col'>IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((item) => {
                            return <tr key={item.ip}>
                                <th scope='col'>{item.local}</th>
                                <td>{item.nome}</td>
                                <td>{item.ip}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SwitchsPortas