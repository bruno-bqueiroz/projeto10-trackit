import styled from "styled-components";
import {useState} from 'react';
import axios from "axios";




function Reservar(){
    const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
    function fazerReserva(event){

       
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        });
        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);

        function tratarSucesso(resposta) {
            console.log ("sucesso " + resposta.data)
        }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
}
    }


    return(
        <div>
        <form onSubmit={fazerReserva}>
		        <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' value={password} onChange={e => setpassword(e.target.value)} />
            <button type="submit">Entrar</button>
		</form>
        </div>
    )
}






export default function Login(){
    return (
        <>
        <ButtonComponent>
        <div>
            <img src="img/logo.png" alt="logo"/>
            <h1>TrackIt</h1>
        </div>
        <Reservar />
        <p>Não tem uma conta? Cadastre-se!</p>
        </ButtonComponent>
        
        </>
    )
}


const ButtonComponent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    p{
        font-size: 4vw;
        color: #52B6FF;
    }
    
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button{
            width: 90%;
            height: 7vh;
           background-color: #52B6FF;
           border: solid #52B6FF 1px;
           border-radius: 7px;
           color: #FFFFFF;
        }
        input{
            width: 87%;
            height: 6vh;
            color: #D4D4D4;
            margin-bottom: 1vh;
            border: solid #D4D4D4 1px;
            border-radius: 6px;
        }
    }

    div{
        width: 90vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
     img{
        width: 50%;
        height: auto;
    }
    h1{
    color: #126BA5;
    margin-top: 0px;
    margin-left: -2vw;
    font-size: 18vw;
    font-family: 'Playball', cursive;
    font-weight: 400;
    }

    &:hover{
        cursor: pointer;
    }
    input{
        margin-left: 1px;
        width: 85%;
    }

`;