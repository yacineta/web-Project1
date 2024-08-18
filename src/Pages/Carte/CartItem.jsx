import React, {useContext} from 'react'
import Context from '../../Context/Context';


function CartItem(props) {
    const {id,title,Cat, price,img} = props.data;
    const { cartItems , removeFromCart ,addToCart, updateCartItemCount } = useContext(Context);
  return (
    <div className='CartItem'>
        <img src={img} alt={id}/>
       
        <div className='description'>
           <p>{Cat}</p>
            <h3>{title}</h3>
            <h4> ${price}</h4>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) }/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem