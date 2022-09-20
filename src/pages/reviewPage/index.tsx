import { ReviewPageStyled } from "./style"
import { HeroAnswer } from '../../components/seeHeroAnswer'

export const ReviewPage = () => {

    return (
        <ReviewPageStyled>
            <HeroAnswer/>

            <div id="container">
                <button>Voltar</button>
                <h1>Review Page</h1>
            </div>

            

        </ReviewPageStyled>
    )
}