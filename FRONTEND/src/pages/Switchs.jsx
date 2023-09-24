import { useState, useEffect } from 'react'
import axios from 'axios'
import environments from '../environments/environments'
const API_URL = environments.API_URL;


import '../App.css'
import Holder from '../components/Holder/Holder'
import MenuBar from '../components/Menu/MenuBar'

function Switchs() {
  const [loadSwitchs, setLoadSwitchs] = useState([])
  const [switchs, setSwitchs] = useState([])
  const [busca, setBusca] = useState('')

  const toInputUppercase = e => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

  // faz o carregamento dos dados a primeira vez que a página é carregada
  useEffect(() => {
    fetchDataSwitchs()
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


  const filtarSwitchs = (() => {
    const res = loadSwitchs.filter((_switch) => _switch.hostname?.toLocaleUpperCase().includes(busca)
      || _switch.local?.toLocaleUpperCase().includes(busca))

      return res.sort((a, b) => b.local < a.local ? 1 : -1 && b.hostname < a.hostname ? 1 : -1)
  })


  function myHandleAdd(selectedSwitch) {
    let clone = switchs.slice()
    let switchsExists = clone.some(x => x?.id === selectedSwitch?.id)


    if (switchsExists) {
      return alert('Este Switch já foi adicionado')
    } else {
      clone.push(selectedSwitch)
      setSwitchs(clone)
    }
  }

  return (
    <>
      <input className='search' type='search' placeholder='Pesquisar...'
        id='topo'
        value={busca}
        onInput={toInputUppercase}
        onChange={(e) => setBusca(e.target.value)}
        autoFocus={true}
      />
      <MenuBar />
      <section className='container' id='container'>

        <table className='table-comarcas'>
          <thead className='thead-comarcas'>
            <tr>
              <th scope='col'>LOCAL</th>
              <th scope='col'>HOSTNAME</th>
              <th scope='col'>IP</th>
              <th scope='col'>SWITCH DE BORDA</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>

            {filtarSwitchs().map(_switches => {
              return <tr key={_switches.id}>
                <th scope='row'>{_switches.local}</th>
                <td>{_switches.hostname}</td>
                <td>{_switches.ip}</td>
                <td>{_switches.switchborda}</td>
                <td><button className='btn-add'
                  onClick={() => myHandleAdd(_switches)}>
                  Adicionar</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </section>

      <Holder data={switchs} onDelete={(updated) => setSwitchs(updated)} />
    </>
  )
}

export default Switchs
