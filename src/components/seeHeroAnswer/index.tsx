import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { HeroAnswerStyle } from "./style"

export const HeroAnswer = () => {
    const {state, dispatch} = useContext(Context)


    return (
        <HeroAnswerStyle>
            <ul>
                <li>Nome do herói: <br /> <span>{state.heroQuestions.heroName}</span> </li>
                <li>Cidade de atuação: <br /> <span>{state.heroQuestions.heroCity}</span> </li>
                <li>Nível de experiência do herói: <br /> <span>{state.heroQuestions.heroExperience}</span> </li>
                <li>Meio de locomoção do herói: <br /> <span>{state.heroQuestions.heroLocomotion}</span> </li>
                <li>Habilidades do herói: <br /> <span>{state.heroQuestions.heroAbilities}</span> </li>
                <li>Super poderes: <br /> <span>{state.heroQuestions.heroSuperPower}</span> </li>
            </ul>
        </HeroAnswerStyle>
    )
}