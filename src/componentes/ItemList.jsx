
import React from "react";
import Item from "./item";

const ItemList = ({ items }) => {
    return (
        <div className="container">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
