import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess(" ");
    setError(" ");

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    //password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("please add at least one UpperCase");
      return;
    }
    // else if (!/(?=.*[!@#$&*]) /.test(password)) {
    //   setError("Please add at least one special character");
    //   return;
    // } else if (!/(?=.*[0-9].*[0-9]) /.test(password)) {
    //   setError("Please add at least two numerical number");
    //   return;
    // }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.loggedUser;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("User has been create successfully");
        emailVarified(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
  };
  const handleBlur = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const emailVarified = (loggedUser) => {
    sendEmailVerification(auth.current).then((result) => {
      console.log(result);
      alert("Please varify your email..!!");
    });
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h2>Please Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className="form-label">
            Full name
          </label>
          <input
            onChange={handleEmailChange}
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="textHelp"
            placeholder="Please Enter full name"
            name="text"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmailChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Please Enter a valid Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="d-flex justify-content-between">
            <input
              onBlur={handleBlur}
              // type="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="A Password Please"
              name="password"
              required
            />
            <button onClick={toggleShowPassword}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        <small>
          Already have a account? Please <Link to="/login">Login</Link>
        </small>
      </p>

      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default SignUp;
