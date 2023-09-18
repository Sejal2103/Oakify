import React from 'react'
import List from './List';
import {Link} from 'react-router-dom';
const WishList = ({items,removeFromWishlist,updateCart}) => {
  
  return (
    <div>
         <div className='text-center text-3xl mt-4 ml-10'>
            Your Wishlist<hr className='mt-5 border-t-2 border-[#A3B5A9] w-1/4 mx-auto rounded-md'></hr>
        </div>
        {items.length !== 0 ? (
    <div>
       {items?.map((item) => (
           <List key={item.id} item={item} removeFromWishlist={removeFromWishlist}
           updateCart={updateCart} />
       ))}
    
    </div>
  ) : (
      <>
    <p className='text-center text-xl font-semibold mt-5'>Your Wishlist is empty</p>
    <div className='flex items-center justify-center mt-5 mb-5'>
    <button className='w-100 px-4 py-2 rounded-sm text-white bg-[#A3B5A9] hover:text-black hover:bg-white hover:border-black me-3 '><Link to='/product'> Add products</Link></button>
    </div></>
  )}
     
    </div>
  )
}

export default WishList;
