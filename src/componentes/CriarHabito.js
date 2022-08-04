import { useState } from "react";
import styled from "styled-components";
import Dias from "./Dias";
import axios from "axios";




const diasDaSemana = [
    {
    nome : "D",
    numero : 1
    },
    {
    nome : "S",
    numero : 2
    },
    {
    nome : "T",
    numero : 3
    },
    {
    nome : "Q",
    numero : 4
    },
    {
    nome : "Q",
    numero : 5
    },
    {
    nome : "S",
    numero : 6
    },
    {
    nome : "S",
    numero : 7
    },
    
]
function Reservar({setAdicionar}){
    const [habito, setHabito] = useState("");
    const [array, setArray] = useState([]);
    console.log(array);

    function click(){
        setAdicionar(false);
    }
    
    function fazerReserva(event){
        console.log(array)

        event.preventDefault();
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
            name: habito,
            days: array // segunda, quarta e sexta
        });
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);
        

        function tratarSucesso(resposta) {
            console.log ("sucesso " + resposta.data)
            
        }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
}
    }

    return(
        <div>
        <form onSubmit={fazerReserva} >
		        <input type="text" placeholder='nome do hábito' value={habito} required onChange={e => setHabito(e.target.value)} />
                <Caixa1>
                {diasDaSemana.map ((value, index)=>
                    <Dias key={index} dia = {value.nome} numero = {value.numero}
                    array = {array} setArray = {setArray}
                    value={array} onChange={e => setArray(e.target.value)} />
                    )}
                </Caixa1>
            
            <Botoes>
            <Botao1 onClick={click}>Cancelar</Botao1>
            <Botao2 type="submit">Salvar</Botao2>
            </Botoes>
        </form>
        </div>
    )
}






const Caixa1 = styled.div`
    width: 90vw;
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
   font-size: 5vw;
   color: #FFFFFF;
&:hover{
    cursor: pointer;
    opacity: 0.8 ;
}
`



export default function CriarHabito({setAdicionar}){
    return (
        <>
            <Caixa>
                <Reservar setAdicionar = {setAdicionar}/>
            </Caixa>
            
        </>
    )
}



const Caixa = styled.div`
box-sizing: border-box;
    width: 90vw;
    height: 25vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    padding-top: 2vw;
    padding-bottom: 2vw;
    background-color: #FFFFFF;
    border-radius: 2vw;
    display: flex;
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