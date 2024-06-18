import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-2 w-full bg-white/40 my-4 rounded-3xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="m-1">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-custom-green shrink-0 m-1"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-gray-300">
      <div className=" self-center max-w-[1240px] mx-auto p-8 rounded-3xl">
        <Accordion
            title="第一个问题多少岁冻卵"
            answer="第一个问题的答案35岁以前"
        />
        <Accordion
            title="第二个问题取卵手术会不会造成伤害"
            answer="第二个问题的答案不会"
        />
        <Accordion 
            title="第三个问题?" 
            answer="第三个问题的答案" />
      </div>
    </div>
  );
};

export default FAQ;