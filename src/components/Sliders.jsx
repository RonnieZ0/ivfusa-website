import React from 'react';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import babyHands from '../assets/babyHands.jpg';

const Sliders = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 344;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 344;
  };

  return (
    <div className='relative w-screen flex flex-col p-8 justify-center' >
      <h1 className='text-3xl bold p-4'> 智特医疗核心理念 </h1>
      <div className='relative flex items-center w-full'>
        <div id='slider' className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          
          {data.map((item) => (
            <div 
            className="bg-cover relative h-[60vh] md:h-[656px] md:w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${item.img})` }}>
              <div className = "py-8 m-8 font-bold">
                <h1 className='text-l '>专业医学咨询团队</h1>
                <p className='text-xl'>团队成员具有医学，药学，</p>
                <p className='text-xl'>护理学，或生物学背景</p>
              </div>
            </div>
          ))}

        </div>
        
      </div>
      <div className='flex flex-row justify-end pr-10'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-3' onClick={slideLeft} size={40} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </div>
  );
};

export default Sliders;
