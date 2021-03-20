import { Container } from "../styles/components/transactionTable";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Site</td>
                        <td className="income">R$1000</td>
                        <td>Pessoal</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de Site</td>
                        <td className="outcome"> R$1000</td>
                        <td>Pessoal</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de Site</td>
                        <td className="income">R$1000</td>
                        <td>Pessoal</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}