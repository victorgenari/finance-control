import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    max-width: 1000px;

    display: flex;
    justify-content: space-between;
`

export const BoxValuesContent = styled.div`
    width: 100%;
    max-width: 18rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin: -2rem 0 3rem 0;
    padding: 2rem;
    border-radius: 0.5rem;

    background: rgba(255, 255, 255, 0.8);
    box-shadow: 2px 5px 7px rgba(0, 0, 0, 0.2);

    &.total-background {
        color: #FFFFFF;
        background: rgba(102, 204, 153, 0.8);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 1.2rem;
        }
    }
`