import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul style={{ textAlign: 'left'}}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/user/new">Create a user</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
