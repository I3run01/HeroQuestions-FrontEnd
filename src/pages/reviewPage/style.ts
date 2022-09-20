import styled from "styled-components";

export const ReviewPageStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');

    height: 100vh;

    background-image: url('images/Avengers.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;

    #container {
        margin-top: 70px;
        width: 600px;
        height: 700px;
        text-align: center;

        /* From https://css.glass */
        background: rgba(255, 187, 108, 0.43);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);
        border: 1px solid rgba(255, 187, 108, 0.3);

        #backButton {
            border: none;
            text-align: left;
            margin-left: 50px;
            font-family: 'Aboreto', cursive;
            color: white;
            font-size: 2em;
            cursor: pointer;
        }

        li {
          margin-top: 40px;
          list-style: none;
          font-family: 'Aboreto', cursive;
          color: white;
          font-weight: 500;
          font-size: 1.5em;

          span {
            color: black;
          }
        }
    }

    
    
`