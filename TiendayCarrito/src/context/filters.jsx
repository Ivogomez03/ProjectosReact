import { createContext, useState } from "react";

// crear contexto, este es el que hay que consumir
export const FiltersContext = createContext();
// 2. Crear provider para proveer contexto

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({

        category: 'all',
        minPrice: 0

    })
    return (
        <FiltersContext.Provider value={{
            filters, setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}