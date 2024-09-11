// ProductDetails.js
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import StoreApi from '../APIFETCH/Context';
import { LoadinOne } from '../Loading/LoadinOne';
import { MdFavoriteBorder } from "react-icons/md";
import CardDetails from './CardDetails';

const ProductDetails = () => {
  // Get the dynamic 'id' from the URL
  const { id } = useParams();

  const { product, Loading, Error } = useContext(StoreApi);

  const singleProduct = product.find((item) => item.id === parseInt(id));

  const similarProducts = product.filter(
    (item) => item.category === singleProduct.category && item.id !== singleProduct.id
  );


  if (Loading)
    return <div><LoadinOne /> </div>

  if (Error) {
    return <div>Failed to load product. Please try again later.</div>;
  }

  return (
   <>
      <div className='flex flex-wrap gap-2 pt-[100px] md:mx-20 lg:mx-[100px]' >
  
        <div className='lg:w-[50%] lg:h-[40rem]'>
          <img src={singleProduct.images} alt={singleProduct.thumbnail} className='w-full h-full ' />
        </div>
  
  
        <div className='lg:w-[40%] flex  justify-center flex-col px-6' id='SingleProduct py-8'>
          <h1 className='text-3xl font-bold'>{singleProduct.title}</h1>
          <h4 className='text-xl mt-2 font-medium'>${singleProduct.price}</h4>
          <p className='mt-4 text-[1rem] text-slate-700'>{singleProduct.description}</p>
          <span className='mt-4 text-[1.2rem] font-medium'>Total Reviews: {singleProduct.rating}</span>
          <div className='mt-10 flex flex-wrap gap-4'>
            <button className='w-[15rem] lg:w-[20rem] bg-slate-900 text-white h-[3rem] text-xl'>
              <Link to='/cart'>Add To Cart</Link>
            </button>
            <button className='border-[2px] border-slate-900 size-12 flex items-center justify-center text-xl'>
              <Link to='/cart'>
                <MdFavoriteBorder />
              </Link>
            </button>
  
          </div>
        </div>
      </div>

      <div className='md:mx-20 lg:mx-[100px] mt-[50px]'>
        <h1 className='text-xl font-medium pb-10'>Reccomended For You</h1>

        <div className='flex flex-wrap gap-4'>
          {similarProducts.map((item) => (
            <CardDetails key={item.id} item={item} />
          ))}
        </div>

      </div>
   </>
  );
}

export default ProductDetails;
