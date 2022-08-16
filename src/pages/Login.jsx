import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
const Login = () => {
  return (
      <div className='login'>
        <div className="login-wrapper">
            <h1>Đăng nhập hệ thống</h1>
            <input type="text" placeholder='username...' />
            <input type="password" placeholder='password...' />
            <span> Chưa có tài khoản? <Link to="/register">Đăng ký</Link> |  <Link to="/">Trang chủ</Link></span>         
        </div>
      </div>
  )
}

export default Login