import { SignUpStyle } from "./style"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import * as Request from '../../Auth/Request'

export const SignUP = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repPassword, setRepPasswprd] = useState<string>('')
    const [emailValidation, setEmailValidation] = useState<boolean>(false)
    const [matchPassword, setMatchPassword] = useState<boolean>(false)

    useEffect(() => {
        email.indexOf('@') > 0 ? setEmailValidation(true) : setEmailValidation(false)
    }, [email])

    useEffect(() => {
        (password === repPassword) ? setMatchPassword(true) : setMatchPassword(false)
    }, [password, repPassword])

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value) 
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleRepPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepPasswprd(event.target.value)
    }

    const handlebackbutton = () => {
        navigate(-1)
    }

    const createACount = async () => {
        if(!email || !password || !repPassword) return alert('Todos os campos devem estar preenchidos ')
        if(emailValidation && matchPassword) {

            let request = await Request.SignIn(email, password)
            let json = JSON.parse(request)

            if(json.status) {
                console.log(json)
                navigate('/main')
            } else alert('erro ao criar um usuário')
        }
    } 

    return (
        <SignUpStyle
        validEmail={emailValidation}
        matchPassword={matchPassword}>
            <div id="container">
                
            <button id="backbutton" onClick={handlebackbutton}>Voltar</button> 

                <form action="">
                    <div>
                        <label htmlFor="E-mail">E-mail</label><br />
                        <input type="text" id="email" onChange={handleEmail} /><br />
                        {emailValidation &&
                        <p className="emailValidation" >E-mail válido </p>
                        }
                        {!emailValidation &&
                        <p className="emailValidation">E-mail inválido </p>
                        }
                    </div>
                    <div>
                        <label htmlFor="senha">senha</label> <br />
                        <input type="password" name="password" id="password" onChange={handlePassword} /><br />
                        {matchPassword &&
                        <p className="passwordValidation" >As senhas são iguais</p>
                        }
                        {!matchPassword &&
                        <p className="passwordValidation">As senhas tem que ser iguais</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="senha">repetir senha</label> <br />
                        <input type="password" name="password" id="repeatPassword" onChange={handleRepPassword} /><br />
                        {matchPassword &&
                        <p className="passwordValidation" >As senhas são iguais</p>
                        }
                        {!matchPassword &&
                        <p className="passwordValidation">As senhas tem que ser iguais</p>
                        }
                        
                    </div>
                    <input type="button" value="Criar conta" id="createAccountBTN" onClick={createACount}/>
                </form>

                
                
            </div> 
        </SignUpStyle>
    )
}