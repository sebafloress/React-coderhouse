import { Link } from "react-router-dom";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
const ItemListContainer = () =>{
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams ()
    useEffect (() => {
        const db = getFirestore ()
        const itemCollection = collection (db, "products")
        getDocs (itemCollection)
        .then ((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            )
            
        })
},
[])
return(
    <div>
        <ItemList items={products}/>
    </div>
)
}
export default ItemListContainer