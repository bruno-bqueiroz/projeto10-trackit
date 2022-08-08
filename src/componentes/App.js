import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from "../style/globalStyles"
import Login from "./Login"
import Cadastro from './Cadastro';
import Hoje from './Hoje';
import Habitos from './Habitos';
import Historico from './Historico';
import UserContext from "../contexts/UserContext";




export default function App(){
    const [tasks, setTasks] = useState([]);
    const [porcentagem, setPorcentagem] = useState ();
    return (
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{tasks, setTasks, porcentagem, setPorcentagem}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login />}/>
                <Route path='/cadastro' element = {<Cadastro  />}/>
                <Route path='/hoje' element = {<Hoje />}/>
                <Route path='/habitos' element = {<Habitos porcentagem = {porcentagem}/>}/>
                <Route path='/historico' element = {<Historico porcentagem = {porcentagem} />}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
   
}