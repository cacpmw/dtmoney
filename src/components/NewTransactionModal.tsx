import Modal from 'react-modal';
import { useState, FormEvent } from 'react';
import { Form, TransactionTypeContainer, TransactionTypeButton } from '../styles/components/newTransactionModal';
import closeImage from '../assets/close.svg';
import incomeImage from '../assets/income.svg';
import outcomeImage from '../assets/outcome.svg';
import { useTransactions } from '../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const {postTransaction} = useTransactions();
    const [transactionType, setTransactionType] = useState<'income'|'outcome'>('income');
    const [transactionTitle, setTransactionTitle] = useState('');
    const [transactionValue, setTransactionValue] = useState(0);
    const [transactionCategory, setTransactionCategory] = useState('');
    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
         await postTransaction({
             title: transactionTitle,
             amount: transactionValue,
             category: transactionCategory,
             type: transactionType,
         });
         setTransactionTitle('');
         setTransactionType('income');
         setTransactionValue(0);
         setTransactionCategory('');
         onRequestClose();

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
                className="react-modal-close">
                <img src={closeImage}
                    alt="Close window"
                />
            </button>
            <Form onSubmit={handleFormSubmit}>
                <h2>New Transaction</h2>

                <input
                    value={transactionTitle}
                    onChange={(event) => setTransactionTitle(event.target.value)}
                    autoFocus
                    type="text"
                    placeholder="Title" />
                <input
                    value={transactionValue}
                    onChange={(event) => { setTransactionValue(Number(event.target.value)) }}
                    type="number"
                    placeholder="Value" />
                <TransactionTypeContainer>
                    <TransactionTypeButton
                        type="button"
                        activeColor="green"
                        onClick={() => { setTransactionType('income'); }}
                        isActive={transactionType === 'income'}>
                        <img src={incomeImage} alt="income" />
                        <span>Income</span>
                    </TransactionTypeButton>
                    <TransactionTypeButton
                        type="button"
                        activeColor="red"
                        onClick={() => setTransactionType('outcome')}
                        isActive={transactionType === 'outcome'}
                    >

                        <img src={outcomeImage} alt="outcome" />
                        <span>Outcome</span>
                    </TransactionTypeButton>
                </TransactionTypeContainer>
                <input
                    value={transactionCategory}
                    onChange={(event) => { setTransactionCategory(event.target.value) }}
                    placeholder="Category" />
                <button type="submit">Save</button>
            </Form>

        </Modal>
    )
}