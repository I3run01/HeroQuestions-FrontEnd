import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { HeroAnswerStyle } from "./style"
import { allHeroAnswer } from "../../Auth/Request"

export const HeroAnswer = () => {

    const {state, dispatch} = useContext(Context)

    const getAllHeroAnswer = async () => {
        let response = await allHeroAnswer()
        let json = JSON.parse(response)

        dispatch({
            type: 'changeHeroName',
            payload: {
                heroName: json.heroQuestions.heroName
            }
        })

        dispatch({
            type: 'changeHeroCity',
            payload: {
                heroCity: json.heroQuestions.heroCity
            }
        })

        dispatch({
            type: 'changeHeroExperience',
            payload: {
                heroExperience: json.heroQuestions.heroExperience
            }
        })

        dispatch({
            type: 'changeHeroLocomotion',
            payload: {
                heroLocomotion: json.heroQuestions.heroLocomotion
            }
        })

        dispatch({
            type: 'changeHeroAbilities',
            payload: {
                heroAbilities: json.heroQuestions.heroAbilities
            }
        })

        dispatch({
            type: 'changeHeroSuperPower',
            payload: {
                heroSuperPower: json.heroQuestions.heroSuperPower
            }
        })
    }

    useEffect(() => {
        getAllHeroAnswer()
    })

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