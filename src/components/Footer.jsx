import React from 'react';
import { FaTiktok, } from 'react-icons/fa';
import { AiFillWeiboSquare, AiFillWechat, AiOutlineQq, } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full mx-auto md:p-16 p-4 grid lg:grid-cols-2 gap-8 bg-diyYellow'>
      <div className='w-full'>
        <h1 className='w-full text-3xl font-bold text-[#73ba00]'>IVF USA</h1>
        <p className='py-4'>
          Copyright©1999-2024, sinamd.com All rights reserved. <br/>
          ICP备案号：1234567890<br/>
          上海智特生物科技有限公司 版权所有 电话：400-648-3872</p>
        <div className='flex justify-between md:w-[75%] w-full py-6'>
            <FaTiktok size={30} />
            <AiOutlineQq  size={30} />
            <AiFillWechat size={30} />
            <AiFillWeiboSquare size={30} />
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-custom-green mb-2'>解决方案</h6>
            <ul>
                <li className='py-2 text-sm'>冻卵冻精</li>
                <li className='py-2 text-sm'>试管婴儿</li>
                <li className='py-2 text-sm'>辅助生殖</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-custom-green mb-2'>关于智特</h6>
            <ul>
                <li className='py-2 text-sm'>公司历程</li>
                <li className='py-2 text-sm'>博客咨询</li>
                <li className='py-2 text-sm'>加入我们</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-custom-green mb-2'>法律隐私</h6>
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
