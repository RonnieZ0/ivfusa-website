import React, { useState } from 'react';
import { data } from '../mockData/blogData.js';

const Blog = () => {
  //   console.log(data);
  const [blogs, setBlogs] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setBlogs(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setBlogs(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='font-bold text-4xl text-center'>
        最新博客
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between md:px-16'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>一种筛选条件</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setBlogs(data)}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>另一种筛选条件</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-custom-green text-custom-green hover:bg-custom-green hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display blogs */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 md:px-16'>
        {blogs.map((item, index) => (
          <div
            key={index}
            className='card shadow-lg rounded-xl hover:scale-105 duration-300'
          >
             <figure>
                <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                />
             </figure>
            
            <div className='card-body'>
              <h2 className='card-title'>
                {item.name}
                <div className="badge bg-custom-green/80 text-white p-1 rounded-full">{item.price}</div>
              </h2>
              <p>
                文章的简介: 
                <span className=' p-1 rounded-full'>
                  {item.category}
                </span>
                
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;