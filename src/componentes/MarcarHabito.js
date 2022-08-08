import axios from "axios";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import HabitoDoDia from "./HabitoDoDia";



let contador = 0;
export default function MarcarHabito({
    porcentagem,
    setPorcentagem,
    setHoje,
    hoje,
    controle,
    setControle
}){
    
    const { tasks, setTasks } = useContext(UserContext);
    const token = tasks.data.token;
    const [idhabitoFeito, setIdHabitoFeito] = useState ('');
    const [idhabitoDesfeito, setIdHabitoDesfeito] = useState ('');
    
    const dayjs = require('dayjs');
    dayjs.locale('pt-br') 
    

    /* console.log(dayjs().weekday(6)); */
    
    useEffect(()=>{
        contador = 0;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config
        );
        promise.then(res =>{
            setHoje(res.data);
            res.data.map((value)=>{
                if (value.done){
                    contador += 1;
                }
            })
            setPorcentagem((contador/hoje.length)*100);
        })
        promise.catch(erro=>{
            console.log(erro)
         })
    }, [controle])
    
        if (idhabitoFeito){
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idhabitoFeito}/check`,{},config);
        requisicao.then(res =>{
             setControle(!controle);
             setIdHabitoFeito('');
            }).catch(erro=>{
                console.log("Status code: " + erro.response.status); // Ex: 404
              })
        
        }
        else if (idhabitoDesfeito){
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idhabitoDesfeito}/uncheck`,{},config);
        requisicao.then(res =>{
            
            setControle(!controle);
            setIdHabitoDesfeito ('');
        }).catch(erro=>{
             console.log("Status code: " + erro.response.status); // Ex: 404 */
        })
        }
    return (
        <>
        <Dia>
        
            <h2>{dayjs().format('dddd DD/MM')}</h2>
            {!porcentagem ?
            <p>Nenhum hábito concluído ainda</p>
            : <OK>{porcentagem.toFixed(0)}% dos hábitos concluídos</OK>
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
