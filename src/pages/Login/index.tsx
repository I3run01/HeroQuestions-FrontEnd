import { LoginStyle } from "./style"
import { useNavigate } from "react-router-dom"
import React, {useContext, useState } from "react"
import { fetchRequest } from "../../Auth/Request"
import * as Request from "../../Auth/Request"
import { Context } from "../../contexts/Context"

export const Login = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useContext(Context)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const Login = async () => {

        let request = await fetchRequest.Login(email, password)
        let json = JSON.parse(request)

        if(json.status) {
            dispatch({
                type: 'change_loginStatus',
                payload: {
                    loginStatus: true
                }
            })
            return navigate('/page01')
        } alert('Usuário/senha incorreto(s)')
    } 

    return (
        <LoginStyle>
            <div id="container">
                <button id="backbutton" onClick={()=>navigate('/')}>Voltar</button>
                <form action="">
                    <div>
                        <label htmlFor="E-mail">E-mail</label><br />
                        <input type="text" id="email" onChange={(event) => {setEmail(event.target.value)}} /><br />
                    </div>
                    <div>
                        <label htmlFor="senha">senha</label> <br />
                        <input type="password" name="password" id="password" onChange={(event)=>{setPassword(event.target.value)}} /><br /> 
                    </div>
                    <input type="button" value="Logar" id="Login" onClick={Login}/>
                </form>
            </div> 
        </LoginStyle>
    )
}