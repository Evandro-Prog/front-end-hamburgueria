import Logo from '../../assets/logo2.svg';
import { CartItens } from '../../components/CartItens';
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
                {/* <CartResume /> */}
            </Content>
        </Container>
    )
}