import { ContainerButton } from './styles'
import cart from '../../assets/cart-button.svg'

export function CartButton({...props}) {
    return (
        <ContainerButton {...props}>
            <img src={cart} atl='carrinho-de-compras'/>
        </ContainerButton>
    )
}