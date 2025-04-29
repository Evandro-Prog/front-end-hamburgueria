import { api } from '../../services/api';
import { useState, useEffect } from 'react'

export function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
            console.log(data)
        }

        loadCategories()

    }, [])
    return (
        <div>Ok</div>
    )
}