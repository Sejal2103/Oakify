import React from 'react'
import { useParams } from 'react-router-dom';

const ProductPage = ({ data,updateCart }) => {
    const {id} = useParams();
    const prod= data.find(prod=> (prod.id).toString() === id); 
    const {title,image,description,price}=prod;
  return (
    <div>
     <div className='main'>
        <div className='flex flex-col sm:flex-row w-full h-full'>
            <div className=' ml-8 '>
                <img className="h-[200] w-[200] p-5 border border-[#e4e4e4]" src={image} alt="ntg
                " />
            </div>
            <div className='ml-10 mt-5 mr-15'>
                <div className='font-bold text-4xl'>
                    {title}
                </div>
                <div className='mt-5 text-2xl'>
                   <span style={{textDecoration:'line-through'}}>INR 4500</span>&nbsp;&nbsp;INR {price} <span className='text-sm'>(Applicable only for today)</span>
                </div>
                <div className='mt-3 text-md light-grey'>
                   Tax included. No shipping charges are applied.
                </div>
                <div className='mt-5 text-xl'>
                   {description}
                </div>
                <div className='mt-8'>
                    <button className='border border-black p-4 rounded-sm' onClick={()=> updateCart(prod)}>
                        Add to Cart
                    </button>
                    <button className='border border-black p-4 bg-black text-white w-32 ml-5 rounded-sm'>
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductPage
