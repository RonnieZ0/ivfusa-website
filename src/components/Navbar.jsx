import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {  // adjust this value based on when to change the bg color
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed flex justify-between items-center h-16 w-screen px-4 top-0 z-10 
    ${nav ? 'bg-transparent' : (scrolled ? 'bg-[#f1e6c3]/90' : 'bg-transparent')}`}>
      <img src={logo} alt='Logo' className='w-full m-4' style={{ maxWidth: '120px' }}/> 
      <ul className={`hidden md:flex ${scrolled ? 'text-black' : 'text-white'}`}>
        <li className='p-4'>生殖医学解决方案</li>
        <li className='p-4'>合作伙伴</li>
        <li className='p-4'>关于我们</li>
        <li className='p-4'>智特荣誉</li>
        <li className='p-4'>博客</li>
        <li className='p-4'><AiOutlinePhone size={22}/></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} color="black"/> : <AiOutlineMenu size={20} color="black"/>}
      </div>                
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full justify-center px-4 bg-gray-100/90 border-r-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <img src={logo} alt='Logo' className='w-full m-4 py-1' style={{ maxWidth: '120px' }}/> 
          <li className='p-4 border-b border-gray-600'>生殖医学解决方案</li>
          <li className='p-4 border-b border-gray-600'>合作伙伴</li>
          <li className='p-4 border-b border-gray-600'>关于我们</li>
          <li className='p-4 border-b border-gray-600'>智特荣誉</li>
          <li className='p-4 border-b border-gray-600'>博客</li>
          <li className='p-4'>联系我们</li>
      </ul>
    </div>
  );
};

export default Navbar;
