import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({ item }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white hover:duration-1000 hover:bg-[#dadada]">
      {/* Pass item.id dynamically in the Link */}
      <Link to={`/productdetail/${item.id}`}>
        <img src={item.thumbnail} alt="" />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/productdetail/${item.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
            {item.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Ratings and other details */}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-black">${item.price}</span>
          <Link
            to="/cart"
            className="text-white bg-slate-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
