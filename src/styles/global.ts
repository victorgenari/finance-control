import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
        list-style: none;
        font-family: 'Poppins', Arial, sans-serif;
        font-weight: 400;

        a {
            color: #000000;
        }
    }

    html {

        scroll-behavior: smooth;
        background: rgba(0, 0, 0, 0.05);

        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        
    }

    body {
        /* Isso irá ajudar a fonte ficar mais detalhada/nítida entre os navegadores */
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    // Tudo que estiver desabilitado na aplicação, irá pegar esses estilos
    [disabled] {
        opacity: 0.8;
        cursor: not-allowed;
    }

    // Modal de transações
    .react-modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        z-index: 100;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.5);
    }

    .react-modal-content {
        width: 100%;
        max-width: 580px;

        position: relative;
        padding: 3rem;
        border-radius: 0.5rem;

        background: #FFFFFF;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        background: transparent;

        &:hover {
            transition: .3s;
            transform: scale(1.05);
            cursor: pointer;
        }
    }

`