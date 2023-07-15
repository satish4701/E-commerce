import React from 'react'
import Input from '../../Template/Input'
import {AiOutlineShoppingCart,AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import './NavBar.css'

const Nav = ({handleInputChange}) => {
  return (
    <div className='Navbar_hero'>
      <div className="input_sec">
        {/* <Input type="text" onChange={handleChange}  placeholder="Search Your Shooes" name="name" /> */}
        <input type="text" onChange={handleInputChange}  placeholder="Search Your Shooes" name="name" />
      </div>
      <div className="nav_icon_hero">
        <AiOutlineHeart className='nav_icon'/>
        <AiOutlineShoppingCart className='nav_icon'/>
        <AiOutlineUser className='nav_icon'/>
      </div>
    
    </div>
  )
}

export default Nav
