import ItemListContainer from "../componentes/ItemListContainer";




export const Home = () => {
    return (
        <div>
            <ItemListContainer mensaje={"Bienvenidos"} basePath="/Producto" />
        </div>
    );
};
