// src/firebase/getProducts.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";

// Función para obtener productos desde Firestore
export const getProducts = async () => {
    try {
        const productsCollection = collection(db, "products");
        console.log("Obteniendo colección:", productsCollection);
        const productsSnapshot = await getDocs(productsCollection);
        console.log("snapshot.docs")
        
        // Comprobar si los documentos tienen los campos esperados
        const productsList = productsSnapshot.docs.map(doc => {
            const data = doc.data();
            // Validar que todos los campos existan
            if (!data.marca || !data.modelo || !data.precio || !data.img) {
                console.warn(`Documento faltante de datos: ${doc.id}`, data);
                return null; // Ignorar documentos con datos faltantes
            }
            return {
                id: doc.id,
                ...data
            };
        }).filter(producto => producto !== null); // Filtrar documentos inválidos

        console.log("Productos obtenidos:", productsList);
        return productsList;
    } catch (error) {
        console.error("Error al obtener productos desde Firestore:", error);
        return [];
    }
};
