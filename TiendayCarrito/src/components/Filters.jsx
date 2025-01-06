import { useState, useId } from 'react'
import './Filters.css'
export const Filters = ({ onChange }) => {

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {

        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" onChange={handleChangeMinPrice} id={minPriceFilterId} min='0' max='1000' /> ${minPrice}
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