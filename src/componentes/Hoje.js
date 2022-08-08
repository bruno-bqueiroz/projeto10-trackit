import styled from "styled-components"
import Menu from "./Menu";
import Topo from "./Topo";
import {useState} from "react";
import MarcarHabito from "./MarcarHabito";


export default function Hoje({foto}){

    const [hoje, setHoje] = useState ([]);
    const [controle, setControle] = useState (true)
    

    return (
        <>
        <Topo foto= {foto} />
        <Container>    
            <MarcarHabito controle = {controle} setControle = {setControle} 
            hoje = {hoje} setHoje = {setHoje} />
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
padding-bottom: 12vh;
width: 100vw;
height: auto;
min-height: 79vh;
background-color:#E5E5E5;
`

