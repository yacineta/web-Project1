import React from 'react'
import './Shop.css'
import DetailProdu from '../../DetailProdu'
import Producte from './Producte'
// import {AiOutlineShoppingCart} from 'react-icons/ai'
// import {BsEye} from 'react-icons/bs'
// import {AiOutlineHeart} from 'react-icons/ai'
// import Product from '../../Product'

function Shop() {
  return (
    <div className='Shop'>
        <div className='title'>
            <h1>YassineTech Shop</h1>
        </div>
        <div className='products'>
        
             {DetailProdu.map((product) => ( 
             <Producte data={product}/>
             ))}           

        </div>
    </div>
  )
}

export default Shop