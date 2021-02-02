import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    
    a{
        text-decoration:none;
        color:inherit
    }
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        border:0;
        vertical-align:baseline;
    }
    body{
        font-family:'Noto Sans'
    }
    li {
        list-style:none
    }
    html{
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
