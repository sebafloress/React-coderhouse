import { ItemListContainer } from '../componentes/ItemListContainer';
const productosToyota = [
    { id: 7, nombre: "Producto 7", imagen: "https://via.placeholder.com/250" },
    { id: 8, nombre: "Producto 8", imagen: "https://via.placeholder.com/250" },
    { id: 9, nombre: "Producto 9", imagen: "https://via.placeholder.com/250" }
];

export const Toyota = () => {
    return (
        <div>
            <h2>Toyota</h2>
            <ItemListContainer mensaje={"Productos Toyota"} productos={productosToyota} basePath="/Toyota" />
        </div>
    );
};

