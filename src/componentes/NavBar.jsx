import { Link } from "react-router-dom";
import { CardWidget } from "./CartWidget";

export const NavBar = ({ carrito }) => {
    return (
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Toyota">Toyota</Link>
            <Link to="/Peugeot">Peugeot</Link>
            <Link to="/Volkswagen">Volkswagen</Link>
            <CardWidget carrito={carrito} />
        </nav>
    );
};
