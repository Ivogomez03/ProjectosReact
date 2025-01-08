import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';
export const Filters = () => {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {

        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {

        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    onChange={handleChangeMinPrice}
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                /> ${filters.minPrice}
            </div>
            <div>
                <label htmlFor={categoryFilterId}> Categoria</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="fragrances">Perfumes</option>
                    <option value="groceries">Comestibles</option>
                    <option value="furniture">Muebles</option>

                </select>
            </div>
        </section>
    )
}