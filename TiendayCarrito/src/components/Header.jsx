import { Filters } from './Filters.jsx'
export const Header = ({ changeFilters }) => {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}