import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <img src="/images/Logo.png" alt="Logo.png" />
      <nav>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Event Calendar
        </Link>
        <Link
          to="/workshop"
          className={location.pathname === "/workshop" ? "active" : ""}
        >
          Workshops
        </Link>
        <Link
          to="/join"
          className={location.pathname === "/join" ? "active" : ""}
        >
          Join IF/FW
        </Link>
      </nav>
    </div>
  );
};

export default Header;
