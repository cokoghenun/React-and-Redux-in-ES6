import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/courses" activeStyle={activeStyle} exact>
        Courses
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/about" activeStyle={activeStyle} exact>
        About
      </NavLink>
    </nav>
  );
};
export default Header;
