// Imgs
import FinanceControlLogo from '../../assets/images/moneybag.png'

// CSS
import { Container, Content, LogoAndMoney, NewTransactionButton } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>

                <LogoAndMoney>
                    <img src={FinanceControlLogo} alt="Company Logo" />
                    <span>finance.Control</span>
                </LogoAndMoney>

                <NewTransactionButton>
                    <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
                </NewTransactionButton>


            </Content>
        </Container>
    )
}