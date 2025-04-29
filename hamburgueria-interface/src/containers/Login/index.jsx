import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Container, LeftContainer, RigtContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";
import Logo from '../../assets/Logo.svg';
import { api } from '../../services/api';

export function Login() {
    const navigate = useNavigate()
    // Validation schema using Yup
    const schema = yup
        .object({
            email: yup.string().email('Verifique se o email informado está correto.').required('O campo email é obrigatório.'),
            password: yup.string().required('O campo senha é obrigatório').min(6, 'A senha deve ter no mínimo 6 caracteres.')
        }).required()

    // useForm hook from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    // Function to handle form submission
    const onSubmit = async (data) => {
        try {
            const { data: { token } } = await toast.promise(
                api.post('/session', {
                    email: data.email,
                    password: data.password
                }),
                {
                    pending: 'Aguarde...',

                    success: {

                        render() {

                            setTimeout(() => {
                                navigate('/')
                            }, 2000)

                            return 'Login realizado com sucesso!'
                        }
                    },
                }
            )

            localStorage.setItem('token', token)

        } catch (error) {
            toast.error('Erro ao realizar o login, verifique suas credenciais.')
        }
    }

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
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type='submit'>Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui!</Link> </p>
            </RigtContainer>
        </Container>

    );
}