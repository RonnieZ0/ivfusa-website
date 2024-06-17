import React from 'react';
import babyHands from '../assets/babyHands.jpg';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${babyHands})` }} className="bg-cover bg-center relative h-screen">
      <div className='absolute bottom-10 right-10 p-4 text-center flex flex-col justify-center'>
        <h1 className='text-6xl font-bold py-4'>
          让奇迹生辉
        </h1>
        <p className='text-xl sm:text-2xl md:text-4xl font-bold py-4'>
          —— 您的私人助孕管家
        </p>
        <p className='text-xl md:text-2xl font-bold'>
          坐拥全球顶尖生殖医生、律师、第三方生殖管理机构资源,
          <br className="hidden md:block" />
          20年专业经验，服务2000+财富家庭，
          <br className="hidden md:block" />
          管家式服务为您提供尊享体验。
        </p>
      </div>
    </div>
  );
};

export default Hero;


