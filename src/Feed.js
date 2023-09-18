import React from 'react';
import {Link} from 'react-router-dom';
import {BsPlus} from 'react-icons/bs';
import {MdOutlineDoneAll} from 'react-icons/md';
import  {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import Swal from 'sweetalert2';

const Feed = ({ product,updateCart,addToWishlist, removeFromWishlist, isInWishlist }) => {
    const alert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Great!!',
            text: 'Your product is added to the cart',
            timer: 1500,
          });
          
    }
    function handleButtonClick() {
        alert();
        updateCart(product);
      }
    
    const { id,title,price,image } =product;
    const handleHeartClick = (product) => {
        console.log(isInWishlist)
        if (isInWishlist(product)) {
          removeFromWishlist(product);
        } else {
          addToWishlist(product);
        }
      };
  return (
    <div>
        
      <div className='border border-[#e4e4e4] h-[400] mb-3 mx-3 relative overflow-hidden group transition'>
      <Link to={`/products/${id}`}>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[150] mx-auto flex justify-center items-center'>
                <img className='max-h-[160px] w-200 group-hover:scale-110 transition duration-200 p-5' src={image} alt='' />
            </div>
          </div></Link>
          <div className='flex flex-col absolute top-0 right-0 m-2 opacity-0 group-hover:opacity-100'>
              <button  onClick={()=> handleButtonClick()}>
               <div className='flex justify-center items-center w-8 h-8  bg-[#F5F2EF] hover:bg-black hover:text-white'>
                <BsPlus className='text-2xl' />
               </div>
              </button>
            <button onClick={()=>handleHeartClick(product)}>
              <div className='flex justify-center items-center w-8 h-8 bg-black text-white'>
              <AiFillHeart className='text-1xl' />   
              {/* {isInWishlist(product) ? <AiFillHeart className='text-1xl' /> : <AiOutlineHeart className='text-1xl' />} */}
              </div>
            </button>
          </div>
      </div>
      <div>
        <div className='mx-3 mb-8'>
        <Link to={`/products/${id}`}>
            {title}
        </Link>
            <div className='font-semibold text-lg'>INR {price}</div>

        </div>
    </div>
    </div>
  
  );
};

export default Feed;
