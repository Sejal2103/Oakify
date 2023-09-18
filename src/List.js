import React from 'react'

const List = ({item,removeFromWishlist,updateCart}) => {
    const {image,price,title,category} =item;
  return (
    <div>
        <div className='grid grid-cols-4 '>
          <div className='col-span-3 flex flex-row mt-5'>
        
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
            <div className='mt-8 col-span-1 -mr-6'>
                    <button onClick={()=> removeFromWishlist(item)} className='border border-black p-4 rounded-sm'>
                        Remove
                    </button>
                    <button onClick={()=>updateCart(item)} className='border border-black p-4 bg-black text-white w-32 ml-5 rounded-sm'>
                        Move to cart
                    </button>
                </div>
    
        
    </div>
    </div>
  )
}

export default List
