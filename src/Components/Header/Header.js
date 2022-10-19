import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header-nav">
      <img src={logo} alt="" />
      <div>
        <Link className="header-item" to="/">
          Shop
        </Link>
        <Link className="header-item" to="order">
          Order
        </Link>
        <Link className="header-item" to="inventory">
          Inventory
        </Link>
        <Link className="header-item" to="about">
          About
        </Link>
        {user?.uid ? (
          <Link onClick={logOut} className="header-item">
            Log Out
          </Link>
        ) : (
          <>
            <Link className="header-item" to="/signup">
              Sign up
            </Link>
            <Link className="header-item" to="/login">
              Login
            </Link>
          </>
        )}

        <p>{user?.email}</p>
      </div>
    </nav>
  );
};

export default Header;
