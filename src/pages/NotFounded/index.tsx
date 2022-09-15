import { NotFoundedStyle } from "./style"
import { Link } from "react-router-dom";

export const NotFounded = () => {
    return (
        <NotFoundedStyle>
            <div>
                <h1>Desculpa, essa página não existe</h1>
                <p>😭</p>
                <Link to='/'>Página inicial</Link>
            </div>
        </NotFoundedStyle>
    )
}