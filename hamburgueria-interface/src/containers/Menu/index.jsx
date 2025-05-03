import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { api } from '../../services/api'
import { Button, CardProduct } from '../../components'
import { Banner, CategoryMenu, Container, ProductsContainer, CategoryButton, FooterButtonContainer } from './styles';
import { formatPrice } from '../../utils/formatPrice';

export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    const navigate = useNavigate()

    const { search } = useLocation()
    const categoryId = Number(new URLSearchParams(search).get('categoria')) || 0
    const [activeCategory, setActiveCategory] = useState(categoryId)

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            const NewCategories = [{ id: 0, name: "Todas" }, ...data]

            setCategories(NewCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product
            }))

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilterProducts(products)
        } else {
            const newFilterProducts = products.filter(
                (product) => product.category_id === activeCategory
            )

            setFilterProducts(newFilterProducts)
        }
    }, [products, activeCategory])

    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível</span>
                </h1>
            </Banner>
            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate({
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`
                            },
                                {
                                    replace: true
                                }
                            )

                            setActiveCategory(category.id)
                        }}
                    >{category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filterProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
            <FooterButtonContainer>
                <Button
                    onClick={() => {
                        navigate({ pathname: '/' })
                    }}
                >
                    Voltar
                </Button>
            </FooterButtonContainer>
        </Container >
    )
}