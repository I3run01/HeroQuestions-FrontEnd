import styled from "styled-components";

export const ReviewPageStyled = styled.div`
    height: 100vh;

    background-image: url('images/Avengers.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;

    #container {
        margin-top: 70px;
        width: 600px;
        height: 800px;
        color: yellow;
        text-align: center;

        /* From https://css.glass */
        background: rgba(151, 241, 102, 0.27);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(151, 241, 102, 0.3);

        button {
            background-color: blue;
        }
    }

    
    
`