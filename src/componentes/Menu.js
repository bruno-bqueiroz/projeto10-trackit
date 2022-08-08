import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
export default function Menu(){
    const { porcentagem} = useContext(UserContext);

    const navigate =  useNavigate();

    function habitos(){
        navigate('/habitos');
    }
    function hoje(){
        navigate('/hoje')
    }
    function historico(){
        navigate('/historico');
    }

    return (
        <>
            <Menus>
                <p onClick={habitos}>Hábitos</p>
                <div onClick = {hoje}>
                    <CircularProgressbar
                    value ={porcentagem} 
                    text = {`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                      })}

                     />
                </div>
                <p onClick={historico}>Histórico</p>
            </Menus>
        </>
    )
}

const Menus = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 11vh;
    padding-left: 3vw;
    padding-right: 3vw;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    z-index: 1;
    
    p{
        color: #52B6FF;
        font-weight:400;
        font-size: 3vh;
        
    }
    div {
        position: fixed;
        bottom: 1vh;
        left: 35vw;
        width: 30vw;
        height: auto;
        z-index: 1;
    }

`