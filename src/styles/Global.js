import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding:0;
        background: ${({ theme }) => theme.colors.body};
        font-family: 'Mulish', sans-serif;
      
    }

    .active { 
    background: rgba(159, 162, 180, 0.08);
    border-left: 3px #dde2ff solid;
    color: #dde2ff;
    transition:0.3s
    }
`;

export default GlobalStyle;
