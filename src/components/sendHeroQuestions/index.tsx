import { useState } from "react"
import { HeroQuestionStyle } from "./style"
import { useNavigate } from "react-router-dom";
import { sendHeroQuestions } from '../../Auth/Request'
import { HeroAnswer } from "./seeHeroAnswer";

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

    const handleButton = async () => {

        if(!localStorage.getItem('token')) {
            alert('Faça o login antes de prosseguir')
            return navigation('/login')
        }

        let response01 = JSON.parse(await sendHeroQuestions(parameter01, questionOne))
        let response02 = JSON.parse(await sendHeroQuestions(parameter02, questionTwo))
        let response03 = JSON.parse(await sendHeroQuestions(parameter03, questionThree))
        
        if(response01.status && response02.status && response03.status) navigation(nextPage)
        else alert('Dados não enviados, verifique se preencheu tudo ou tente logar novamente')

    }

    return (
        <HeroQuestionStyle
        bgImage={bgImage}>
            <HeroAnswer/>
            <div id="container">
                <p id="backbutton" onClick={()=>{navigation(-1)}}>Voltar</p>
                <p>{question01}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionOne(event.target.value)}/>
                <p>{question02}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionTwo(event.target.value)}/>
                <p>{question03}</p>
                <input type="text" name="" id="" placeholder="digite aqui" onChange={(event)=>setQuestionThree(event.target.value)}/>
                <button onClick={handleButton}>Proxima página</button>
            </div>      
        </HeroQuestionStyle>
    )
}