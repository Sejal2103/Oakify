import React, { useState } from 'react';
import Feed from './Feed';
import Data from './Data';

const Products = ({updateCart,addToWishlist, removeFromWishlist,isInWishlist}) => {
const [data, setData] = useState(Data);

  const handleFilter = (cat) => {
    if (cat === "All") {
      setData(Data); 
    } else {
      const updatedData = Data.filter((product) => product.category === cat);
      setData(updatedData);
    }
  }

  const show = () => (
    <div className='flex justify-center items-center mt-5'>
      <button onClick={() => handleFilter("All")} className='w-100 border border-black px-4 py-2 rounded-sm text-black hover:bg-[#A3B5A9] hover:text-white hover:border-white me-3'>All</button>
      <button onClick={() => handleFilter("furniture")} className='w-100 border border-black px-4 py-2 rounded-sm text-black hover:bg-[#A3B5A9] hover:text-white hover:border-white me-3'>Furniture</button>
      <button onClick={() => handleFilter("decor")} className='w-100 border border-black px-4 py-2 rounded-sm text-black hover:bg-[#A3B5A9] hover:text-white hover:border-white me-3'>Decor</button>
      <button onClick={() => handleFilter("cts")} className='w-100 border border-black px-4 py-2 rounded-sm text-black hover:bg-[#A3B5A9] hover:text-white hover:border-white'>Chair, Sofas & more</button>
    </div>
  );
  
  return (
    <div>
      <div className='mt-8'>
        <p className='text-center text-3xl'>OUR PRODUCTS</p><hr className='mt-5 border-t-2 border-[#A3B5A9] w-1/2 mx-auto rounded-md'></hr>
        {show()}
      </div>
      <section className='mt-8 ml-10'>
        <div className='main-container'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15]'>
            {data.map((product) => (
              <Feed product={product} updateCart={updateCart} addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
              isInWishlist={isInWishlist}
             key={product.id}/>
            ))} 
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Products;
