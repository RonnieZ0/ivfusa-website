import React from 'react';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import babyHands from '../assets/babyHands.jpg';

const Doctors = () => {
    const data = [
        {
          id: 1,
          drName: 'Dr. Abcde',
          drIntro: '一二三四五六七八九十',
          img: 'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 2,
          drName: 'Dr. Abcde',
          drIntro: 'abcde shjad aiuhdeh cbueiajeak',
          img: 'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 3,
          drName: 'Dr. Abcde',
          drIntro: 'abcde shjad aiuhdeh cbueiajeak',
          img: 'https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 4,
          drName: 'Dr. Abcde',
          drIntro: 'abcde shjad aiuhdeh cbueiajeak',
          img: 'https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 5,
          drName: 'Dr. Abcde',
          drIntro: 'abcde shjad aiuhdeh cbueiajeak',
          img: 'https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 6,
          drName: 'Dr. Abcde',
          drIntro: 'abcde shjad aiuhdeh cbueiajeak',
          img: 'https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
      ];

  const drSlideLeft = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft - 344;
  };

  const drSlideRight = () => {
    var doctor = document.getElementById('doctor');
    doctor.scrollLeft = doctor.scrollLeft + 344;
  };

  return (
    <div className='relative flex flex-col md:pl-4 justify-center w-full' >
      <div className='relative flex items-center w-full'>
        <div id='doctor' className='w-full pl-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          
            {data.map((item) => (
            <div 
            className="bg-cover relative h-[344px] w-[344px] m-4 inline-block hover:scale-105 ease-in-out duration-300 rounded-3xl"
            style={{ backgroundImage: `url(${item.img})` }}
            alt = '/'>
            <div className = "p-8 font-bold ">
              <h1 className='text-l '>{item.drName}</h1>
              <p className='text-xl max-w-[344px]'>{item.drIntro}</p>
            </div>
            </div>
            ))}

        </div>
        
      </div>
      <div className='flex flex-row justify-end pr-10 mb-8'>
        <AiOutlineLeftCircle className='opacity-50 cursor-pointer hover:opacity-100 mx-3' onClick={drSlideLeft} size={40} />
        <AiOutlineRightCircle className='opacity-50 cursor-pointer hover:opacity-100' onClick={drSlideRight} size={40} />
      </div>
    </div>
  );
};

export default Doctors;







