import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ActiveLink from "../../ActiveLink/ActiveLink";
import LeftSideSpot from "../LeftSideSpot/LeftSideSpot";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://the-news-dragon-server-g3jgqqb6c-shakheras-projects.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h2>All Caterogy</h2>
        <div className="ps-4 ">
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                to={`/cetagories/${category.id}`}
                className="text-decoration-none text-secondary-emphasis"
              >
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div>
        <LeftSideSpot></LeftSideSpot>
      </div>
    </div>
  );
};

export default LeftSideNav;
