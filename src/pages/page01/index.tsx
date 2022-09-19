import { HerosQuestions } from "../../components/sendHeroQuestions"
import { HeroAnswer } from "../../components/sendHeroQuestions/seeHeroAnswer"
import { Page01style } from "./style"

export const Page01 = () => {

    return (
        <Page01style>
            <HerosQuestions
                question01="Nome de herói: "
                question02="Cidade de atuação:"
                question03="Nível de experiência do herói:"

                parameter01="heroName"
                parameter02="heroCity"
                parameter03="heroExperience"
                bgImage="images/spiderman.jpg"
                nextPage='/page02'
            />
        </Page01style>
        
    )
}