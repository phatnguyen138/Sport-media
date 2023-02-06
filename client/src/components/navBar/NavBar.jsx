import './navBar.scss'
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import {FiMessageCircle} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import logo from '../../assets/img/logo.png'
// import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link className='logo' to="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" width={70}/>
          <span>Sportify</span>
        </Link>
        <div className="search">
          <AiOutlineSearch/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <IoNotificationsOutline size={30}/>
        <FiMessageCircle size={30}/>
        {/* <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div> */}
        <div className="profile">
          <img src="https://w0.peakpx.com/wallpaper/146/111/HD-wallpaper-messi-argentina-barcelona-thumbnail.jpg" alt="" />
          <span>My name</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar