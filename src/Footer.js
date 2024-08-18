import React from 'react'
import './Footer.css'

import {BsFacebook } from "react-icons/bs";
import {AiFillInstagram } from "react-icons/ai";
import {BsTwitter } from "react-icons/bs";
import {BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div>
        <div className='footer'>
            <div className='containerr'>
                <div className='about'>
                    <div className='loge'>
                        <h2>yassine</h2>
                        <img src='' alt='logo'/>
                    </div>
                   <div className='detail00'>
                    <p> we are team of designer and developer that create high quality WordPress</p>
                    <div className='icon00'>
                        <li>
                            <BsFacebook/>
                        </li>
                        <li>
                            <AiFillInstagram/>
                        </li>
                        <li>
                            <BsTwitter/>

                        </li>
                        <li>
                            <BsYoutube/>

                        </li>
                    </div>
                   </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shiping</li>
                        <li>return</li>
                    </ul>

                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terma & Condition</li>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer