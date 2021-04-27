import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    type: 'income' | 'outcome',
    amount: number;
    category: string;
    createdAt: Date;
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
interface TransactionProviderProperties {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    postTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);


export function TransactionProvider({ children }: TransactionProviderProperties) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);
    async function postTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;
        setTransactions([...transactions, transaction]);
    }
    return (
        <TransactionContext.Provider value={{ transactions, postTransaction }}>{children}</TransactionContext.Provider>
    );
}
export function useTransactions() {
    return useContext(TransactionContext);
}