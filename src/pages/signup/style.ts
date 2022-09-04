import styled from "styled-components";

type Props = {
    validEmail: boolean
    matchPassword: boolean
}

export const SignUpStyle = styled.div<Props>`

    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');

    height: 100vh;
    padding-top: 50px;

    background-image: url('images/TrinitySignUp.jpg');
    background-repeat: no-repeat;
    background-size: cover;


#container {

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    transform: translateX(-50%);
    left: 50%;
    width: 500px;
    height: 300px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.12);

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.70);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid rgba(255, 255, 255, 1);
    
    #backbutton {
        margin-top: 30px;
        text-decoration: none;
        font-family: 'Aboreto', cursive;
        color: black;
        font-weight: bolder;
        font-size: 1.2em;
        border: none;
        background: none;
        cursor: pointer;
        margin-left: 70%;

        ::after {
            content: '';
            height: 4px;
            width: 0%;
            background: red;
            display: block;
            transition: 0.3s;
        }

        :hover::after {
            width: 100%;
        }

        
    }

    form {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: 'Aboreto', cursive;
        text-align: left;
        font-size: 1.2em;

        #email, #password, #repeatPassword {
            border: none;
            border-bottom: 1px solid black;
            height: 30px;
            font-family: 'Open Sans', sans-serif;
            font-size: 1.2em;
            background: none;
        }

        #createAnAccount {
            color: white;
            margin-top: 30px;
            font-family: 'Aboreto', cursive;
            font-size: 1.2em;
            cursor: pointer;
            background: linear-gradient(90deg, rgba(182,0,0,0.4522613065326633) 0%, rgba(80,78,0,1) 57%, rgba(0,0,0,1) 85%);
        }

        .emailValidation, .passwordValidation {
             font-weight: bolder;
             font-size: 0.6em;
             margin-top: 0;
             padding-top: 0;
        }

        .emailValidation {
            color: ${props => props.validEmail ? 'green' : 'red'};
        }

        .passwordValidation {
            color: ${props => props.matchPassword ? 'green' : 'red'}
        }

    }
}
`