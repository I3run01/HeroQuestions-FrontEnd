import { HerosQuestions } from "../../components/sendHeroQuestions"
import { HeroAnswer } from '../../components/seeHeroAnswer'

export const Page02 = () => {

    return (
        <main>
            <HeroAnswer/>
            <HerosQuestions
                question01="Modo de locomoção: "
                question02="Habilidades do herói:"
                question03="Super Poder do heroi:"

                parameter01="heroLocomotion"
                parameter02="heroAbilities"
                parameter03="heroSuperPower"

                bgImage="images/SuperChoque.jpg"
                nextPage="/reviewPage"
            />
        </main>
    )
}