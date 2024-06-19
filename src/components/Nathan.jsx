import React from 'react';
import nathan from '../assets/nathan.png'
import babyHand from '../assets/babyHands.jpg'
import qrcode from '../assets/qrcode.jpg'


const Nathan = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-4 md:p-16 bg-custom-green/10">
      <div className="flex flex-col lg:flex-row max-w-[1240px] items-start gap-7 text-black">
        <div className="relative self-center">
          <img className='w-full md:w-[700px] mx-auto rounded-3xl' src={nathan} alt="Founder" />
        </div>
        <div className="flex-grow py-2 mx-2"> 
          <h className="text-2xl font-semibold">张欣博士</h>
          <h1 className="text-l font-semibold mt-2">
            千人计划特聘专家<br/>
            科技部海外创新创业人才专家<br/>
            ASRM美国生殖协会理事<br/>
            医药经济报中国医药行业新领袖人物。<br/>
            中国医疗集团有限公司(HK:08225)独立董事
          </h1>
          <p className="text-base pt-1">
            天津医科大学8年制临床医学博士 <br/>
            宾夕法尼亚大学药理学博士<br/>
            芝加哥大学工商管理硕士<br/>
            拥有多项生物技术专利。其学术论文曾多次发表于Nature<br/>
            历任瑞士信贷第一波士顿，KPMG(毕马威)高级咨询师，DELIRIUM(颠睿科技公司)总经理<br/>
            2001年参与创立深圳微芯生物(SHA:688321)并任总裁，主持两种药物进入 II 期临床研究<br/>
            2004年创立Sinocro Partners公司，操作沈阳三生制药纳斯达克上市(2013年私有化)，成为中国生物医药在美第一股<br/>
            2008年开始关注生殖医疗领域，从事引进生殖医疗器械<br/>
            2010年创立智特生物，任总经理兼首席医疗顾问至今，专注生殖医疗咨询<br/>
          </p>
        </div>
      </div>
      <div className ="bg-white/60 w-full flex flex-col md:flex-row max-w-70 m-12 items-center self-center rounded-3xl">
        <div className ="py-8 px-6 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
          <div className ="mx-auto max-w-screen-sm text-center">
            <h2 className ="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">
              张欣博士生殖医学科普直播
            </h2>
            <p className ="mb-4 font-light text-gray-500 md:text-lg">
              每周日晚9点微信直播，一对一咨询
            </p>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-custom-green rounded-full px-6 text-black" onClick={()=>document.getElementById('my_modal_2').showModal()}>观看渠道</button>
            <dialog id="my_modal_2" className="modal w-full">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">放个大点的二维码</p>
                <img className='mx-auto' src={qrcode} alt='/' />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nathan;
