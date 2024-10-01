
import { useState } from "react";
import { NavBar } from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Peugeot } from "./pages/Peugeot";
import { Volkswagen } from "./pages/Volkswagen";
import { Toyota } from "./pages/Toyota";
import { ProductDetail } from "./componentes/ProducDetail";
import { Cart } from "./componentes/Cart";
import { Error } from "./pages/Error";
import "./App.css";

function App() {
    const [carrito, setCarrito] = useState([]);

    const handleAddToCart = (producto, cantidad) => {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        if (itemEnCarrito) {
            setCarrito(
                carrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            );
        } else {
            setCarrito([...carrito, { ...producto, cantidad }]);
        }
    };

    const handleRemoveFromCart = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const handleClearCart = () => {
        setCarrito([]);
    };

    const handleCheckout = () => {
        alert('Compra finalizada con éxito.');
        handleClearCart(); 
    };

    return (
        <BrowserRouter>
            <header>
                <p>Carshop</p>
            </header>

            <NavBar carrito={carrito} />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Volkswagen" element={<Volkswagen />} />
                <Route path="/Volkswagen/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/Toyota" element={<Toyota />} />
                <Route path="/Toyota/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/Peugeot" element={<Peugeot />} />
                <Route path="/Peugeot/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/Producto/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<Cart 
                                                carrito={carrito} 
                                                handleRemoveFromCart={handleRemoveFromCart}
                                                handleClearCart={handleClearCart}
                                                handleCheckout={handleCheckout} 
                                            />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
