import { Link } from "react-router-dom";

export const ItemListContainer = ({ mensaje, productos, basePath }) => {
    return (
        <div>
            <h3>{mensaje}</h3>
            <div className="container">
                {productos.map(producto => (
                    <div key={producto.id} className="card">
                        <h2>{producto.nombre}</h2>
                        <img src={producto.imagen} alt={`Imagen del ${producto.nombre}`} />
                        <Link to={`${basePath}/${producto.id}`}>
                            <button>Detalles del producto</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
