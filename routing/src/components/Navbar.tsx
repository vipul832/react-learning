import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    // </nav>
    // if you want to use show active nav link use "NavLink" property of React-Router-Dom
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}
