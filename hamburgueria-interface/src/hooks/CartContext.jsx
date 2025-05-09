import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartproducts] = useState([])

    const putProductIn = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

        let newProductsInCart = []

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts

            newProductsInCart[cartIndex].quantity =
                newProductsInCart[cartIndex].quantity + 1

            setCartproducts(newProductsInCart)
        } else {

            product.quantity = 1
            newProductsInCart = [...cartProducts, product]
            setCartproducts(newProductsInCart)
        }

        updateLocalStorage(newProductsInCart)
    }

    const clearCart = () => {
        setCartproducts([])

        updateLocalStorage([])
    }

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId)

        setCartproducts(newCart)
        updateLocalStorage(newCart)
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd

        })

        setCartproducts(newCart)
        updateLocalStorage(newCart)
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd
            })

            setCartproducts(newCart)
            updateLocalStorage(newCart)

        } else {

            deleteProduct(productId)
        }
    }

    const updateLocalStorage = (products) => {
        localStorage.setItem('hamburgueria:cartInfo', JSON.stringify(products))
    }

    useEffect(() => {
        const clientCartData = localStorage.getItem('hamburgueria:cartInfo')

        if (clientCartData) {
            setCartproducts(JSON.parse(clientCartData))
        }
    }, [])


    return (
        <CartContext.Provider value={{
            cartProducts,
            putProductIn,
            clearCart,
            deleteProduct,
            increaseProduct,
            decreaseProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with a context')
    }

    return context
}