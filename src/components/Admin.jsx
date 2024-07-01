import React from 'react'
import LoginImg from "../images/Login_Screen.jpg"
import "../components/Admin.css"
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";

const Admin = () => {
  return (
    <div className='main-bg'>
      <div className='hero'>
        <img src={LoginImg} alt='admin'/>

        <div className='login'>
          <div className='login-main'>
            <h1>Login</h1>

            <div className='input-container'>
              <FaUser className='logo-img' /> 
              <input type='text' placeholder='Username' required className='input-placeholder'/>
            </div>
                    
            <div className='input-container'>
              <IoKeySharp className='logo-img'/>
              <input type='password' placeholder='Password' required className='input-placeholder'/>
            </div>

            <p className='f-pass'>Forget Password</p>
                    
            <button className='submit-btn' type='submit'>Login</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Admin
