import { SignUpStyle } from "./style"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import React, { useState } from "react"

export const SignUP = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repPassword, setRepPasswprd] = useState<string>('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleRepPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepPasswprd(event.target.value)
    }

    const navigate = useNavigate()

    const handlebackbutton = () => {
        navigate(-1)
    }

    return (
        <SignUpStyle>
            
            <div id="container">
                <button id="backbutton" onClick={handlebackbutton}>Voltar</button>

                <form action="">
                    <div>
                        <input type="text" id="email" onChange={handleEmail} /><br />
                        <label htmlFor="E-mail">E-mail</label>
                        
                    </div>
                    <div>
                        <input type="password" name="password" id="password" onChange={handlePassword} /><br />
                        <label htmlFor="senha">senha</label>
                    </div>
                    <div>
                        
                        <input type="password" name="password" id="repeatPassword" onChange={handleRepPassword} /><br />
                        <label htmlFor="senha">repetir senha</label>
                    </div>
                    <input type="button" value="Criar conta" id="createAnAccount" />
                </form>
                
            </div> 
        </SignUpStyle>
    )
}