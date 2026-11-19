import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../pages/App/index.jsx'
import Home from '../pages/Home/index.jsx'
import Ranking from '../pages/Ranking/index.jsx'
import Perfil from '../pages/Perfil/index.jsx'
import Loja from '../pages/Loja/index.jsx'
import Mission from '../pages/Mission/index.jsx'
import VerificarFoto from '../pages/VerificarFoto/index.jsx'
import TirarFoto from '../pages/Tirarfoto/index.jsx'
import Mapamissao from '../pages/Mapamissao/index.jsx'
import PWABadge from '../components/PWABadge/index.jsx'

export default function AppRoutes(){
    return(
        <Router>
            <PWABadge />
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/ranking' element={<Ranking />}/>
                <Route path='/perfil' element={<Perfil/>}/>
                <Route path='/loja' element={<Loja/>}/>
                <Route path='/mission' element={<Mission />}/>
                <Route path='/verificarfoto' element={<VerificarFoto />}/>
                <Route path='/tirarfoto' element={<TirarFoto />}/>
                <Route path='/mapamissao' element={<Mapamissao />}/>





            </Routes>
        </Router>
    )
}