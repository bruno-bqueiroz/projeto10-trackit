import Topo from "./Topo";
import Menu from "./Menu";
import styled from "styled-components";

export default function Historico( {porcentagem}){
    return (
        <>
        <Topo />
            <Container>    
                <h2>Historico</h2>
                <b>Em breve você poderá ver o histórico dos seus hábitos aqui!</b>
            </Container>
        <Menu porcentagem = {porcentagem} />
        </>
    )
}
const Container = styled.div`
box-sizing: border-box;
margin-top: 11vh;
margin-bottom: 10vh;
padding-top: 1vh;
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
height: auto;
min-height: 79vh;
background-color:#E5E5E5;

h2{
    
    color: #126BA5;
}

b{
    font-weight: 500;
}

`