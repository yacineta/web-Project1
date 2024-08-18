import React, { createContext, useState } from 'react'
import DetailProdu from '../DetailProdu'
 import  ContextProvider  from 'react'
import Carte from '../Pages/Carte/Carte'



// null
export const Context = createContext(null)
 
const getDefaultCart = () =>{
    let cart = {}
    for (let i =1; i < DetailProdu.length + 1; i ++) {
        Carte[i]  = 0;
       
    };
     return cart;
}
//                      function//  =       =>
export function ContextShope (props) {

    //  //     //
//  ContextProvider


    //
    //    
    const [cart, setCart] = useState((getDefaultCart))
    const addCartHandel = (_id) => {
        console.log('add to card')
    }




    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = DetailProdu.find((product) => product.id === Number(item))
                totalAmount += itemInfo ? itemInfo.price * cartItems[item] : 0
                totalAmount += cartItems[item] * itemInfo.price


            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
    }
    console.log(cartItems)
    return <Context.Provider value={contextValue}> {props.children} </Context.Provider>

    //   s
}

export default Context