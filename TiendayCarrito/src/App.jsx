import { Cart } from "./components/Cart";
import { CartProvider } from "./components/cartContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products"
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json"
import { useState } from "react";



function App() {

  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
