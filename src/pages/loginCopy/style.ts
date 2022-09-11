import styled from "styled-components";

export const LoginStyle = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');

    height: 100vh;
    padding-top: 50px;
    background-image: url('images/TrinitySignUp.jpg');
    background-repeat: no-repeat;
    background-size: cover;


        #container {
            position: relative;
            transform: translateX(-50%);
            left: 50%;
            width: 500px;
            height: 250px;
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
                position: absolute;
                text-decoration: none;
                font-family: 'Aboreto', cursive;
                color: black;
                font-weight: bolder;
                font-size: 1.2em;
                border: none;
                background: none;
                cursor: pointer;
                top: 10px;
                right: 10px;

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
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-family: 'Aboreto', cursive;
                text-align: left;
                font-size: 1.2em;
                align-items: center;
                

                #email, #password, #repeatPassword {
                    border: none;
                    border-bottom: 1px solid black;
                    height: 30px;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 1.2em;
                    background: none;
                }

                #Login {
                    color: white;
                    margin-top: 30px;
                    font-family: 'Aboreto', cursive;
                    font-size: 1.2em;
                    cursor: pointer;
                    background: linear-gradient(90deg, rgba(182,0,0,0.4522613065326633) 0%, rgba(80,78,0,1) 57%, rgba(0,0,0,1) 85%);
                }
            }
        }


`