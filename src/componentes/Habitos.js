import Topo from "./Topo";
import Menu from "./Menu";
import styled from "styled-components";
import CriarHabito from "./CriarHabito";
import { useState } from "react";
import ListarHabitos from "./ListarHabitos";



export default function Habitos(){
    const [adicionar, setAdicionar] = useState(false);
    const [controle, setControle] = useState (true);
    

    function click(){
        setAdicionar(true);
    }

    return (
        <>
        <Topo />
            <Container>    
                <Cabecalho>
                    <h2>Habitos</h2>
                    <Icone onClick={click}>
                        <ion-icon name="add-circle"></ion-icon>
                    </Icone>
                </Cabecalho>
                {adicionar ? <CriarHabito controle= {controle} setControle = {setControle} setAdicionar = {setAdicionar}/> : ''}
                 
                <ListarHabitos  controle= {controle} setControle = {setControle}/>
                
    </Container>
        <Menu />
        </>
    )
}
const Container = styled.div`
box-sizing: border-box;
margin-top: 11vh;
padding-top: 1vh;
margin-bottom: 10vh;
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
height: auto;
min-height: 79vh;
background-color:#E5E5E5;
b{
        font-weight: 500;
        font-size: 4.5vw;
    }

`
const Cabecalho = styled.div`
    width: 100%;
    height: 10vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-between;

    h2{
        color: #126BA5;
    }
`
const Icone = styled.div`
    width: 10vh;
    height: 10vh;
    
    ion-icon {
    color: #52B6FF;
    width: 100%;
    height: 100%;
    }
`