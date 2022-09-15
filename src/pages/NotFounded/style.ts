import styled from "styled-components";


export const NotFoundedStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');


    display: flex;
    justify-content: center;

    background-image: url('images/Hero_crying.jpg');
    background-repeat: no-repeat;
    height: 100vh;

    div {
        margin-top: 50px;
        width: 400px;
        height: 300px;
        padding: 40px;

        /* From https://css.glass */
        background: rgba(245, 110, 63, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.7px);
        -webkit-backdrop-filter: blur(4.7px);
        border: 1px solid rgba(245, 110, 63, 1);
        
        text-align: center;
        font-weight: bolder;
        font-family: 'Aboreto', cursive;

        p {
            font-size: 4em;
        }

        a {
            color: black;
            :hover {
                color: blue;
            }
        }

    }




`