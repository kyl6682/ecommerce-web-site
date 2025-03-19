import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    input, button {
        border: none;
        background-color: transparent;
        &:focus {
            outline: none;
        }
    } 
    a {
        text-decoration: none;
    }
    button, svg {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    main {
        flex-grow: 1;
    }
`
