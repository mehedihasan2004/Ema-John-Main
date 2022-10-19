import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required placeholder="Enter Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <input type="submit" value="Login" className="btn-submit" />
      </form>
      <p className="suggested-text">
        New to Ema-John ? <Link to="/signup">Create New Account</Link>
      </p>
    </div>
  );
};

export default Login;
