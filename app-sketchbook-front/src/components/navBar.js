import React from "react";
//import { Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

const navBar = () => {
  return (
    <div>
      {/* <ul style={{ textAlign: 'left'}}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/user/new">Create a user</NavLink>
        </li>
      </ul> */}

 
  <Nav className="justify-content-end" activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/users">Users</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/user/new"></Nav.Link>
    </Nav.Item>
  </Nav>
    </div>
  );
};

export default navBar;
