import { useState } from "react";
import styled from "styled-components";
import Dias from "./Dias";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from  'react-loader-spinner'




const diasDaSemana = [
    {
    nome : "D",
    numero : 0
    },
    {
    nome : "S",
    numero : 1
    },
    {
    nome : "T",
    numero : 2
    },
    {
    nome : "Q",
    numero : 3
    },
    {
    nome : "Q",
    numero : 4
    },
    {
    nome : "S",
    numero : 5
    },
    {
    nome : "S",
    numero : 6
    },
    
]
function Reservar({
    setAdicionar,
    controle,
    setControle
}){
    const [habito, setHabito] = useState("");
    const [days, setDays] = useState([]);
   
    const { tasks, setTasks } = useContext(UserContext);
    const token = tasks.data.token;
    
    const [habilitado, setHabilitado] = useState(false)


    function fecharCard(){
        setAdicionar(false);
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    function fazerReserva(event){
        setHabilitado(true)
        
        event.preventDefault();
        if(habito.length>0 && days.length > 0){
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{   
            name: habito,
            days: days
        },config);
        requisicao.then(res =>{
            setAdicionar(false);
            setControle(!controle)
        })
        requisicao.catch(erro=>{
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
            alert("erro ao tentar criar habito");
            setHabilitado(false)
        })

}   else if (days.length > 0){
    setHabilitado(false)
    return alert("você deve dar um nome ao habito!")
}else if (habito.length > 0) {
    setHabilitado(false)
    return alert("você deve escolher pelo menos um dia para praticar o seu habito!")
 } else {
    setHabilitado(false)
    return alert ("você deve dar um nome e um dia para pratica do seu habito!")
 }}
    return(
        <div>
        <form  >
		        <input type="text" placeholder='nome do hábito' value={habito} required onChange={e => setHabito(e.target.value)} />
                <Caixa1 disabled={habilitado}>
                {diasDaSemana.map ((value, index)=>
                    <Dias  key={index} dia = {value.nome} numero = {value.numero}
                    days = {days} setDays = {setDays} type="text"
                     value={days} onChange={e => setDays(e.target.value)} />
                    )}
                </Caixa1>
            
            <Botoes>
            <Botao1 type = "button" onClick={fecharCard}>Cancelar</Botao1>
            <Botao2 type="submit" onClick={fazerReserva}>
            
            {!habilitado ?<h3>Salvar</h3> : <ThreeDots 
        height="60" 
        width="60" 
        radius="9"
        color="#FFFFFF" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        />}
            </Botao2>
            </Botoes>
        </form>
        </div>
    )
}

const Caixa1 = styled.div`
    width: 90vw;
    height: auto;
    display: flex;
    justify-content: flex-start;
`



const Botoes = styled.div`
    width: 90vw;
    height: auto;
    padding-right: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    
`
const Botao1 = styled.button`
width: 30%;
height: 5vh;
margin-top: 4vh;
background-color: #FFFFFF;
border: solid  #FFFFFF 1px;
border-radius:  7px;
font-size: 5vw;
color: #52B6FF;
&:hover{
cursor: pointer;
opacity: 0.8 ;
}
`

const Botao2 = styled.button`
    width: 30%;
    height: 5vh;
    margin-top: 3vh;
   background-color: #52B6FF;
   border: solid #52B6FF 1px;
   border-radius: 7px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 5vw;
   color: #FFFFFF;
&:hover{
    cursor: pointer;
    opacity: 0.8 ;
}
`



export default function CriarHabito({setAdicionar,
    controle,
    setControle}){
    return (
        <>
            <Caixa>
                <Reservar
    controle = {controle}
    setControle = {setControle} 
    setAdicionar = {setAdicionar}/>
            </Caixa>
            
        </>
    )
}



const Caixa = styled.div`
box-sizing: border-box;
    width: 90vw;
    min-height: 25vh;
    height: auto;
    margin-top: 3vh;
    margin-bottom: 3vh;
    padding-top: 2vw;
    padding-bottom: 2vw;
    background-color: #FFFFFF;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

     
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        input{
            width: 80%;
            height: 6vh;
            color: gray;
            font-size: 4vw;
            margin-top: 1vh;
            margin-bottom: 1vh;
            border: solid #D4D4D4 1px;
            border-radius: 6px;
            
        }
        input::placeholder{
            color :#D4D4D4;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
   
     img{
        width: 50%;
        height: auto;
    }
    h1{
    color: #126BA5;
    margin-top: 0px;
    margin-left: -2vw;
    font-size: 18vw;
    font-family: 'Playball', cursive;
    font-weight: 400;
    }

`