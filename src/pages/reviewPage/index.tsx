import { ReviewPageStyled } from "./style"
import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { useNavigate } from "react-router-dom"

export const ReviewPage = () => {
    const {state, dispatch} = useContext(Context)
    const navigate = useNavigate()

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