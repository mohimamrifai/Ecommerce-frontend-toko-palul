
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './common/Header/Header';
import Pages from './pages/Pages';
import Footer from './common/Footer/Footer';
import Data from './components/flashData.js'
import sData from './components/shop/sData';
import Cart from './common/Cart/Cart';
import { useState } from 'react';

function App() {


  const { productItems } = Data;
  const {shopItems} = sData;

  const [cartItem, setCartItem] = useState([]);



  const addToCart = (product) => {
    // cek apakah product yang di tambahkan sudah ada atau belum
    const productExist = cartItem.find((item) => item.id === product.id)


    // jika productnya ada maka hanya menambahkan qty
    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {
      // selain itu berarti produk belum ada dan tambahkan produknya
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }

  }


  const removeCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit.qty === 1 ) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }



  return (
    <Router>
    <Header cartItem={cartItem}/>
      <Routes>
          <Route path='/' element={<Pages addToCart={addToCart} productItems={productItems} shopItems={shopItems}/>}/>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} removeCart={removeCart}/>} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
