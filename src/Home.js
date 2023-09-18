import React from 'react'
import bg from './homeBg.png';
import furniture from './photos/furniture.png';
import outdoor from './photos/homeDecor.png';
import chair from './photos/chair.png';
import search from './Search.svg';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
  <div>
    <div className="bg-cover m-10 mt-4 bg-center h-screen flex  flex-col items-center justify-center" style={{ backgroundImage: `url(${bg})`}}>
        <p className='text-6xl '>BUY YOUR DREAM</p>
        <p className='text-2xl mt-5'>
        Furniture.Decor.Interiors and much more 
        </p>
  
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img  src={search} alt="cart" width={30} />
    </div>
    </div>
    <div>
      <p className='text-center text-3xl'>OUR COLLECTION</p>
      <div className='h-850 mt-8 ml-10 grid-container p-4 mr-10'>
      
  <div class="grid-item relative">
    <img src={furniture} alt="Image 1" />
    <div class="absolute inset-0 flex  justify-center text-black text-2xl font-light py-10 ">
      Furniture
    </div>
  </div>
  <div class="grid-item relative">
    <img src={outdoor} alt="Image 2" className="col-2" />
    <div class="absolute inset-0 flex justify-center text-black text-2xl font-light py-10">
      Outdoor & Indoor decor
    </div>
  </div>
  <div class="grid-item relative">
    <img src={chair} alt="Image 3" />
    <div class="absolute inset-0 flex justify-center text-black text-2xl font-light py-10">
      Chair, Table, Sofas & more
        </div>
      </div>
    </div>
  </div>
  <div className='flex items-center justify-center mt-5 mb-5'>
  <button className='w-100 px-4 py-2 rounded-sm text-white bg-[#A3B5A9] hover:text-black hover:bg-white hover:border-black me-3 '><Link to='/product'> View all products</Link></button>
  </div>
    </div>
  )
}

export default Home;
