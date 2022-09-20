import React, { useEffect, useState } from "react"
import { HeroQuestionStyle } from "./style"
import { useNavigate } from "react-router-dom";
import { sendHeroQuestions } from '../../Auth/Request'

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
    const navigation = useNavigate()

    const sendHeroQuestion = () => {
        
        if(!localStorage.getItem('token')) {
            alert('Faça o login antes de prosseguir')
            return navigation('/login')
        }

        if(questionOne !== '') sendHeroQuestions(parameter01, questionOne)
        if(questionTwo !== '') sendHeroQuestions(parameter02, questionTwo)
        if(questionThree !== '') sendHeroQuestions(parameter03, questionThree)
    }

    useEffect(() => {
        sendHeroQuestion()
    })

    return (
        <HeroQuestionStyle
        bgImage={bgImage}>
            <div id="container">
                <p id="backbutton" onClick={()=>{navigation(-1)}}>Voltar</p>
                <p>{question01}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionOne(event.target.value)}/>
                <p>{question02}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionTwo(event.target.value)}/>
                <p>{question03}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionThree(event.target.value)}/>
                <button onClick={() => {navigation(nextPage)}}>Proxima página</button>
            </div>      
        </HeroQuestionStyle>
    )
}