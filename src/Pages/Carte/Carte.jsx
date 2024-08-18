import React from 'react'
import {useContext} from 'react'
import Context from '../../Context/Context'
import Producte from '../Shop/Producte'
import DetailProdu from '../../DetailProdu'
import CartItem from './CartItem';
import './Cart.css'


import { useNavigate } from 'react-router-dom';

function Carte() {
   const { cartItems, getTotalCartAmount} = useContext(Context);
   const totalAmount = getTotalCartAmount()
   const navigate = useNavigate()
  return (
    <div className='Cart'>
      
      <div>
        <h1>Binvenu sure la Cart</h1>
      </div>
      <div className='cartItems'>
        { DetailProdu.map((product) => {
          if(cartItems[product.id] !== 0) {
            return ( 
            <CartItem data={product} /> 
            );
          }

        })}

      </div>
      
     {totalAmount > 0 ?(  
      <div className='checkout'>
        <p>Subtotal: $ {totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>

      </div>
      
       ) : (
        <h1>Your Cart is Empty</h1>
       )}
        

    </div>
  );
};

export default Carte