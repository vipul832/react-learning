import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <input type="text" />
      <nav>
        <NavLink to="feature">Feature </NavLink>
        <NavLink to="new">New </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
