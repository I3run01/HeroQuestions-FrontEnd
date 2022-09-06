import { LoginStyle } from "./style"
import { useNavigate } from "react-router-dom"
import React, {useContext, useState } from "react"
import * as Request from '../../Auth/Request'
import { Context } from "../../contexts/Context"

export const Login = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useContext(Context)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value) 
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const Login = async () => {

        let request = await Request.Login(email, password)
        let json = JSON.parse(request)

        if(json.status) {
            console.log(json)
            navigate('/main')
        } else alert('Usuário/senha incorreto(s)')
    } 

    return (
        <LoginStyle>
            <div id="container">
                <button id="backbutton" onClick={()=>navigate('/')}>Voltar</button>
                <form action="">
                    <div>
                        <label htmlFor="E-mail">E-mail</label><br />
                        <input type="text" id="email" onChange={handleEmail} /><br />
                    </div>
                    <div>
                        <label htmlFor="senha">senha</label> <br />
                        <input type="password" name="password" id="password" onChange={handlePassword} /><br /> 
                    </div>
                    <input type="button" value="Logar" id="Login" onClick={Login}/>
                </form>
            </div> 
        </LoginStyle>
    )
}