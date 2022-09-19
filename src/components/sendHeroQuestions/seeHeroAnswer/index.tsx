import { useState } from "react"
import { HeroAnswerStyle } from "./style"

export const HeroAnswer = () => {
    const [heroName, setHeroName] = useState<string>('aagvasadsdfv')
    const [heroCity, setHeroCity] = useState<string>('sgsag')
    const [heroExperience, setHeroExperience] = useState<string>('drhwa')
    const [heroLocomotion, setHeroLocomotion] = useState<string>('fhwtwh')
    const [heroAbilities, setHeroAbilities] = useState<string>('tkykther')
    const [heroSuperPower, setHeroSuperPower] = useState<string>('wfwgewgewg')

    return (
        <HeroAnswerStyle>
            <ul>
                <li>Nome do herói: <br /> <span>{heroName}</span> </li>
                <li>Cidade de atuação: <br /> <span>{heroCity}</span> </li>
                <li>Nível de experiência do herói: <br /> <span>{heroExperience}</span> </li>
                <li>Nome de herói: <br /> <span>{heroLocomotion}</span> </li>
                <li>Cidade do herói: <br /> <span>{heroAbilities}</span> </li>
                <li>Experiência do herói: <br /> <span>{heroSuperPower}</span> </li>
            </ul>
        </HeroAnswerStyle>
    )
}