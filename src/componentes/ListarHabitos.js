import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const diasDaSemana = [
    {
    nome : "D",
    numero : 7
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

function Dias ({
    dia,
    numero,
    days
}){
    const cor = false;
   


    return (
        <>
        <Dia
            color={days.includes(numero)  ? '#D4D4D4' : '#FFFFFF'}
            colorText={days.includes(numero) ? '#FFFFFF' : '#D4D4D4'}>
                {dia}
        </Dia>
        </>
    )
}

const Dia = styled.div`
    width: 6vw;
    height: 6vw;
    margin-top: 1vh;
    margin-left: 2vw;
    border: solid 1px #D4D4D4;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 5vw;
    background: ${(props) => props.color};
    color: ${(props) => props.colorText};
    
`



export default function ListarHabitos ({
    controle,
    setControle
    
}){
    const { tasks, setTasks } = useContext(UserContext);
    const token = tasks.data.token;
    const [listaDeHabitos, setListaDeHabitos] = useState([]);

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config
        );
        promise.then(res =>{
            setListaDeHabitos(res.data);
        })
    }, [controle])

    function deletarHabito (id) {
        if (window.confirm("Você realmente quer deletar esse habito?")) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            config
            )
            setControle(!controle)
          }
    }

    return (
        <>
        {listaDeHabitos.map ((valor, index)=>
        <Habito key={index}>
            <Caixa1>
            <h2>{valor.name}</h2>
            <div>            {diasDaSemana.map ((value, index)=>
                    <Dias days = {valor.days}key={index} dia = {value.nome} numero = {value.numero}/>
                    )} 
            </div>
            </Caixa1>
            <Icone onClick={() => {deletarHabito(valor.id)}} > <ion-icon name="trash-outline"></ion-icon> </Icone>
        </Habito>
        )}
        </>
    )
}

const Habito = styled.div`
box-sizing: border-box;
    width: 100%;
    height: 15vh;
    margin-top: 3vh;
    padding: 2vw;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;

`
const Caixa1 = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    h2{
        font-size: 6vw;
    color: #666666;
    font-weight: 500;
    margin: 1px;
    margin-left: 10px;
    }
    p{
    margin: 1px;
    color: #666666;
    font-size: 3vw;
    }
    div{
        display: flex;
    }
`

const Icone = styled.div`
    width: 3vh;
    height: 3vh;
    ion-icon {
    color: #666666;
    width: 100%;
    height: 100%;
    }
`