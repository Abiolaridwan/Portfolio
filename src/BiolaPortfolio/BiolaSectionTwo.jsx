import React from 'react';
import Brand1 from '../BiolaPortfolio/assets/brand-1.png';
import Brand2 from '../BiolaPortfolio/assets/brand-2.png';
import Brand3 from '../BiolaPortfolio/assets/brand-3.png';
import Brand4 from '../BiolaPortfolio/assets/brand-4.png';
import Brand5 from '../BiolaPortfolio/assets/brand-5.png';
import Brand6 from '../BiolaPortfolio/assets/brand-6.png';
import Brand7 from '../BiolaPortfolio/assets/brand-7.png';
import TimingFunction from '../BiolaPortfolio/TimingFunction';

export default function BiolaSectionTwo() {
  return (
    <div>
      <div className=' bg-[#E0C5A3] h-12'>
        <hr />
      </div>
      <div className='bg-[#15455f] p-4'>
        <div className='flex py-12 px-12 justify-around'>
          <a href=""> <img src={Brand1} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand2} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand3} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand4} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand5} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand6} alt='Brand 1' className='w-3/5' /></a>
          <a href=""> <img src={Brand7} alt='Brand 1' className='w-3/5' /></a>
        </div>
      </div>
      <div className='h-12 bg-[#E0C5A3]'>
        <hr />
      </div>
      <div>
      <div>
        <TimingFunction />
      </div>
      </div>
    </div>
  );
}
