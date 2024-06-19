import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            了解更多生殖辅助相关内容?
          </h1>
          <p>填写您的邮箱加入我们的通讯名单，随时了解最新内容</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='填写邮箱'
            />
            <button className='bg-[#73ba00] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              加入
            </button>
          </div>
          <p>
            我们注重您的隐私，了解我们的{' '}
            <span className='text-[#73ba00]'>隐私政策。</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
