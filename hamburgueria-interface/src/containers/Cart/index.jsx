import Logo from '../../assets/logo2.svg';
import { CartItens, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart () {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                 <CartItens />
                <CartResume />
            </Content>
        </Container>
    )
}