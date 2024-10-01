
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ProductDetail = ({ onAddToCart }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, "products", id);
        getDoc(productRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto({ id: snapshot.id, ...snapshot.data() });
            } else {
                console.error("Producto no encontrado");
            }
        });
    }, [id]);

    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    const incrementarCantidad = () => setCantidad(cantidad + 1);
    const decrementarCantidad = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    return (
        <div className="product-detail">
            <h2>{producto.marca}</h2>
            <img src={producto.img} alt={`Imagen del ${producto.marca}`} />
            <p>{producto.modelo}</p>
            <p>Precio: USD${producto.precio}</p>
            <div className="quantity-controls">
                <button onClick={decrementarCantidad}>-</button>
                <span>{cantidad}</span>
                <button onClick={incrementarCantidad}>+</button>
            </div>
            <button onClick={() => onAddToCart(producto, cantidad)}>Agregar al carrito</button>
        </div>
    );
};
