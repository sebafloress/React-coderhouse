import { useState } from "react";
import { NavBar } from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Peugeot } from "./pages/Peugeot";
import { Volkswagen } from "./pages/Volkswagen";
import { Toyota } from "./pages/Toyota";
import { ProductDetail } from "./componentes/ProducDetail";
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
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
