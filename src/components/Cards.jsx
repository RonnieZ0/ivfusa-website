import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#d5cbc2]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-3xl bg-[#dce2db] flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>生育力储存</h2>
              <p className='text-center text-4xl font-bold'>$7,000起</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>美国，日本，泰国，中国台湾</p>
                  <p className='py-2 border-b mx-8'>美国医生远程会诊</p>
                  <p className='py-2 border-b mx-8'>境外取卵，最快3天即可回国</p>
              </div>
              <button className='bg-[#42433e] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>了解更多</button>
          </div>
          <div className='w-full shadow-xl bg-[#f1e6c3] flex flex-col p-4 md:my-0 my-8 rounded-3xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>第三方辅助生殖
              <br class="hidden md:block"></br>一站式管家服务</h2>
              <p className='text-center text-4xl font-bold'>$150,000起</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>严选辅助生殖资源</p>
                  <p className='py-2 border-b mx-8'>行业顶级资深律所</p>
                  <p className='py-2 border-b mx-8'>全程陪伴提供支持</p>
              </div>
              <button className='bg-[#42433e] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>了解更多</button>
          </div>
          <div className='w-full shadow-xl bg-[#dce2db] flex flex-col p-4 my-4 rounded-3xl hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>试管婴儿</h2>
              <p className='text-center text-4xl font-bold'>$25,000起</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>第三代试管婴儿技术</p>
                  <p className='py-2 border-b mx-8'>PGT胚胎遗传检测</p>
                  <p className='py-2 border-b mx-8'>优孕选择</p>
              </div>
              <button className='bg-[#42433e] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>了解更多</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
