import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password must be 6 character or long");
      return;
    }
    if (password !== confirm) {
      setError("Confirm password didn't match");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error("Error", err));
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
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
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            required
            placeholder="Confirm Password"
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <input type="submit" value="Sign up" className="btn-submit" />
      </form>
      <p className="suggested-text">
        Already Have an Account ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
