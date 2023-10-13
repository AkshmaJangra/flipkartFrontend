import React, { useEffect } from "react";
import logo from '../assets/flipkartlogo.png'
import shop from '../assets/shop.png'
import Avtar from '../assets/signIn.png'
import cart from '../assets/cart.png'
import menu from '../assets/menu.png'
import { Link } from "react-router-dom";
import $ from 'jquery'

import "../styles/Navbar.css";

export default function Navbar() {
  useEffect(() => {
    $(".hover-link").hover(
		
      function() {
        
        $(".card").show();
      },
	
      function() {
      
        $(".card").hide();
      }

    );
  }, []); 

  return (
    <nav id="navbar">
      <ul className="listItems">
        <li><img src={logo} alt="Logo" style={{ width: '9rem' }} /></li>
        <li><input className="form-control" type="search" placeholder="Search for Products, Brands and More" aria-label="Search" /></li>
        <li><img src={shop} alt="shop" /><Link to='/BecomeASeller'>Become a Seller</Link></li>

        <li className="hover-link "><Link to='/SignIn'><img src={Avtar} alt="sign" />SignIn</Link></li>
        <li><Link to='/Cart'><img src={cart} alt="cart" />Cart</Link></li>
        <li><Link to='/Menu'><img src={menu} alt="menu" /></Link></li>
      </ul>
      <div className="card ">
        <p style={{listStyle:'none'}} >New customer?  <Link to='/SignIn' >SignIn</Link></p>
        <ul>
          <li>My Profile</li>
          <li>Flipkart Plus Zone</li>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Rewards</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </nav>
  );
}
