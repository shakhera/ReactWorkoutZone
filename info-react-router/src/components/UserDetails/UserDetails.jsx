import React from "react";
import "./UserDetails.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetail = useLoaderData();
  console.log(userDetail);
  const { name, phone, address, company } = userDetail;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Here, you can see the user details. </h2>
      <div>
        <div className="userDetails-info">
          <h4>Name: {name}</h4>
          <p>Phone: {phone}</p>
          <p>
            Address: <br></br>
            <ul>
              <li>City: {address.city}</li>
              <li>Street: {address.street}</li>
              <li>Suite: {address.suite}</li>
            </ul>
          </p>
          <p>
            Company: <br></br>
            <ul>
              <li>Name: {company.name}</li>
              <li>BS: {company.bs}</li>
              <li>CatchPhrase: {company.catchPhrase}</li>
            </ul>
          </p>
        </div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
