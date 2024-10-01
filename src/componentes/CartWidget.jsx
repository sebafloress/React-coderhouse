
import { Link } from "react-router-dom";

export const CartWidget = ({ carrito }) => {
    // Calcular la cantidad total de productos en el carrito
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <div className="cart-widget">
            <Link to="/cart"> {}
                <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Carrito" />
                <span>{totalProductos}</span>
            </Link>
        </div>
    );
};
