import React from "react";
import "./ReviewItem.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-item-info">
        <div>
          <h3>{name}</h3>
          <p>
            Price : <span className="money">${price}</span>
          </p>
          <p>
            Shipping Charge : <span className="money">${shipping}</span>
          </p>
          <p>
            Quantity : <span className="money">${quantity}</span>
          </p>
        </div>
        <button onClick={() => handleRemoveItem(id)} className="remove-btn">
          <TrashIcon className="remove-icon" />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
