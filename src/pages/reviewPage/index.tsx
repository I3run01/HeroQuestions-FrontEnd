import { ReviewPageStyled } from "./style"
import { useContext, useEffect } from "react"
import { Context } from "../../contexts/Context"
import { useNavigate } from "react-router-dom"
import { fetchRequest } from "../../Auth/Request"

export const ReviewPage = () => {
    const {state, dispatch} = useContext(Context)
    const navigate = useNavigate()

    let getHeroInformation = async () => {
        
        let response = await fetchRequest.allHeroAnswer()
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
        getHeroInformation()
    },[])

    return (
        <ReviewPageStyled>

            <div id="container">
                <p id="backButton" onClick={() => {navigate(-1)}}>Voltar</p>
                <ul>
                    <li>Nome de herói: <br /><span>{state.heroQuestions.heroName}</span></li>
                    <li>Cidade de atuação: <br /><span>{state.heroQuestions.heroCity}</span></li>
                    <li>Nível de experiência do herói: <br /><span>{state.heroQuestions.heroExperience}</span></li>
                    <li>Meio de locomoção do herói: <br /><span>{state.heroQuestions.heroLocomotion}</span></li>
                    <li>Habilidades do herói <br /><span>{state.heroQuestions.heroAbilities}</span></li>
                    <li>Super poderes: <br /><span>{state.heroQuestions.heroSuperPower}</span></li>
                </ul>
            </div>

        </ReviewPageStyled>
    )
}