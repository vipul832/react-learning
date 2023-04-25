import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParam, setSearch] = useSearchParams();
  const showActive = searchParam.get("filter") === "active";
  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      <Outlet />
      <button
        onClick={() => {
          setSearch({ filter: "active" });
        }}
      >
        Active Users
      </button>
      <button
        onClick={() => {
          setSearch({});
        }}
      >
        Reset Filter
      </button>
      {showActive ? <h2>showing active users</h2> : <h2>Showing all user</h2>}
    </div>
  );
};

export default User;
