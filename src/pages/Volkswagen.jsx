
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "../componentes/ItemList";

export const Volkswagen = () => {
    const [productosVolkswagen, setProductosVolkswagen] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("marca", "==", "volkswagen"));
        getDocs(q).then((snapshot) => {
            setProductosVolkswagen(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    return (
        <div>
            <h2>Volkswagen</h2>
            <ItemList items={productosVolkswagen} />
        </div>
    );
};
