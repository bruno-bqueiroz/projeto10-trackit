import Topo from "./Topo";
import Menu from "./Menu";
import styled from "styled-components";

export default function Historico(){
    return (
        <>
        <Topo />
            <Container>    
                <h1>Historico</h1>
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