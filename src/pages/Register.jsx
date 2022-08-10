import React from 'react'
import {Link} from "react-router-dom"
const Register = () => {
  return (
    <div className='login'>
    <div className="login-wrapper">
        <h1>Đăng ký thành viên</h1>
        <input type="text" placeholder='username...' />
        <input type="password" placeholder='password...' />
        <input type="password" placeholder='confirm password...' />
        <span> Đã có tài khoản? <Link to="/login">Đăng nhập</Link> |  <Link to="/">Trang chủ</Link></span>
       
    </div>
</div>
  )
}

export default Register