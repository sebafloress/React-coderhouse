export const CardWidget = ({ carrito }) => {
    // Calcular la cantidad total de productos en el carrito
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <div>
            <img  className="h-16" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Carrito" />
            <span>{totalProductos}</span> 
        </div>
    );
};


