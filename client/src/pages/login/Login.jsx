import './login.scss'
import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'

const Login = () => {
    // const { login } = useContext(AuthContext);

    const handleLogin = () => {
      // login();
    };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Sportify</h1>
          <p>
            You are interested in football, basketball, volleyball or even chess? Join us now!
          </p>
          <span>Don't you have an account?</span>
          <Link to ="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login