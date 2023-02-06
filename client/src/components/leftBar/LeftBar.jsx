import './leftBar.scss';
import {AiOutlineHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {BiFootball, BiHelpCircle} from 'react-icons/bi';
import {IoAmericanFootballSharp, IoBasketballSharp} from 'react-icons/io5';
import {GiTennisBall} from 'react-icons/gi'

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
        <Link className="profile" to = "/">
          <img src="https://w0.peakpx.com/wallpaper/146/111/HD-wallpaper-messi-argentina-barcelona-thumbnail.jpg" alt="" width={40}/>
          <span>My name</span>
        </Link>
        <Link className="item" to = "/">
          <AiOutlineHome size={30}/>
          <span>Home</span>
        </Link>
        
        </div>
        <div className="menu">
          <span className='title'>Sports</span>
          <Link className='item' to='/'>
          <BiFootball size={30}/>
          <span>Football</span>
          </Link>
          <Link className='item' to='/'>
            <IoAmericanFootballSharp size={30}/>
            <span>Cricket</span>
          </Link>
          <Link className='item' to='/'>
            <IoBasketballSharp size={30}/>
            <span>Basketball</span>
          </Link>
          <Link className='item' to='/'>
            <GiTennisBall size={30}/>
            <span>Tennis</span>
          </Link>

        </div>
        <div className="menu">
          <span className='title'>Others</span>
          <Link className='item' to='/'>
            <BiHelpCircle size={30}/>
            <span>Help</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftBar