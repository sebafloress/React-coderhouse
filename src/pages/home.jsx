import ItemListContainer from "../componentes/ItemListContainer";



const productos = [
    { id: 1, nombre: "Peugeot 208 GT", imagen: "https://via.placeholder.com/250" },
    { id: 2, nombre: "Peugeot 3008 GT Line", imagen: "https://via.placeholder.com/250" },
    { id: 3, nombre: "Peugeot 308 CC", imagen: "https://via.placeholder.com/250" },
    { id: 4, nombre: "Volkswagen Vento sportline", imagen: "https://via.placeholder.com/250" },
    { id: 5, nombre: "Volkswagen Golf GTI", imagen: "https://via.placeholder.com/250" },
    { id: 6, nombre: "Volkswagen Amarok Extreme ", imagen: "https://via.placeholder.com/250" },
    { id: 7, nombre: "Toyota Corolla", imagen: "https://via.placeholder.com/250" },
    { id: 8, nombre: "Toyota 86", imagen: "https://via.placeholder.com/250" },
    { id: 9, nombre: "Toyota Yaris", imagen: "https://via.placeholder.com/250" },
];

export const Home = () => {
    return (
        <div>
            <ItemListContainer mensaje={"Bienvenidos"} productos={productos} basePath="/Producto" />
        </div>
    );
};
