import styled from "styled-components";
import { useState } from "react";

export default function Dias ({
    dia,
    numero,
    days,
    setDays
}){
    const [cor, setCor] = useState(false);

    function click(numero){
        if(!days.includes(numero)){
        const transfer = [...days, numero];
            setDays (transfer);
        setCor(true);
        }else if(days.includes(numero)){
            setCor(false);
        }
    }

    return (
        <>
        <Dia onClick={()=> {click(numero)}} 
            color={cor ? '#D4D4D4' : '#FFFFFF'}
            colorText={cor ? '#FFFFFF' : '#D4D4D4'}>
                {dia}
        </Dia>
        </>
    )
}

const Dia = styled.div`
    width: 8vw;
    height: 8vw;
    margin-top: 1vh;
    margin-left: 2vw;
    background-color: #FFFFFF;
    border: solid 1px #D4D4D4;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 6vw;
    background: ${(props) => props.color};
    color: ${(props) => props.colorText};
    
`