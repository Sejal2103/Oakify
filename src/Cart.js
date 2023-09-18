import { Link } from 'react-router-dom'; 
import React from 'react';
import CartItem from './CartItem';
const Cart = ({ items,total,updateCart,minus }) => {
  return (
    <div>
       <div className='text-center text-3xl mt-4 ml-10'>
            Your Cart<hr className='mt-5 border-t-2 border-[#A3B5A9] w-1/4 mx-auto rounded-md'></hr>
        </div>
        <div className='ml-10 grid grid-cols-4 mt-8'>
            <div className='col-span-2'>
                Product
            </div>
            <div className='col-span-1 ml-10'>
                Quantity
            </div>
            <div className='col-span-1 ml-[20]'>
                Total
            </div>
        </div>
        <hr className='mt-3 w-8/10'></hr>
    
      <div>
  {items.length !== 0 ? (
    <div>
      {items?.map((item) => (
        <CartItem cartItem={item} updateCart={updateCart} total={total} minus={minus} />
      ))}
      <div>
        <hr />
        <p className='font-semibold text-2xl text-right mt-5 mr-10'>Total = INR {total}</p>
      </div>
    </div>
  ) : (
      <>
    <p className='text-center text-xl font-semibold mt-5'>Your cart is empty</p>
    <div className='flex items-center justify-center mt-5 mb-5'>
    <button className='w-100 px-4 py-2 rounded-sm text-white bg-[#A3B5A9] hover:text-black hover:bg-white hover:border-black me-3 '><Link to='/product'> See products</Link></button>
    </div></>
  )}
</div>

    </div>
  );
};

export default Cart;

