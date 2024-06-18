import React from 'react';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import babyHands from '../assets/babyHands.jpg';

const Sliders = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 344;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 344;
  };

  return (
    <div className='relative flex flex-col h-screen md:h-full justify-center md:pl-4 bg-diyGray' >
      <h1 className='text-4xl font-bold p-4 m-8'> 了解智特 </h1>
      <div className='relative flex items-center w-full'>
        <div id='slider' className='w-full pl-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold">
              <h1 className='text-l '>非中介盈利模式</h1>
              <p className='text-xl'>完全代表客户利益</p>
              <p className='text-xl'>仅收取客户咨询费，无诊所回扣</p>
            </div>
          </div>

          <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold text-white">
              <h1 className='text-l '>专业医疗顾问团队</h1>
              <p className='text-xl'>医疗顾问管家具有医学，药学，</p>
              <p className='text-xl'>护理学，或生物学背景</p>
            </div>
          </div>
          
          <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold w-full text-white">
              <h1 className='text-l '>拓展专业合作</h1>
              <p className='text-xl'>熟悉掌握各大诊所、医生专长</p>
              <p className='text-xl'>针对客户情况定制专属医疗方案</p>
            </div>
          </div>
          <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold text-white">
              <h1 className='text-l '>携程战略投资</h1>
              <p className='text-xl'>与携程旅游资源战略性结合</p>
              <p className='text-xl'>发力海外辅助生殖旅游市场</p>
            </div>
          </div>
          <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold">
              <h1 className='text-l'>海外服务团队</h1>
              <p className='text-xl'>海外团队多年海外生活背景</p>
              <p className='text-xl'>了解当地风情，提供特色服务</p>
            </div>
          </div>
          <div 
            className="bg-cover relative h-[70vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60'})` }}>
            <div className = "py-8 m-4 font-bold">
              <h1 className='text-l '>全球化布局</h1>
              <p className='text-xl'>日本，墨西哥自建生殖中心筹备中</p>
              <p className='text-xl'>敬请期待...</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex flex-row justify-end pr-10 mb-8'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-3' onClick={slideLeft} size={40} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </div>
  );
};

export default Sliders;
