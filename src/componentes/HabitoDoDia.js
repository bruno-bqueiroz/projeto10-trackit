import styled from "styled-components"
import {useState, useEffect} from "react";
import axios from "axios";


export default function HabitoDoDia({setIdHabitoFeito, setIdHabitoDesfeito, hoje}){
    
    function marcarComoFeito(id){
        setIdHabitoFeito(id);
    }
    function desmarcarComoFeito(id){
        setIdHabitoDesfeito(id);
    }

    return(
        <>{hoje.map ((value, index)=>
            <Habito key={index}>
                {!value.currentSequence ===value.highestSequence || value.highestSequence === 0?
                <Caixa1>
                    <h3>{value.name}</h3>
                    <p>Sequência atual:{value.currentSequence} dias</p>
                    <p>Seu recorde: {value.highestSequence} dias</p>
                </Caixa1>
                :
                <Caixa2>
                    <h3>{value.name}</h3>
                    <p>Sequência atual:{value.currentSequence} dias</p>
                    <p>Seu recorde: {value.highestSequence} dias</p>
                </Caixa2>}
            {!value.done ?
            <Icone onClick={() => {marcarComoFeito(value.id)}}>
                <ion-icon name="checkbox"></ion-icon>
            </Icone>
            :
            <IconeOk onClick={() => {desmarcarComoFeito(value.id)}}>
                <ion-icon name="checkbox"></ion-icon>
            </IconeOk>
            }
        </Habito>
        )}
        </>
    )
}


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
const Caixa2 = styled.div`
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
    color: #8FC549;
    font-size: 3vw;
}
`