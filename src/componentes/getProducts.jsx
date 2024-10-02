
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";


export const getProducts = async () => {
    try {
        const productsCollection = collection(db, "products");
        console.log("Obteniendo colección:", productsCollection);
        const productsSnapshot = await getDocs(productsCollection);
        console.log("snapshot.docs")
        
        
        const productsList = productsSnapshot.docs.map(doc => {
            const data = doc.data();
           
            if (!data.marca || !data.modelo || !data.precio || !data.img) {
                console.warn(`Documento faltante de datos: ${doc.id}`, data);
                return null; 
            }
            return {
                id: doc.id,
                ...data
            };
        }).filter(producto => producto !== null); 

        console.log("Productos obtenidos:", productsList);
        return productsList;
    } catch (error) {
        console.error("Error al obtener productos desde Firestore:", error);
        return [];
    }
};
