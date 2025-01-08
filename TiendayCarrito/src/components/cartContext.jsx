import { createContext, useReducer, useState } from "react";
import { carReducer, carInitialState } from "../reducers/reducerCart";

export const CartContext = createContext();




export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(carReducer, carInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
    const clearCart = () => dispatch(({ type: 'CLEAR_CART' }))
    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}