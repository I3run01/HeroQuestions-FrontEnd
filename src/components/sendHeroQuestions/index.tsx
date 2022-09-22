import React, { useContext, useEffect, useState } from "react"
import { HeroQuestionStyle } from "./style"
import { useNavigate } from "react-router-dom";
import { fetchRequest } from "../../Auth/Request";
import { Context } from "../../contexts/Context";

type Props = {
    question01: string
    question02: string
    question03: string

    parameter01: string
    parameter02: string
    parameter03: string

    bgImage: string
    nextPage: string
}

export const HerosQuestions = ({question01,parameter01,question02,parameter02,question03,parameter03,bgImage,nextPage}:Props) => {
    const [questionOne, setQuestionOne] = useState<string>('')
    const [questionTwo, setQuestionTwo] = useState<string>('')
    const [questionThree, setQuestionThree] = useState<string>('')
    const navigate = useNavigate()

    const handleButton = () => {
        if(!localStorage.getItem('token')) {
            alert('Faça o login antes de prosseguir')
            return navigate('/login')
        }
        navigate(nextPage)
    }

    const QuentionOneEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionOne(event.target.value)
        if(questionOne === '' || questionOne === event.target.value) return
        await fetchRequest.sendHeroQuestions(parameter01, questionOne)    
        
    }

    const QuentionTWOEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionTwo(event.target.value)
        if(questionTwo === '' || questionTwo === event.target.value) return
        await fetchRequest.sendHeroQuestions(parameter02, questionTwo)    
        
    }

    const QuentionThreeEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionThree(event.target.value)
        if(questionThree === '' || questionThree === event.target.value) return
        await fetchRequest.sendHeroQuestions(parameter03, questionThree)    
        
    }

    return (
        <HeroQuestionStyle
        bgImage={bgImage}>
            <div id="container">
                <p id="backbutton" onClick={()=>{navigate(-1)}}>Voltar</p>
                <p>{question01}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={QuentionOneEvent}/>
                <p>{question02}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={QuentionTWOEvent}/>
                <p>{question03}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={QuentionThreeEvent}/>
                <button onClick={handleButton}>Proxima página</button>
            </div>      
        </HeroQuestionStyle>
    )
}