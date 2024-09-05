import { ItemListContainer } from '../componentes/ItemListContainer';

const productosPeugeot = [
    { id: 1, nombre: "Producto 1", imagen: "https://via.placeholder.com/250" },
    { id: 2, nombre: "Producto 2", imagen: "https://via.placeholder.com/250" },
    { id: 3, nombre: "Producto 3", imagen: "https://via.placeholder.com/250" }
];

export const Peugeot = () => {
    return (
        <div>
            <h2>Peugeot</h2>
            <ItemListContainer mensaje={"Productos Peugeot"} productos={productosPeugeot} basePath="/Peugeot" />
        </div>
    );
};

