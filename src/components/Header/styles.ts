import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 12rem;

    display: flex;
    justify-content: center;

    background: #87CEFA;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const LogoAndMoney = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    margin: -3rem 0 0 0;

    img {
        width: 100%;
        max-width: 2.5rem;
    }

    span {
        font-weight: 600;
    }
`

export const NewTransactionButton = styled.div`
    margin: -3rem 0 0 0;

    button {
        font-size: 1.1rem;
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;

        color: #FFFFFF;
        background: #40E0D0;

        &:hover {
            transition: .3s;
            cursor: pointer;
            filter: brightness(0.8);
        }
    }
`