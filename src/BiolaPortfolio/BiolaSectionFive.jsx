import React from 'react';
import HTML from '../BiolaPortfolio/assets/html.png';
import CSS from '../BiolaPortfolio/assets/css.png';
import Javascript from '../BiolaPortfolio/assets/js.png';
import ReactJs from '../BiolaPortfolio/assets/library.png';
import Python from '../BiolaPortfolio/assets/python.png';
import Tailwind from '../BiolaPortfolio/assets/tailwind.png';
import Bootstrap from '../BiolaPortfolio/assets/bootstrap.png';
import Figma from '../BiolaPortfolio/assets/figma.png';


export default function BiolaSectionFive() {
  return (
    <div className='bg-[#E0C5A3] text-center py-12'>
      <div>
        <p className='text-6xl font-bold py-2 text-[#15455f]'>MY SKILLS</p>
      </div>

      <div className='flex flex-wrap justify-around px-4 md:px-10'>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={HTML} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>HTML</p>
          </div>
        </div>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={CSS} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>CSS</p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-around px-4 md:px-10'>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={Javascript} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>JavaScript</p>
          </div>
        </div>

        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={ReactJs} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>React.js</p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-around px-4 md:px-10'>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={Python} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>Python</p>
          </div>
        </div>

        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={Tailwind} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>Tailwind</p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-around px-4 md:px-10'>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={Bootstrap} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>Bootstrap</p>
          </div>
        </div>
        <div className='bg-[#15455f] px-6 py-6 my-4 mx-2 w-full md:w-48 md:my-10'>
          <div className='flex flex-col items-center'>
            <i className='w-12'><img src={Figma} alt="HTML" /></i>
            <p className='text-[#E0C5A3]'>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

