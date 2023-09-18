import React from 'react'
import {HiMinusSm} from 'react-icons/hi';
import {HiPlusSm} from 'react-icons/hi';
const CartItem = ({cartItem,total,updateCart,minus}) => {
const { image,title,price,category,quantity } = cartItem;
  
// const Inc = () => {
//     // Update the quantity of the selected item
//     // const updatedCartItem = { ...cartItem, quantity: quantity + 1 };
//     updateCart(updatedCartItem);
//   };
  return (
    <div>
       
        <div className='sm:{flex flex-row} grid grid-cols-4 mt-1 mb-5' >
   
            <div className='col-span-2 flex flex-row mt-5'>
        
                <div>
                    <img src={image} className="w-40 h-40 p-2"  />
                </div>
            <div className='ml-6 mt-4'>
                <div className='font-semibold'>
                    {title}
                </div>
                <div className='text-md mt-2 opacity-80'>
                    INR {price}
                </div>
                <div className='mt-2'>
                    {category} (Category)
                </div>
            </div>
            </div>
            <div className='col-span-1 ml-14 flex justify-start items-center'>
                <div className='flex flew-row border border-black py-2'>
                    <button onClick={()=>minus(cartItem)} className='px-3 hover:bg-black hover:text-white'>
                        <div>
                        <HiMinusSm />
                        </div>
                       
                    </button>
                    <p className='px-8 p-3'>
                        {quantity}
                    </p>
                    <button className='px-3 hover:bg-black hover:text-white' onClick={()=> updateCart(cartItem)}>
                    <div >
                        <HiPlusSm />
                        </div>
                    </button>
                </div>
            </div>
        <div className='col col-span-1 flex justify-start items-center ml-20'>
               INR {price * quantity}
        </div>
            
        </div>
        <hr></hr>
    </div>
  )
}

export default CartItem
