import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirm.value;
    console.log(email, password, confirmPass);
    form.reset();

    setError("");
    if (password !== confirmPass) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter a valid email"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm's Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="SignUp" />

          <p className="login-account">
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
        </form>
        <p className="text-error">{error}</p>
      </div>
    </div>
  );
};

export default SignUp;
