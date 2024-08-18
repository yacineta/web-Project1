import React, { useState } from 'react'
import DetailProdu from './DetailProdu'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import './Product.css'

 
// DetailProdu
function Product ( {product, setProduct}  ) {
    //  const[product, setProduct] = useState (DetailProdu)
    const filterproduct = (product) =>
    {
        const update = DetailProdu.filter((x) =>{
             return x.Cat === product;
            
        })
        // console.log('yassine');
        setProduct(update);
    }

    const AllProducts = () =>
    {
        setProduct(DetailProdu)
        // console.log('yassine000');
    }
  return (
    <div className=''>
        
        <div className='products'>
            <h2>#Products</h2>
            <p>Home . products</p>
            <div className='containerY'>
                <div className='filter'>
                    <div className='categori'>
                        <h3>categori</h3>
                        <ul>
                            <li onClick={() => AllProducts()}>All product</li>
                            <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                            <li onClick={() => filterproduct("Smart Watch")}>Smart Watch</li>
                            <li onClick={() => filterproduct("Headphonelit")}>Headphoneli</li>
                            <li onClick={() => filterproduct("Camera")}>Camera</li>
                            <li onClick={() => filterproduct("Gaming")}>Gaming</li>
                            <li onClick={() => filterproduct("Pc")}>Pc</li>
                            
                        </ul>
                    </div>
                    
                </div>
                    <div className='productBox'>
                        <div className='containeryy'>
                            {
                               DetailProdu.map((curElm) =>
                               {
                                return(
                                   
                                    <div className='boxey' >
                                    <div className='img_box30' key={curElm.id}>
                                      
                                        <img src={curElm.img } alt={curElm.title}></img>
                                
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
                                    </div>
                                    <div className='detaile'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.title}</h3>
                                        <h4>{curElm.price}</h4>
                                    </div>
                                 </div>
                                )

                               }) 
                            }
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Product