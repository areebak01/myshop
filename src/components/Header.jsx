import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = ({ cartcount }) => {
  return (
    <>
      <header style={{ position: "fixed", top: 0, width: "100%", padding: "1em", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
        <nav>
          <Link to="/" style={{ marginRight: "1em", color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link to="cart" style={{ color: "#fff", textDecoration: "none" }}>Cart ({cartcount})</Link>
        </nav>
      </header>
      <div style={{ paddingTop: "4em" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
