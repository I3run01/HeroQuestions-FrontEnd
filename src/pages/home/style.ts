import styled from "styled-components";

export const HomeStyle = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Dancing+Script&family=Open+Sans:wght@300&family=Rubik+Dirt&display=swap');

    height: 100vh;
    padding-top: 50px;

    background-image: url('images/TRINITY.jpg');
    background-repeat: no-repeat;
    background-size: cover;


#container {

    position: fixed;
    transform: translateX(-50%);
    left: 50%;
    width: 500px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.12);


    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.70);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid rgba(255, 255, 255, 1);
    
    

    h1 {
        font-family: 'Aboreto', cursive;
        text-align: center;
        font-size: 2em;
        
    }

    p {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;

    }

    #LoginAndSignUp {
        display: flex;
        justify-content: end;

        a {
            position: relative;
            text-decoration: none;
            font-family: 'Aboreto', cursive;
            color: black;
            font-weight: bolder;
            font-size: 1.2em;
            
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

        

        #signup {
            margin-left: 20px;
        }
    

    }
}
`