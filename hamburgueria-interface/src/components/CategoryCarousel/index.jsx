import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { Container, Title, ContainerItens, CategoryButton } from './styles'

export function CategoryCarousel() {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
        }

        loadCategories()

    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        }
    }

    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass="carousel-item"
            >
                {categories.map((category) => (
                    <ContainerItens key={category.id} imageUrl={category.url}>
                        <CategoryButton
                            onClick={() =>
                                navigate({

                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                    {
                                        replace: true
                                    }
                                )
                            }
                        >{category.name}
                        </CategoryButton>                        
                    </ContainerItens>))}
            </Carousel>
        </Container>
    )
}