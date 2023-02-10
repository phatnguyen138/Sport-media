import './home.scss'
import React, {useEffect, useState, useContext} from "react";
import {Link} from 'react-router-dom'
import Story from '../../components/story/Story';
import Posts from '../../components/posts/Posts';

const Home = () => {
  // const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // login();
  };
  return (
    <div className="home">
      <Story/>
      <Posts/>
    </div>
  )
}

export default Home