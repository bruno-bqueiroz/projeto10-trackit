import styled from "styled-components"
import Menu from "./Menu";
import Topo from "./Topo";
import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";



function HabitosDoDia({setFoto}){
    const [feito, setFeito] = useState(false);
    const dayjs = require('dayjs');
    const location = useLocation();
    console.log(location.state);

    setFoto(location.state.image);
    
    const token = location.state.token;

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
        })

    }, [])

    
    function click(){
        setFeito(!feito)
    }
    
    
    return (
        <>
        <Dia>
        
            <h2>Quinta, {dayjs().format('DD/MM')}</h2>
            {!feito ?
            <p>Nenhum hábito concluído ainda</p>
            : <OK>67% dos hábitos concluídos</OK>
            }
        </Dia>
        <Habito>
            <Caixa1>
            <h3>Ler 1 capítulo de livro</h3>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
            </Caixa1>
            {!feito ?
            <Icone onClick={click}>
                <ion-icon name="checkbox"></ion-icon>
            </Icone>
            :
            <IconeOk onClick={click}>
                <ion-icon name="checkbox"></ion-icon>
            </IconeOk>
            }
        </Habito>
        
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
const Habito = styled.div`
    width: 100%;
    height: 15vh;
    margin-top: 3vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    

`
const Icone = styled.div`
    width: 15vh;
    height: 15vh;
    ion-icon {
    color: #E7E7E7;
    width: 100%;
    height: 100%;
    }
`
const IconeOk = styled.div`
    width: 15vh;
    height: 15vh;
    ion-icon {
    color: #8FC549;
    width: 100%;
    height: 100%;
    }
`
const Caixa1 = styled.div`
width: 60%;
height: 100%;
padding-left: 10px;
display: flex;
flex-direction: column;

justify-content: center;
    h3{
    color: #666666;
    font-weight: 500;
    margin: 0;
}
p{
    margin: 0;
    color: #666666;
    font-size: 3vw;
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

