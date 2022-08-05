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
                    <CircularProgressbar value={percentage} text={`Hoje`}  styles={{pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#FFFFFF',
                    trailColor: '#FFFFFF',
                    backgroundColor: '#FFFFFF',}} />
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