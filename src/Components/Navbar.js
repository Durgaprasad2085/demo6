import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Main</li>
        </Link>
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/Header/:id">
          <li>Header</li>
        </Link>
        <Link to="/Footer/:id">
          <li>Footer</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
