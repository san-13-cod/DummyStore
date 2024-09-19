import React from "react";
import "./productCard.css";

function ProductCard({ itemData }) {
  return (
    <div className="productCard">
      <div className="parentImage">
        <img src={itemData.thumbnail} alt="Not available" loading="lazy" />
      </div>
      <div className="productCardContent">
        <h4>{itemData.title}</h4>
        <h4>${Math.floor(itemData.price)}</h4>
      </div>
      {itemData.brand ? (
        <button>{itemData.brand}</button>
      ) : (
        <button>{"No Brand"}</button>
      )}
    </div>
  );
}

export default ProductCard;
