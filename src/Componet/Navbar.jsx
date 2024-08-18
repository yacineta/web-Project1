import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {TiShoppingCart} from 'react-icons/ti'

function Navbar() {
  return (
    <div className='Navbar'>
        
        <div className='links'>
         <Link to="/">Shope </Link>
         <Link to="/cart">
            <TiShoppingCart size={32}/>
         </Link>
         <Link to='/Logine'>Logine</Link>

        </div>
    </div>
  )
}

export default Navbar