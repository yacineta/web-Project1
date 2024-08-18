import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import './Shop.css'
import Context from '../../Context/Context';
import { useContext } from 'react';

function Producte(props) {
    const {id,title,Cat, price,img} = props.data;
    // const context=React.useContext(Context);
    const {addToCart, cartItems} = useContext(Context);

    const cartItemAmount = cartItems ([id]);

  return (
    <div className=''>
   
    <div className='product'>
        <div className='box'>

        
            <img src={img} alt=''/>
                <div className='icony'>
                    <li>
                    <AiOutlineShoppingCart/>
                    </li>
                    <li>
                    <BsEye/>
                    </li>
                    <li>
                    <AiOutlineHeart/>
                     </li>
                </div>


                 <div className='detaile'>
            <p>{Cat}</p>
            <h3>{title}</h3>
            <h4>{price}</h4>
            {/* <button className='addToCart' onClick={() => addToCart(id)}>
              Shoop {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button> */}
                                   
        </div>
         <button className='addToCart' onClick={() => addToCart(id)}>
              Shoop {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>

      </div>
       
    </div> 
    </div>
  )
}

export default Producte