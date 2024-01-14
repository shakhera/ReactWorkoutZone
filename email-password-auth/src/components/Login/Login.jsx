import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSignUp = (event) => {
    console.log(event.target);
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <h2>Please Login</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Please Enter a valid Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="A Password Please"
            name="password"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        <small>
          New to Our Website? Please <Link to="/signup">SignUp</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
