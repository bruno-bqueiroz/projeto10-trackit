import styled from "styled-components"
import Menu from "./Menu";
import Topo from "./Topo";
import {useState, useEffect} from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import HabitoDoDia from "./HabitoDoDia";



function HabitosDoDia(){
    const { tasks, setTasks } = useContext(UserContext);
    const token = tasks.data.token;
    const [hoje, setHoje] = useState ([]); 
    const [idhabitoFeito, setIdHabitoFeito] = useState ('');
    const [idhabitoDesfeito, setIdHabitoDesfeito] = useState ('');

    console.log(hoje);

    const [feito, setFeito] = useState(false);
    const dayjs = require('dayjs');

    var weekday = require('dayjs/plugin/weekday')
    dayjs.extend(weekday)

    /* console.log(dayjs().weekday(6)); */
    

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config
        );
        promise.then(res =>{
            console.log(res.data);
            setHoje(res.data);
        })

    }, [])
        if (idhabitoFeito){
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idhabitoFeito}/check`,{},config);
        requisicao.then(res =>{
            console.log(res);
        })
        
        requisicao.catch(erro=>{
            console.log("Status code: " + erro.response.status); // Ex: 404
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
        })
        }
        if (idhabitoDesfeito){
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idhabitoDesfeito}/uncheck`,{},config);
        requisicao.then(res =>{
            console.log(res);
        })
        
        requisicao.catch(erro=>{
            console.log("Status code: " + erro.response.status); // Ex: 404
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
        })
        }

    return (
        <>
        <Dia>
        
            <h2>{dayjs().format('DD/MM')}</h2>
            {!feito ?
            <p>Nenhum hábito concluído ainda</p>
            : <OK>67% dos hábitos concluídos</OK>
            }
        </Dia>
        <HabitoDoDia setIdHabitoFeito = {setIdHabitoFeito} setIdHabitoDesfeito = {setIdHabitoDesfeito} hoje = {hoje} token = {token}/>
        </>
    )
}

const Dia = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 10vh;
    padding-left: 10px;
    padding-top: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    h2 {
        font-weight: 100;
        color: #126BA5;
        margin: 0;
    }
    p{
        margin: 0;
        color: #BABABA;
    }
`

const OK = styled.b`
    margin: 0;
    color: #8FC549;
    font-size: 3vw;
`



export default function Hoje({foto, setFoto}){
   
    return (
        <>
        <Topo foto= {foto} />
        <Container>    
            <HabitosDoDia setFoto = {setFoto} />
        </Container>
        <Menu />
        </>
    )
}

const Container = styled.div`
box-sizing: border-box;
margin-top: 11vh;
margin-bottom: 10vh;
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
height: auto;
min-height: 79vh;
background-color:#E5E5E5;
`