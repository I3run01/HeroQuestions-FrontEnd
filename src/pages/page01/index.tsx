import { HerosQuestions } from "../components"

export const Page01 = () => {

    return (
        <HerosQuestions
        question01="Nome de herói: "
        question02="Cidade de atuação:"
        question03="Nível de experiência do herói:"

        parameter01="heroName"
        parameter02="cityAtuation"
        parameter03="heroExperience"
        />
    )
}