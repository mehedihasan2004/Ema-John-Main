import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = (product) => {
    console.log("got clicked", product);
    const updatedCart = [...cart, product];
    setCart(updatedCart);
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
        <h2>Added Items In Cart</h2>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
