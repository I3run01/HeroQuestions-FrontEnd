import styled from "styled-components";

type Props = {
    bgImage: string
}

export const HeroQuestionStyle = styled.main<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');
    
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;

    background-image: url(${props => props.bgImage});
    background-repeat: repeat;
    background-size: cover;

    #container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: left;
        border-radius: 20px;
        padding: 20px;
        height: 500px;
        width: 500px;

        /* From https://css.glass */
        background: rgba(53, 138, 215, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(5.3px);
        border: 2px solid rgba(53, 138, 215, 0.3);

        #backbutton {
            margin-bottom: 20px;
            width: min-content;

            :hover {
                cursor: pointer;
            }

            ::after {
                    content: '';
                    height: 4px;
                    width: 0%;
                    background: #c900ff;
                    display: block;
                    transition: 0.3s;
            }

            :hover::after {
                width: 100%;
            }
        }

        p {
            font-family: 'Aboreto', cursive;
            font-size: 1.5em;
            margin: 0;
            margin-bottom: 10px;
            color: white;
            font-weight: bold;
        }

        input {
            background: none;
            border: none;
            border-bottom: 1px solid black;
            height: 2em;
            margin-bottom: 40px;
            font-family: 'Aboreto', cursive;
            font-size: 1.2em;
            color: white;

            ::placeholder {
                color: white;
                font-weight: lighter;
                opacity: 70%;
            }
        }
        
        button {
            color: white;
            margin-top: 30px;
            font-family: 'Aboreto', cursive;
            font-size: 1.2em;
            cursor: pointer;
            width: 300px;
            align-self: center;
            padding: 5px;
            border-radius: 10px;


            background: rgb(51,99,82);
            background: -moz-linear-gradient(34deg, rgba(51,99,82,1) 15%, rgba(10,71,74,1) 54%, rgba(84,0,122,1) 100%);
            background: -webkit-linear-gradient(34deg, rgba(51,99,82,1) 15%, rgba(10,71,74,1) 54%, rgba(84,0,122,1) 100%);
            background: linear-gradient(34deg, rgba(51,99,82,1) 15%, rgba(10,71,74,1) 54%, rgba(84,0,122,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#336352",endColorstr="#54007a",GradientType=1);
        }
    }
`