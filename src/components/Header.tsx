import logo from '../assets/logo.svg'
import { Button, Container, Content } from '../styles/components/header';
interface HeaderProps {
    onOpenNewTransactionModal: () => void
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logo} alt="logo" />
                <Button type="button" onClick={onOpenNewTransactionModal}>Nova transação</Button>
            </Content>
        </Container>
    );
}