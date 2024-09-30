// src/pages/Peugeot.jsx
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "../componentes/ItemList";

export const Peugeot = () => {
    const [productosPeugeot, setProductosPeugeot] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("marca", "==", "Peugeot"));
        getDocs(q).then((snapshot) => {
            setProductosPeugeot(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    return (
        <div>
            <h2>Peugeot</h2>
            <ItemList items={productosPeugeot} />
        </div>
    );
};
