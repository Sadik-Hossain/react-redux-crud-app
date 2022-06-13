import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/show-books">Show books</Link>

      <Link to="/add-book">Add books</Link>
    </nav>
  );
};

export default Navbar;
