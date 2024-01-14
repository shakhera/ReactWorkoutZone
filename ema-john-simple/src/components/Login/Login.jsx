import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggesUser = result.user;
        console.log(loggesUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
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
            type={show ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter a password"
            required
          />
          <p onClick={() => setShow(!show)}>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />

        <p className="login-account">
          <small>
            New to ema-john? <Link to="/signup">Create New Account</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
