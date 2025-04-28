import { Container, LeftContainer, RigtContainer, Title, Form, InputContainer } from "./styles";
import { Button } from "../../components/Button";
import Logo from '../../assets/Logo.svg';

export function Login() {
    return (


        <Container>
            <LeftContainer>
                <img src={Logo} />
            </LeftContainer>
            <RigtContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span> Login e senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="emal" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>
                <p>Não possui conta? <a>Clique aqui!</a> </p>
            </RigtContainer>
        </Container>

    );
}