// src/componentes/Cart.jsx
import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

export const Cart = ({ carrito, handleRemoveFromCart, handleClearCart, handleCheckout }) => {
    // Estado para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    // Calcular el total del carrito
    const totalCarrito = carrito.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
    );

    // Función para crear la orden
    const handleCreateOrder = () => {
        if (!nombre || !email) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Aquí puedes enviar los datos a Firebase o cualquier otro sistema backend
        const order = {
            nombre,
            email,
            items: carrito,
            total: totalCarrito,
        };

        // Simulación de creación de orden
        alert(`Orden creada correctamente:
        Nombre: ${nombre}
        Email: ${email}
        Total: USD$${totalCarrito.toFixed(2)}`);

        // Limpia el formulario y el carrito después de la creación de la orden
        handleClearCart();
        setNombre('');
        setEmail('');
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {carrito.map((producto) => (
                            <li key={producto.id} className="cart-item">
                                <img src={producto.imagen} alt={`Imagen del ${producto.nombre}`} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{producto.nombre}</h3>
                                    <p>Precio: USD${producto.precio}</p>
                                    <p>Cantidad: {producto.cantidad}</p>
                                    <p>Total: USD${producto.precio * producto.cantidad}</p>
                                    <button onClick={() => handleRemoveFromCart(producto.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total del Carrito: USD${totalCarrito.toFixed(2)}</h3>

                    {/* Formulario para nombre y correo electrónico */}
                    <div className="order-form">
                        <h3>Datos de Contacto</h3>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Ingrese su nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingrese su correo"
                            />
                        </div>

                        {/* Botón para crear la orden */}
                        <button className="create-order-btn" onClick={handleCreateOrder}>
                            Crear Orden
                        </button>
                    </div>

                    <div className="cart-actions">
                        <button onClick={handleClearCart}>Vaciar Carrito</button>
                        <button onClick={handleCheckout}>Finalizar Compra</button>
                    </div>
                </>
            )}
        </div>
    );
};
const addOrder = () => {
    const purchase = {
        items: Cart,
        date: new Date()
    }
    const db = getFirestore()
    const orderCollection= collection (db,"orders")
    addDoc(orderCollection, purchase)
    .then(res=> console.log(res.id))
    .catch(error => console.log(error))
}
