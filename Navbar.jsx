import { React, useState } from 'react'
import './Navbar.css';


//importing images
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const  [menu, setMenu] = useState("shop");

  return (
    <div className='navbar flex'>
      <div className="nav-logo">
        <img src={logo} alt="Main Logo" />
        <p>Fashion.Com</p>
      </div>

      <ul className='nav-menu'>

        <li onClick={()=>{setMenu("shop")}}> <Link  className='list' to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("mens")}}> <Link  className='list' to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("womens")}}> <Link className='list' to='/Womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("kids")}}> <Link className='list' to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>

      </ul>

      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="Cart Logo" /></Link>
        <div className="nav-cart-count">0</div>
      </div>


      
    </div>
  )
}

export default Navbar
