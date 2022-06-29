// Componentes
import { BoxValues } from "../BoxValues"
import { TransactionsTable } from "../TransactionsTable"

// CSS
import { Container } from './styles'


export function Dashboard() {
    return (
        <Container>

            <BoxValues />

            <TransactionsTable />

        </Container>
    )
}