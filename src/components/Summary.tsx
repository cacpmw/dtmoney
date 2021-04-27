import { Container } from "../styles/components/summary";
import incomeImage from '../assets/income.svg';
import totalImage from '../assets/total.svg';
import outcomeImage from '../assets/outcome.svg';
import { useTransactions } from '../hooks/useTransactions';
export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.outcome += transaction.amount;
            acc.total -= transaction.amount;

        }
        return acc;
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImage} alt="income" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.income)}</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImage} alt="income" />
                </header>
                <strong> -{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.outcome)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={totalImage} alt="income" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}