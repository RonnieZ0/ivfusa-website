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
      <ul className={`hidden menu md:menu-horizontal bg-base-200 rounded-box ${scrolled ? 'text-black' : 'text-white'}`}>
        <li >
          <details open>
            <summary  className='text-lg'>生殖医学解决方案</summary>
            <ul className={` ${scrolled ? 'text-black bg-white/80': 'text-white bg-transparent'}`}>
              <li><a>生育力储存</a></li>
              <li><a>试管婴儿</a></li>
              <li>
                <details open>
                  <summary>第三方辅助生殖</summary>
                  <ul>
                    <li><a>item 1</a></li>
                    <li><a>item 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li className='text-lg'><a>合作伙伴</a></li>
        <li>
          <details open>
            <summary className='text-lg'>关于我们</summary>
            <ul className={` ${scrolled ? 'text-black bg-white/80': 'text-white bg-transparent'}`}>
              <li><a>发展历程</a></li>
              <li><a>智特荣誉</a></li>
              <li><a>人才招募</a></li>
            </ul>
          </details>
        </li>
        <li className='text-lg'><a>博客资讯</a></li>
        <li className='text-lg'><a>联系我们</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} color="black" className='bg-gray-100/90 p-1 rounded-full'/> : <AiOutlineMenu size={30} color="black" className='p-1'/>}
      </div>                
      
      <ul className={nav ? 'menu fixed left-0 top-0 w-[70%] h-full justify-start px-4 text-lg bg-gray-100/95 border-r-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={logo} alt='Logo' className='w-full mx-4 mt-1 mb-16' style={{ maxWidth: '120px' }}/> 
          <li>
          <details open>
            <summary  className='text-xl'>生殖医学解决方案</summary>
            <ul>
              <li><a>生育力储存</a></li>
              <li><a>试管婴儿</a></li>
              <li>
                <details open>
                  <summary>第三方辅助生殖</summary>
                  <ul>
                    <li><a>item 1</a></li>
                    <li><a>item 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li className='text-xl border-t-2 mt-3 pt-3'><a>合作伙伴</a></li>
        <li className='border-t-2 mt-3 pt-3'>
          <details open>
            <summary className='text-xl '>关于我们</summary>
            <ul>
              <li><a>发展历程</a></li>
              <li><a>智特荣誉</a></li>
              <li><a>人才招募</a></li>
            </ul>
          </details>
        </li>
        <li className='text-xl border-t-2 mt-3 pt-3'><a>博客资讯</a></li>
        <li className='text-xl border-t-2 mt-3 pt-3'><a>联系我们</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
