// React
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import Modal from 'react-modal'

// Imgs
import CloseIcon from '../../assets/images/closeicon.png'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'

// CSS
import { Container, RadioBox, TransactionTypeContainer } from './styles'



interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseIcon} alt="Close modal" width={45} />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>

                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <BsArrowUpCircle size={28} color="#32CD32" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <BsArrowDownCircle size={28} color="#FF0000" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}