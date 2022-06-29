// Context
import { useTransactions } from '../../hooks/useTransactions'

// Icons
import { FiDollarSign } from 'react-icons/fi'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'

// CSS
import { Container, BoxValuesContent } from './styles'



export function BoxValues() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>

            <BoxValuesContent>
                <div>
                    <h2>Entradas</h2>
                    <BsArrowUpCircle size={28} color="#32CD32" />
                </div>

                <div>
                    <span>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}
                    </span>
                </div>
            </BoxValuesContent>

            <BoxValuesContent>
                <div>
                    <h2>Saídas</h2>
                    <BsArrowDownCircle size={28} color="#FF0000" />
                </div>

                <div>
                    <span>
                        - {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}
                    </span>
                </div>
            </BoxValuesContent>

            <BoxValuesContent className="total-background">
                <div>
                    <h2>Total</h2>
                    <FiDollarSign size={30} />
                </div>

                <div>
                    <span>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                    </span>
                </div>
            </BoxValuesContent>

        </Container>
    )
}