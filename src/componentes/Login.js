import styled from "styled-components";
import {useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from  'react-loader-spinner'


function Reservar({setCor}){
    const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
    const { tasks, setTasks } = useContext(UserContext);
    
    const [habilitado, setHabilitado] = useState(false)
    const navigate = useNavigate();
    function fazerReserva(event){
         
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
            password: password
        });
        
        requisicao.catch(tratarErro);

        requisicao.then((res) =>{
            setTasks(res);
            navigate('/hoje');
        });

        function tratarErro(erro) {
	        console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
            alert("erro ao fazer login");
            setHabilitado(false)
            
        }
    }

    return(
        <div>
        <form onSubmit={fazerReserva}>
		        <input disabled={habilitado} type="email" placeholder='email' value={email} required onChange={e => setEmail(e.target.value)} />
                <input disabled={habilitado} type="password" placeholder='senha' value={password} required onChange={e => setpassword(e.target.value)} />
                <button onClick={()=> {setHabilitado(true)}}  type="submit" > 
            {!habilitado ?<h2>Entrar</h2> : <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#FFFFFF" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        />}

             </button>
		</form>
        </div>
    )
}


export default function Login(){
    const navigate = useNavigate();

    function cadastrar(){
        navigate('/cadastro');
    }

    return (
        <>
        <ButtonComponent>
        <div>
            <img src="img/logo.png" alt="logo"/>
            <h1>TrackIt</h1>
        </div>
        <Reservar />
        <p onClick={cadastrar}>Não tem uma conta? Cadastre-se!</p>
        
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
        &:hover{
            cursor: pointer;
            opacity: 0.8 ;
        }
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
            display: flex;
            align-items: center;
            justify-content: center;
           background-color: #52B6FF;
           border: solid #52B6FF 1px;
           border-radius: 7px;
           color: #FFFFFF;
        &:hover{
            cursor: pointer;
            opacity: 0.8 ;
        }
        }
        input{
            width: 87%;
            height: 6vh;
            color: gray;
            margin-bottom: 1vh;
            border: solid #D4D4D4 1px;
            border-radius: 6px;
            
        }
        input::placeholder{
            color :#D4D4D4;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
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
`;