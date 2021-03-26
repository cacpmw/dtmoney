import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "../styles/components/transactionTable";

export function TransactionTable(){
    useEffect(()=>{
        api.get('/transactions')
        .then(response => console.log(response.data));
    },[]);
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
