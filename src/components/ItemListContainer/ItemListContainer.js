import React from "react";
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <span className="greeting">{greeting}</span>
        </div>
    );
};

export default ItemListContainer