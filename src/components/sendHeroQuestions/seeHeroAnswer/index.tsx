import { useState } from "react"
import { HeroAnswerStyle } from "./style"

export const HeroAnswer = () => {
    const [heroName, setHeroName] = useState<string>('')
    const [hero, setHeroName] = useState<string>('')
    const [heroName, setHeroName] = useState<string>('')
    const [heroName, setHeroName] = useState<string>('')
    const [heroName, setHeroName] = useState<string>('')
    const [heroName, setHeroName] = useState<string>('')

    return (
        <HeroAnswerStyle>
            <ul>
                <li>Nome do herói: </li>
                <li>Cidade de atuação: </li>
                <li>Nível de experiência do herói: </li>
                <li>Nome de herói: </li>
                <li>Cidade do herói: </li>
                <li>Experiência do herói: </li>
            </ul>
        </HeroAnswerStyle>
    )
}