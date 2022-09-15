import { ReviewPageStyle } from "./style"
import { useNavigate } from "react-router-dom"

export const ReviewPage = () => {
    const navigate = useNavigate()

    return (
        <ReviewPageStyle>
            <div id="container">
                <p id="backButton" onClick={()=> { navigate(-1) }}>Voltar</p>
                <h1>ReviewPage</h1>
                
            </div>
        </ReviewPageStyle>
    )
}