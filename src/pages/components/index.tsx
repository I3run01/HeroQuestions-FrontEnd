import { HeroQuestionStyle } from "./style"

type Props = {
    question01: string
    question02: string
    question03: string

    parameter01: string
    parameter02: string
    parameter03: string
}

export const HerosQuestions = ({question01,parameter01,question02,parameter02,question03,parameter03}:Props) => {
    return (
        <HeroQuestionStyle>
            <div id="container">
                <p>{question01}</p>
                <input type="text" name="" id="" placeholder="digite aqui"/>
                <p>{question02}</p>
                <input type="text" name="" id="" placeholder="digite aqui"/>
                <p>{question03}</p>
                <input type="text" name="" id="" placeholder="digite aqui"/>
                <button>Proxima página</button>
            </div>      
        </HeroQuestionStyle>
    )
}