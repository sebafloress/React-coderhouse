
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "../componentes/ItemList";

export const Toyota = () => {
    const [productosToyota, setProductosToyota] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("marca", "==", "toyota"));
        getDocs(q).then((snapshot) => {
            setProductosToyota(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    return (
        <div>
            <h2>Toyota</h2>
            <ItemList items={productosToyota} />
        </div>
    );
};
