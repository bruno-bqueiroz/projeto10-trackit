import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from "../style/globalStyles"

import Login from "./Login"
import Cadastro from './Cadastro';
import Hoje from './Hoje';
import Habitos from './Habitos';
import Historico from './Historico';



export default function App(){
    const [foto, setFoto] = useState({});
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login />}/>
                <Route path='/cadastro' element = {<Cadastro />}/>
                <Route path='/hoje' element = {<Hoje foto = {foto} setFoto = {setFoto}/>}/>
                <Route path='/habitos' element = {<Habitos />}/>
                <Route path='/historico' element = {<Historico />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}