import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  // console.log(products);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleClick = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="products-page">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToClick={handleClick}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/order">
            <button>Review Item</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
