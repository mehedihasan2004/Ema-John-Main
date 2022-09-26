import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = ({ product, handleAddToClick }) => {
  //   const { product, handleAddToClick } = props;
  const { name, price, seller, ratings, img } = product;

  return (
    <div className="products-holder">
      <div className="product-info-including-img">
        <img src={img} alt="" />
        <div className="product-info">
          <h5>{name}</h5>
          <p>Price: ${price}</p>
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings} start</small>
          </p>
        </div>
      </div>
      <button className="cart-btn" onClick={() => handleAddToClick(product)}>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
