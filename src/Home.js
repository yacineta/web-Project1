import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import {BsArrowRightShort} from "react-icons/bs"
import { FiTruck } from "react-icons/fi";
import { BiDollar} from "react-icons/bi";
import { HiOutlineReceiptPercent} from "react-icons/hi2";
import { BsHeadset} from "react-icons/bs";
import Hocpoduct from './Hocproduct';
import {BsEye } from "react-icons/bs";
import {AiOutlineHeart } from "react-icons/ai";
 
import { AiOutlineShoppingCart} from "react-icons/ai"; 




import './Home.css'
function Home() {
    const [HocPoduct,setHocPoduct] =useState(Hocpoduct)
  return (
    <div className='top-banner'>
       <div className='container'>
        <div className='detail'>
            <h2>the Best Note Book Colletion 2023</h2>
             
           <Link to='/product' className='linke'>Shop Now <a><BsArrowRightShort/>
            </a> </Link>
        
            {/* <a><HiArrowLeft/> </a> */}
        </div>
        <div className='imgBox'>
            {/* <img src='https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='sliderimg'></img> */}
        </div>
       

       </div>
       <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='imgBox2'>
                    <img src='https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='mobile'/>

                </div>
                <div className='detai'>
                    <p>63 products</p>

                </div>

            </div>

            <div className='box'>
                <div className='imgBox2'>
                    <img src='https://images.pexels.com/photos/719399/pexels-photo-719399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='mobile'/>

                </div>
                <div className='detai'>
                    <p>53 products</p>

                </div>

            </div>

            <div className='box'>
                <div className='imgBox2'>
                    <img src='https://images.pexels.com/photos/5629220/pexels-photo-5629220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='headphone'/>

                </div>
                <div className='detai'>
                    <p>23 products</p>

                </div>

            </div>

            <div className='box'>
                <div className='imgBox2'>
                    <img src='https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='headphone'/>

                </div>
                <div className='detai'>
                    <p>23 products</p>

                </div>

            </div>
        </div>

       </div>

       <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck/>

                </div>
                <div className='detaill'>
                   <h3>Free Shipping</h3>
                   <p>Oder above $1000</p>
                </div>

            </div>

            <div className='box'>
                <div className='icon'>
                    <BiDollar/>

                </div>
                <div className='detaill'>
                   <h3>Return & Refund</h3>
                   <p>Money Back Gaurenty</p>
                </div>

            </div>


            <div className='box'>
                <div className='icon'>
                    <HiOutlineReceiptPercent/>

                </div>
                <div className='detaill'>
                   <h3>Member Discount</h3>
                   <p>On every Order</p>
                </div>

            </div>

            <div className='box'>
                <div className='icon'>
                    <BsHeadset/>

                </div>
                <div className='detaill'>
                   <h3>Customer Support</h3>
                   <p>Every Time Call Support</p>
                </div>

            </div>

        </div>

       </div>
       <div className='product'>
        <h2>Top Products</h2>
        <div className='container2'>
            {
                HocPoduct.map((curElm) =>{
                    return(
                       
                         <div className='boxe' >
                            <div className='img_box3' key={curElm.id}>
                              
                                <img src={curElm.img } alt={curElm.title}></img>
                        
                                <div className='icon'>
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
           {/* <div className='box'></div> */}

        </div>
       </div>
       <div className='banner0'>
        <div className='container0'>

       
          <div className='detail0'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen -2021</h3>
            <p><BiDollar/>986 </p>
            <Link to='/product' className='link0'>Shop Now <BsArrowRightShort/></Link>

          </div>
            <div className='ImgBox0'>
              <img src='' alt='sliderimg'></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home