import { LoginStyle } from "./style"
import { useNavigate } from "react-router-dom"
import React, {useState } from "react"

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value) 
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handlebackbutton = () => {
        navigate(-1)
    }

    const Login = async () => {
        try {
            let response = await fetch('https://teppaaplication.herokuapp.com/login',
            {
                method: 'POST',
                body: new URLSearchParams ({
                    'email': email,
                    'password': password,
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            })

            let json = await response.json()

            if(json.status) {
                console.log(json)
                localStorage.setItem('token', json.token)
                navigate('/main')
            } else alert('Usuário/senha incorreto(s)')
        } catch (e) {
            alert('erro ao logar')
        }
    } 

    return (
        <LoginStyle>
            <div id="container">
                <button id="backbutton" onClick={handlebackbutton}>Voltar</button>
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