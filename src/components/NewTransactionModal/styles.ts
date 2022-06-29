import styled from 'styled-components'


export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        margin: 0 0 2rem 0;

        color: rgba(0, 0, 0, 0.6);
    }

    input {
        width: 100%;

        font-size: 1.1rem;
        font-weight: 600;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.5rem;

        border: 1px solid #D7D7D7;
        background: #E7E9EE;

        &::placeholder {
            color: rgba(0, 0, 0, 0.6);
        }

        & + input {
            margin: 1rem 0 0 0;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;

        font-size: 1.1rem;
        font-weight: 600;
        padding: 0 1.5rem;
        margin: 1.5rem 0 0 0;
        border-radius: 0.5rem;

        color: #FFFFFF;
        background: rgba(135, 200, 134, 1);

        &:hover {
            transition: .3s;
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin: 1rem 0;
`

interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: 'rgba(183, 244, 216, 1)',
    red: 'rgba(242, 38, 19, 0.3)'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: 4rem;

    border-radius: 0.5rem;

    border: 1px solid #D7D7D7;
    background: ${(props) => props.isActive
        ? colors[props.activeColor]
        : 'transparent'
    };

    &:hover {
        transition: .3s;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    span {
        font-size: 1.2rem;
    }
`