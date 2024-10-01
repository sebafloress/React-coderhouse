
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = ({ carrito }) => {
    return (
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Toyota">Toyota</Link>
            <Link to="/Peugeot">Peugeot</Link>
            <Link to="/Volkswagen">Volkswagen</Link>
            <CartWidget carrito={carrito} /> 
        </nav>
    );
};
