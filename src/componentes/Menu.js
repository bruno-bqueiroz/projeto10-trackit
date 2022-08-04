import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Menu(){
    const percentage = 67;
    const navigate = useNavigate();
    function habitos(){
        navigate('/habitos');
    }

    return (
        <>
            <Menus>
                <p onClick={habitos}>Hábitos</p><div><CircularProgressbar value={percentage} text={`${percentage}%`} /></div><p>Histórico</p>
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
    p{
        color: #52B6FF;
        font-weight:400;
        font-size: 3vh;
    }
    div {
        position: fixed;
        bottom: 30vw;
        left: 35vw;
        width: 30vw;
        height: 20px;
    }

`