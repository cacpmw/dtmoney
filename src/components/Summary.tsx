import { Container } from "../styles/components/summary";
import incomeImage from '../assets/income.svg';
import outcomeImage from '../assets/outcome.svg';
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImage} alt="income" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImage} alt="income" />
                </header>
                <strong> -R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Balance</p>
                    <img src={incomeImage} alt="income" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}