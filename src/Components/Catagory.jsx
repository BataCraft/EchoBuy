import React from 'react'


const Category = () => {
  const data = [
    {
      cateImg: "../images/ic1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "../images/ic2.png",
      cateName: "Electronic",
    },
    
    {
      cateImg: "../images/ic8.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "../images/ic5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "../images/ic3.svg",
      cateName: "Music",
    },
    {
      cateImg: "../images/ic4.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "../images/ic9.png",
      cateName: "Pets",
    },
    {
      cateImg: "../images/ic11.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "../images/ic7.png",
      cateName: "Groceries",
    },
    {
      cateImg: "../images/ic10.png",
      cateName: "Books",
    },
  ];

  return (
    <div className='w-[50%] mt-[100px] p-4 hidden lg:block lg:ml-20' >
      <div className=' h-[550px] px-10 py-10 ' id='category'>
        <h1 className='text-xl'>Category</h1>
        <div className='gap-2 mt-2 flex flex-col cursor-pointer '>
          {data.map((item, index) => (  // Corrected parameter order
            <div className='flex gap-2 hover:bg-[#dadada] ' key={index}>
              <img src={item.cateImg} alt={item.cateName} className='size-[30px] object-contain' />
              <span>{item.cateName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
