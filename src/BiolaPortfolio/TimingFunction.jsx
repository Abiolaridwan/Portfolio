import React from 'react';
import TimingFunctionCSS from '../BiolaPortfolio/TimingFunction.css';

const TimingFunction = () => {
  const timingDivs = [
    { text: 'Python Programming', timingFunction: 'ease-out', delay: 5, width: '35' },
    { text: 'Front-end Development', timingFunction: 'ease-out', delay: 10, width: '87' },
    { text: 'React JS', timingFunction: 'ease-out', delay: 1, width: '65' },
    { text: 'Back-end Development', timingFunction: 'ease-out', delay: 20, width: '43' },
    { text: 'User Interface', timingFunction: 'ease-out', delay: 5, width: '78' },
  ];

  return (
    <div className='bg-[#15455f] px-4 py-6'>
      <div className='text-center'>
        <h1 className="text-center text-6xl m-6 pb-6 text-[#E0C5A3]">SKILLS IMPROVEMENT IN THE LAST 18 MONTHS</h1>
      </div>

      <div className='p-6'>
        {timingDivs.map((div, index) => (
          <div
            key={index}
            className={`w-${div.width}/12 h-14 p-2 pl bg-[#E0C5A3] text-[#15455f] rounded-full font-bold relative mb-10 animate-mymove delay-${div.delay}s`}
            style={{ animationTimingFunction: div.timingFunction }}
          >
            {div.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimingFunction;

