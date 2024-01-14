import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const SignIn = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <button onClick={handleLogOut}> Log Out</button>
      ) : (
        <button onClick={handleGoogleSignUp}> Sign Up</button>
      )}
      {user && (
        <div>
          <h2>UserName: {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
