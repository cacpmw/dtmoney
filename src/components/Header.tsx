import logo from '../assets/logo.svg'
import { Button, Container, Content } from '../styles/components/header';
export function Header() {
    return (
        <Container>
            <Content>
            <img src={logo} alt="logo" />
            <Button type="button">Nova transação</Button>
            </Content>
        </Container>
    );
}