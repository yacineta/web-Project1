import React from 'react'
// import  { useState } from 'react'
import { IoIosAirplane } from "react-icons/io"
import {BsSuitHeartFill} from "react-icons/bs"
import {BsFillBagCheckFill} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {GrLogin} from "react-icons/gr"
import {SlLogout} from "react-icons/sl"
import { Link } from 'react-router-dom';
import'./Nav.css'
import { useState } from "react"

function Nav() {
    // {searchbtn}

    //  const [search, setSearch] = useState()
  return (
    <div  >
        <div className='free' >

       
       
            <div className='icon'>
                <IoIosAirplane/>
            </div>
           <p>    
            free Shiping when Shooping
           </p>
        </div>
        <div className='main-header'>
            <div className='container'>
                <div className='log'>
                    <img src=''  alt='' />
                </div>
                <div className='serch-box'>
                   
                    <input type='text' value= ''
                    // {search}
                     placeholder='Search Your product ' autoComplete='off' 
                    //   onChange={(e)=> setSearch(e.target.value)}
                      />
                   
                    <button 
                    // onClick={() =>searchbtn(search)}
                    >Search</button>
                </div>
                <div className='icone'>
                    <div className='account'>
                        <div className='user-icone'>
                            <AiOutlineUser/>
                           
                        </div>
                         <p>Hello,user</p>
                        
                    </div>
                    <div className='secondIcone'>
                        <Link to='/' className='Bs'>
                        <BsSuitHeartFill />
                        </Link>
                            
                         
                        <Link to='/cart' className='Bse'>
                         <BsFillBagCheckFill/>
                        </Link>
                   
                        
                       
                    </div>
                   

                </div>
                 
            </div>
        </div>
        <div className='headerr'>
            <div className='container'>
                <div className='nave'>
                 <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>

                </ul>

                </div>
               
                <div className='auth'>
                    <button>
                       <GrLogin/> 
                    </button>
                <button>
                     <SlLogout/>
                </button>
               

                </div>
            </div>

        </div>
    </div>
  )
}

export default Nav