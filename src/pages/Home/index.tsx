// Contexto
import { TransactionsProvider } from '../../hooks/useTransactions'

// Hooks
import { useState } from 'react'

// Componentes
import { Header } from '../../components/Header'
import { Dashboard } from '../../components/Dashboard'
import { NewTransactionModal } from '../../components/NewTransactionModal'

// Modal
import Modal from 'react-modal'

// CSS
import { Container } from './styles'

// Informando onde o modal deve renderizar
Modal.setAppElement('#root')

export function Home() {
    const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setNewTransactionModalOpen(false)
    }

    return (
        <Container>
            <TransactionsProvider>
                <NewTransactionModal isOpen={newTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
                <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
                <Dashboard />
            </TransactionsProvider>

        </Container>
    )
}