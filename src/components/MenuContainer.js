import React from 'react'
import '../styles/MenuContainer.css'
import Grocery from '../assets/grocery.webp'
import Mobiles from '../assets/phone.webp'
import Fashion from '../assets/fashion.webp'
import Electronics from '../assets/electronic.webp'
import Furniture from '../assets/furniture.webp'
import Appliances from '../assets/appliances.webp'
import Travel from '../assets/travel.webp'
import Toys from '../assets/toys.webp'
import TwoWheelers from '../assets/twoWheelers.webp'
export default function MenuContainer() {
  return (
	<div id='menu_container'>
	  <ul>
		<li><img src={Grocery} alt=""/><br/>Grocergy</li>
		<li><img src={Mobiles} alt=""/><br/>Mobiles</li>
		<li><img src={Fashion} alt=""/><br/>Fashion</li>
		<li><img src={Electronics} alt=""/><br/>Electronics</li>
		<li><img src={Furniture} alt=""/><br/>Home & Furniture</li>
		<li><img src={Appliances} alt=""/><br/>Appliances</li>
		<li><img src={Travel} alt=""/><br/>Travel</li>
		<li><img src={Toys} alt=""/><br/>Beauty, Toys & More</li>
		<li><img src={TwoWheelers} alt=""/><br/>Two Wheelers</li>
	  </ul>
	</div>
  )
}
