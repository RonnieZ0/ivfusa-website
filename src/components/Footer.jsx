import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 bg-diyYellow'>
      <div className='w-full'>
        <h1 className='w-full text-3xl font-bold text-[#73ba00]'>IVF USA</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] w-full py-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>解决方案</h6>
            <ul>
                <li className='py-2 text-sm'>冻卵冻精</li>
                <li className='py-2 text-sm'>试管婴儿</li>
                <li className='py-2 text-sm'>辅助生殖</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>关于智特</h6>
            <ul>
                <li className='py-2 text-sm'>公司历程</li>
                <li className='py-2 text-sm'>博客咨询</li>
                <li className='py-2 text-sm'>加入我们</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>法律隐私</h6>
            <ul>
                <li className='py-2 text-sm'>法律声明</li>
                <li className='py-2 text-sm'>隐私政策</li>
                <li className='py-2 text-sm'>条款</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
