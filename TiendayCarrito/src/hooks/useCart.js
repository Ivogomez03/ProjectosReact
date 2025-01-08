import { useContext } from "react";
import { CartContext } from "../components/cartContext";


export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart most be used within a CartProvider");
    }

    return context
}