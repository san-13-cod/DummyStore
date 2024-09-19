import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header>
        <h1>
          Dummy<span>Store</span>
        </h1>
        <nav>
          <ul className={`${menu ? "activeMenu" : ""}`}>
            <li>
              {" "}
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contactUs"}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <i
          className="icon ri-menu-line"
          onClick={() => setMenu((prevValue) => setMenu(!prevValue))}
        ></i>
      </header>
    </>
  );
}

export default Navbar;
