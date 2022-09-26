import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="order-review">Order Review</a>
        <a href="sign-up">Sign Up</a>
      </div>
    </nav>
  );
};

export default Header;
