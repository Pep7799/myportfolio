import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,600;0,700;1,400&display=swap');
    * {
   
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        }

    body {
        background: #9BD8F3;
        font-family: 'Raleway', sans-serif;        
        overflow-x: hidden;
    }

    @media(max-width: 452px) {
        body {
            overflow-x: hidden;
        }

    }

`;

export default GlobalStyle