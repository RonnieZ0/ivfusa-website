import React from 'react';
import {Parallax} from 'react-parallax';
import babyHands from '../assets/babyHands.jpg';

const Hero = () => {
  return (
    <div className='w-full relative'>
      <div className='h-screen w-full relative'>
        <img src={babyHands} alt='Baby hands' className='w-full h-screen object-cover'/>
      </div>
      <div className='absolute bottom-10 right-10 p-4 text-center flex flex-col justify-center'>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-'>
        让奇迹生辉
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-2xl sm:text-4xl text-xl font-bold py-4'>
          —— 您的私人助孕管家
          </p>
        </div>
          <p className='md:text-1xl text-xl font-bold'>
            坐拥全球顶尖生殖医生、律师、第三方生殖管理机构资源,<br class="hidden md:block"></br>
            20年专业经验，服务2000+财富家庭，<br class="hidden md:block"></br>
            管家式服务为您提供尊享体验。
          </p>
      </div>

    </div>
  );
};

export default Hero;
