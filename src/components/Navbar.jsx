import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <Link to="/">Trang chủ</Link>
        <Link to="/login">Đăng Nhập</Link>
    </div>
  )
}

export default Navbar