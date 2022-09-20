import styled from "styled-components";

export const HeroAnswerStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');

    z-index: +1;
    position: absolute;

    height: 100vh;
    width: 320px;
    background-color: white;

    left: 0;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    ul {
        li {
            color: black;
            margin-top: 2.5em;
            font-family: 'Aboreto', cursive;
            font-size: 1.2em;
            font-weight: bold;
            list-style: none;

            span {
                color: white;
                font-size: 0.9em;
                margin: 1em;
            }
        }
    }

`