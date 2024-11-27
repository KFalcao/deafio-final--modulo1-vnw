import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import S from './header.module.scss'

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={logo} alt="Logo Livros Vai na Web" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxBusca}>
                <input type="text" placeholder='O que voce procura?'/>
                <img src={search} alt="icone de busca" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/queroDoar" element={<QueroDoar/>}/>
        </Routes>
      </BrowserRouter>
    )
}