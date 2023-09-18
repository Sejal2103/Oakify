
import { BrowserRouter as Router, Route,Routes, useHistory } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import { useState, useEffect} from 'react';
import Data from './Data';
import ProductPage from './ProductPage';
import Cart from './Cart';
import WishList from './WishList';

function App() {

  const [cartItems,setCartItems]=useState([]);
  const [total,setTotal]=useState(0);
  const [wishlist,setWishlist]=useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };
  
  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };
  
  // const isInWishlist = (product) => {
  //   return wishlist.some((item) => item.id === product.id);
  // };
  const isInWishlist = (product) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id === product.id) {
        return true; // The product is in the wishlist
      }
    }
    return false; // The product is not in the wishlist
  };
  
  // const updateCart = (item) => {
  //   const amount = Number(item.price);
  //   const existingCartItem = cartItems.find((product) => product.id === item.id);
   
  //   if (existingCartItem) {
  //     const updatedCartItems= cartItems.map((product) => product.id===item.id? {...product,quantity: product.quantity + 1}: item);
  //     setCartItems(updatedCartItems);
      
  //   } else {
  //     setCartItems([...cartItems, { ...item }]);
  //   }
  //   setTotal(cartItems.reduce((total, item) => total + amount * item.quantity, 0));
  // };
  const updateCart = (item) => {
    const amount = Number(item.price);
    const existingCartItemIndex = cartItems.findIndex((product) => product.id === item.id);
  
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  
    // Calculate the total using updatedCartItems
    const newTotal = cartItems.reduce((total, cartItem) => {
      return total + Number(cartItem.price) * cartItem.quantity;
    }, 0);
  
    setTotal(newTotal);
  };
  

  const minus = (item)=>{
    if(item.quantity>0)
     { const naya= cartItems.map((product) => product.id===item.id? {...product,quantity: product.quantity - 1,total:total-product.price}: item)
      setCartItems(naya);}
  }
  
  return (
    <div className="App h-80vh">
     
  <Router>
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path='/product' element={<Products data={Data} updateCart={updateCart} addToWishlist={addToWishlist}
        // isInWishlist={isInWishlist}
              removeFromWishlist={removeFromWishlist}
              isInWishlist={isInWishlist}
              />} />
        <Route path='/products/:id' element={<ProductPage data={Data} updateCart={updateCart}/>} />
        <Route path='/cart' element={<Cart items={cartItems} total={total} updateCart={updateCart} minus={minus}/>} />
        <Route path='/wishlist' element={<WishList items={wishlist} removeFromWishlist={removeFromWishlist}
        updateCart={updateCart}/>} />
      </Routes>
  </Router>
      
    </div>
  );
}

export default App;
