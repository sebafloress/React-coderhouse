
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/Producto/${item.id}`}>
                <img src={item.img} alt={item.modelo} />
                <h2>{item.modelo}</h2>
            </Link>
            <p>Precio: USD${item.precio}</p>
            <Link to={`/Producto/${item.id}`}>
                <button>Ver más detalles</button>
            </Link>
        </div>
    );
};

export default Item;
