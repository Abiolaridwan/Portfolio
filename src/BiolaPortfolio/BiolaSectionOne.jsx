import React from 'react';
import BiolaHeader from './BiolaHeader';

const BiolaSectionOne = () => {
  return (
    <div className='bg-black h-auto'>
      <div className='mx-6'>
        <BiolaHeader />
      </div>
      <div className='text-[#15455f] text-center text-8xl font-bold my-20'>
        HI, MY NAME IS BIOLA
      </div>
      <div className='text-[#15455f] text-center text-3xl font-bold my-5'>
        I'm a Developer
      </div>
      <div className='text-[#15455f] text-center text-4xl my-5'>
        Based in Lagos, Nigeria.
      </div>
      <div className='text-center'>
        <button className='text-[#E0C5A3] text-2xl font-bold my-20 bg-[#15455f] p-8 rounded-full'>
          LET'S START
        </button>
      </div>
    </div>
  );
};

export default BiolaSectionOne;
