import { Container } from "../styles/components/dashboard";
import { Summary } from "./Summary";
import { TransactionTable } from "./TransactionTable";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}