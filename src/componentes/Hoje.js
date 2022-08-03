import styled from "styled-components"

export default function Hoje(){
    return (
        <Container>
            <Topo>
            <h1>TrackIt</h1>
           <span>
                <img src="https://thenexus.one/wp-content/uploads/2022/05/Michael-Scott-Smiling-e1653333329157-696x348.jpg" alt="foto de perfil"/>
           </span>
           </Topo>
           <Menu>
            <p>Hábitos</p><span></span><p>Histórico</p>
           </Menu>
        </Container>
    )
}

const Container = styled.div`
box-sizing: border-box;
width: 100vw;
height: 100vh;
background-color:#E5E5E5 ;
`

const Topo = styled.div `
    box-sizing: border-box;
    width: 100vw;
    height: 11vh;
    position: fixed;
    top: 0;
    background-color: #126BA5;
    padding-top: 1vh;
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    span {
    display: block;
    border-radius: 50%;
    overflow: hidden;
    width: 9vh;
    height: 9vh;
    }
    span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    h1{
    color: #FFFFFF;
    margin-top: 0px;
    margin-left: -2vw;
    font-size: 7vh;
    font-family: 'Playball', cursive;
    font-weight: 400;
    }

`
const Menu = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 11vh;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background-color: #FFFFFF;
    p{
        color: #52B6FF;
        font-weight:400;
        font-size: 3vh;
    }

`