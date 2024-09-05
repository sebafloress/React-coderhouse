import { useParams } from "react-router-dom";

import { useState } from "react";

// Lista de productos con precio
const productos = [
    { id: 1, nombre: "Producto 1", imagen: "https://via.placeholder.com/250", precio: 100 },
    { id: 2, nombre: "Producto 2", imagen: "https://via.placeholder.com/250", precio: 150 },
    { id: 3, nombre: "Producto 3", imagen: "https://via.placeholder.com/250", precio: 200 },
    { id: 4, nombre: "Producto 4", imagen: "https://via.placeholder.com/250", precio: 250 },
    { id: 5, nombre: "Producto 5", imagen: "https://via.placeholder.com/250", precio: 300 },
    { id: 6, nombre: "Producto 6", imagen: "https://via.placeholder.com/250", precio: 350 },
    { id: 7, nombre: "Producto 7", imagen: "https://via.placeholder.com/250", precio: 400 },
    { id: 8, nombre: "Producto 8", imagen: "https://via.placeholder.com/250", precio: 450 },
    { id: 9, nombre: "Producto 9", imagen: "https://via.placeholder.com/250", precio: 500 }
];

export const ProductDetail = ({ onAddToCart }) => {
    const { id } = useParams();
    const producto = productos.find(p => p.id === parseInt(id));
    const [cantidad, setCantidad] = useState(1); // Estado para el contador

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    // Funciones para incrementar y decrementar cantidad
    const incrementarCantidad = () => setCantidad(cantidad + 1);
    const decrementarCantidad = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={`Imagen del ${producto.nombre}`} />
            <p>Precio: ${producto.precio}</p>
            <div>
                <button onClick={decrementarCantidad}>-</button>
                <span>{cantidad}</span>
                <button onClick={incrementarCantidad}>+</button>
            </div>
            <button onClick={() => onAddToCart(producto, cantidad)}>Agregar al carrito</button>
        </div>
    );
};
