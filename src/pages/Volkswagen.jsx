import { ItemListContainer } from '../componentes/ItemListContainer';

const productosVolkswagen = [
    { id: 4, nombre: "Producto 4", imagen: "https://via.placeholder.com/250" },
    { id: 5, nombre: "Producto 5", imagen: "https://via.placeholder.com/250" },
    { id: 6, nombre: "Producto 6", imagen: "https://via.placeholder.com/250" }
];

export const Volkswagen = () => {
    return (
        <div>
            <h2>Volkswagen</h2>
            <ItemListContainer mensaje={"Productos Volkswagen"} productos={productosVolkswagen} basePath="/Volkswagen" />
        </div>
    );
};

