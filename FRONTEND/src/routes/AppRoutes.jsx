import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import { useEffect, useState } from "react" 

import CorpoInicio from "../pages/CorpoInicio"
import Switchs from "../pages/Switchs"
import SwitchsPoa from "../pages/SwitchsPoa"
import AddSwitch from '../pages/AddSwitch'
import EditSwitchs from '../pages/EditSwitchs'
import CreateSwitchs from '../pages/CreateSwitchs'
import EditSwitchsPoa from '../pages/EditSwitchsPoa'
import CreateSwitchsPoa from '../pages/CreateSwitchsPoa'
import Procedimentos from '../pages/Procedimentos'

const AppRoutes = (token) => {

    const [auth, setAuth] = useState(false)

    useEffect(()=>{
        setAuth(token)
    })

    return (

        <Router>
            <Routes>
                <Route path="/" element={<CorpoInicio />} />

                { auth &&  <Route path="/addswitch" element={<AddSwitch />} />}
                <Route path="/addswitch" element={<Navigate replace to='/' />} />

               <Route path="/switchs" element={<Switchs />} />
               <Route path="/switchspoa" element={<SwitchsPoa />} />
               <Route path="/switchs/edit/:id" element={<EditSwitchs />} />
               <Route path="/switchspoa/edit/:id" element={<EditSwitchsPoa />} />
               <Route path="/createswitchs" element={<CreateSwitchs />} />
               <Route path="/createswitchspoa" element={<CreateSwitchsPoa />} />
               <Route path="/procedimentos" element={<Procedimentos />} />
            
            </Routes>
        </Router>

    )
}


export default AppRoutes