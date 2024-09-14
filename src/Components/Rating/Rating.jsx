import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


const Rating = ({ star }) => {

    const RatingStar = Array.from({ length: 5 }, (elem, index) => {
        let num = index + 0.5;
        return <span key={index} className='text-yellow-500 '>
            {
                star >= index + 1 ? (<FaStar/>) : star >= num ? (<FaRegStarHalfStroke/>) : (<FaRegStar/>)
            }
        </span>
    })
    return (
        <div className='flex my-2 '>
            {RatingStar}  
            <span className='text-sm font-medium'>(review {star})</span>
        </div>
    )
}

export default Rating