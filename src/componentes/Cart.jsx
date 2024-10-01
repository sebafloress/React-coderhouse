
import React, { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";

export const Cart = ({ carrito, handleRemoveFromCart, handleClearCart, handleCheckout }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const totalCarrito = carrito.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
    );

    const handleCreateOrder = async () => {
        if (!nombre || !email) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        setLoading(true);

        const order = {
            nombre,
            email,
            items: carrito,
            total: totalCarrito,
            fecha: new Date(),
        };

        try {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);

            setOrderId(docRef.id);

            handleClearCart();
            setNombre('');
            setEmail('');
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un error al crear la orden, intente nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 && !orderId ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    {carrito.length > 0 && (
                        <>
                            <ul className="cart-list">
                                {carrito.map((producto) => (
                                    <li key={producto.id} className="cart-item">
                                        
                                        <img src={producto.img } alt={`Imagen del ${producto.nombre}`} className="cart-item-image" />
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
                        </>
                    )}

                    {!orderId && (
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

                            <button className="create-order-btn" onClick={handleCreateOrder} disabled={loading}>
                                {loading ? "Creando Orden..." : "Crear Orden"}
                            </button>
                        </div>
                    )}

                    <div className="cart-actions">
                        <button onClick={handleClearCart}>Vaciar Carrito</button>
                    </div>
                </>
            )}

            {orderId && (
                <div className="order-confirmation">
                    <h3>¡Orden creada con éxito!</h3>
                    <p>ID de la orden: <strong>{orderId}</strong></p>
                </div>
            )}
        </div>
    );
};
