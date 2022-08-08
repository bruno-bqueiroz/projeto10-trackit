import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from "../style/globalStyles"
import Login from "./Login"
import Cadastro from './Cadastro';
import Hoje from './Hoje';
import Habitos from './Habitos';
import Historico from './Historico';
import UserContext from "../contexts/UserContext";



let contador
export default function App(){
    const [tasks, setTasks] = useState([]);
    const [porcentagem, setPorcentagem] = useState (contador = 0);
    return (
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{tasks, setTasks}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login />}/>
                <Route path='/cadastro' element = {<Cadastro  />}/>
                <Route path='/hoje' element = {<Hoje porcentagem = {porcentagem} setPorcentagem = {setPorcentagem}/>}/>
                <Route path='/habitos' element = {<Habitos porcentagem = {porcentagem}/>}/>
                <Route path='/historico' element = {<Historico porcentagem = {porcentagem} />}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
   
}