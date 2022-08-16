import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"> logo </div>
        <div className="navbar-links">
          <Link to="/">Trang chủ</Link>
          <Link to="/login">Đăng Nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
