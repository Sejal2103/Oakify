import React from 'react'
import { Link } from 'react-router-dom';
import cart from './Shopping Cart.svg';
import wishlist from './Heart.svg'
const Header = () => {
  return (
    <div className='nav mt-6 bg-white h-195 mb-5'>
        <p className='font-semibold  ml-10 text-3xl'>OAKIFY</p>
    <div>
    <nav>
      <ul >
        <li className='hover:font-semibold'>
          <Link to="/">HOME</Link>
        </li>
        <li className='hover:font-semibold'>
          <Link to="/product">PRODUCTS</Link>
        </li>
        <li className='hover:font-semibold'>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
    </div>
    <div className='icons mr-10'>
      <Link to='/wishlist'>
        <img className='' src={wishlist} alt="wishlist" width={40} /></Link>
        <Link to='/cart'>
        <img  src={cart}  width={40}/>
        </Link>
    </div>
  </div>
  )
}

export default Header;
