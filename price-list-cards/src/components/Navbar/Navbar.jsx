import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Contact", path: "/contact" },
    // { id: 6, name: "Login", path: "/login" },
  ];
  return (
    <div className="bg-purple-200">
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <span>
          {isOpen === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex absolute md:static duration-500 bg-purple-200 pl-8 py-2  ${
          isOpen ? "top-6" : "-top-48"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
