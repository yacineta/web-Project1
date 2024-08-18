
// // import './App.css';
// import Nav from './Nav';
// import {BrowserRouter} from 'react-router-dom';
// import Rout from './Rout';
// import Footer from './Footer';
// import DetailProdu from './DetailProdu';
// import { useState } from 'react';
// import Product from './Product';

// function App() {
//   const[product, setProduct] = useState (DetailProdu)
//   const searchbtn = (product) =>
//   {
//     // console.log(product);
//    const change = DetailProdu.filter((x) =>{
//     return x.Cat === product
//    })
//    setProduct(change)

//   }
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Nav searchbtn={searchbtn}/>
//       <Rout product={product} setProduct ={setProduct}/>
//       <Footer/>
//       </BrowserRouter>
      
      
      
     
//     </div>
//   );
// }

// export default App;


// 2222222



import React from 'react'
import'./App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componet/Navbar';
import Shop from './Pages/Shop/Shop';
import Carte from './Pages/Carte/Carte';
import Logine from './Pages/Logine/Logine';
import ContextProvider from './Context/Context';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Router>
         <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Carte/>}/>
            <Route path='/Logine' element={<Logine/>}/>
          
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  )
}

export default App
