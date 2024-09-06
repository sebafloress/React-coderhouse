import { ItemListContainer } from '../componentes/ItemListContainer';

const productos = [
    { id: 1, nombre: "Producto 1", imagen: "https://via.placeholder.com/250" },
    { id: 2, nombre: "Producto 2", imagen: "https://via.placeholder.com/250" },
    { id: 3, nombre: "Producto 3", imagen: "https://via.placeholder.com/250" },
    { id: 4, nombre: "Producto 4", imagen: "https://via.placeholder.com/250" },
    { id: 5, nombre: "Producto 5", imagen: "https://via.placeholder.com/250" },
    { id: 6, nombre: "Producto 6", imagen: "https://via.placeholder.com/250" },
    { id: 7, nombre: "Producto 7", imagen: "https://via.placeholder.com/250" },
    { id: 8, nombre: "Producto 8", imagen: "https://via.placeholder.com/250" },
    { id: 9, nombre: "Producto 9", imagen: "https://via.placeholder.com/250" },
    
];

export const Home = () => {
    return (
        <div>
            <ItemListContainer mensaje={"Bienvenidos"} productos={productos} basePath="/Producto" />
        </div>
    );
};
