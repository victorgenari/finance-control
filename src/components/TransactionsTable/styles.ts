import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    max-width: 1000px;

    padding: 2rem;
    border-radius: 0.5rem;

    box-shadow: 2px 5px 7px rgba(0, 0, 0, 0.2);

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            font-weight: 600;
            text-align: left;
            padding: 1rem 2rem;

            color: rgba(0, 0, 0, 0.6);
        }

        td {
            padding: 1rem 2rem;
            background: rgba(0, 0, 0, 0.1);

            color: rgba(0, 0, 0, 0.7);

            &:first-child {
                color: #000000;
            }

            &.deposit {
                color: rgba(46, 204, 13, 1);
            }

            &.withdraw {
                color: rgba(207, 0, 15, 0.8);
            }
        }
    }
`