import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./Login"
import Cadastro from './Cadastro';
import Hoje from './Hoje';

import GlobalStyle from "../style/globalStyles"

export default function App(){
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login />}/>
                <Route path='/cadastro' element = {<Cadastro />}/>
                <Route path='/hoje' element = {<Hoje />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}