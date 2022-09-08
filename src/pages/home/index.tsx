import { HomeStyle } from "./style"
import { Link } from "react-router-dom"

export const Home = () => {

    return (
        <HomeStyle>
            
            <div id="container">
                <div id="LoginAndSignUp">
                    <Link to='/login'>Login</Link>
                    <Link to='/signup' id="signup">Cadastro</Link>
                </div>
                <h1>Qual herói você seria?</h1>
                <p>Faça o teste e descubra!</p>
            </div>
            
            
        </HomeStyle>
    )
}