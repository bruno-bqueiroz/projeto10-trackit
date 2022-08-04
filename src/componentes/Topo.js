import styled from "styled-components";

export default function Topo(foto){
    console.log(foto)
    
    return(
        <>
            <Topos>
                <h1>TrackIt</h1>
                    <span>
                    <img src={foto.foto}/>
                </span>
           </Topos>
        </>
    )
}
const Topos = styled.div `
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