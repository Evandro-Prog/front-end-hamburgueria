import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container, LeftContainer, RigtContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";
import Logo from '../../assets/Logo.svg';
import { api } from '../../services/api';

export function Register() {

    const navigate = useNavigate()
    // Validation schema using Yup
    const schema = yup
        .object({
            name: yup.string().required('O campo nome é obrigatório.'),
            email: yup.string().email('Verifique se o email informado está correto.').required('O campo email é obrigatório.'),
            password: yup.string().required('O campo senha é obrigatório').min(6, 'A senha deve ter no mínimo 6 caracteres.'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('O campo confirmar senha é obrigatório.')
        }).required()

    // useForm hook from react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    // Function to handle form submission
    const onSubmit = async (data) => {

        try {
            const { status } =
                await api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }, {
                    validateStatus: () => true,
                }
                )

            if (status === 200 || status === 201) {

                setTimeout(() => {
                    navigate('/login')
                }, 2000)

                toast.success('Conta criada com sucesso!')

            } else if (status === 400) {

                toast.error('Usuario já cadastrado em nosso sistema!')

            } else {

                throw new Error('Erro ao criar conta!')
            }           

        } catch (error) {
            toast.error('Erro ao criar conta!')
        }
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} />
            </LeftContainer>
            <RigtContainer>
                <Title>
                    Criar Conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer>
                        <label>Name</label>
                        <input type="name" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
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
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type='submit'>Criar conta</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui!</Link> </p>
            </RigtContainer>
        </Container>

    );
}