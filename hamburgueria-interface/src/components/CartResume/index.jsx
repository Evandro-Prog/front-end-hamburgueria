import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(500)
    const navigate = useNavigate()

    const { cartProducts, clearCart } = useCart()

    useEffect(() => {
        const sumAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItens)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price }
        })

        try {
            const { data } = await api.post('/create-payment-intent', { products })
            navigate('/checkout', {
                state: data
            })
        } catch (err) {
            toast.error('🦄 Ops! Algo deu errado, tente novamente!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }

        /* try {
            const { status } =
                await api.post('/orders', {products}, {
                    validateStatus: () => true,
                })

            if (status === 200 || status === 201) {
                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 2000)

                toast.success('Pedido realizado com sucesso!')

            } else if (status === 400) {

                toast.error('Falha ao realizar seu pedido!')

            } else {

                throw new Error()
            }

        } catch (error) {
            toast.error('Erro ao finalizar pedido, tente novamente!')
        } */
    }


    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="itens">Itens</p>
                    <p className="itens-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-botton">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Continuar</Button>
        </div>
    )
}