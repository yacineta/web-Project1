import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'

function Rout(product, setProduct) {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product product={product} setProduct ={setProduct}/>}/>
       </Routes>
    </div>
  )
}

export default Rout