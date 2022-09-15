import { HerosQuestions } from "../../components/sendHeroQuestions"

export const Page02 = () => {

    return (
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
    )
}