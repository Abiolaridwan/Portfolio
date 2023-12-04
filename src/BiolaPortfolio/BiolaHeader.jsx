import React, { useState } from 'react';
import BiolaLogo from './BiolaLogo';
// import Sidebar from '../BiolaPortfolio/Sidebar';
import '../index.css';
import Menu from '../BiolaPortfolio/assets/menu.png';

const BiolaHeader = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='items-center p-4 md:p-6 lg:p-8 bg-[#E0C5A3]'>
     
      
    <div className='hidden lg:block'>
      {/* Header for desktop view */}
      
        {/* Navbar */}
        <nav className="bg-[#E0C5A3] p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <BiolaLogo />
            </div>
            <div className="hidden lg:flex space-x-4">
              <a href="#" className="text-[#15455f]font-bold">HOME</a>
              <a href="#" className="text-[#15455f]font-bold">SERVICES</a>
              <a href="#" className="text-[#15455f]font-bold">SKILLS</a>
              <a href="#" className="text-[#15455f]font-bold">PORTFOLIO</a>
              <a href="#" className="text-[#15455f]font-bold">CONTACT</a>
            </div>
          </div>
        </nav>
        

      </div>

      {/* Header for mobile view */}
      
      <div className="flex justify-between lg:hidden">
        <div>
          <BiolaLogo />
          {isOpen && (
            <div className="flex flex-col mr-auto items-start  py-2 px-4 h-auto">
              <a href="#" className="text-[#15455f] my-2 font-bold">HOME</a>
              <a href="#" className="text-[#15455f] my-2 font-bold">SERVICES</a>
              <a href="#" className="text-[#15455f] my-2 font-bold">SKILLS</a>
              <a href="#" className="text-[#15455f] my-2 font-bold">PORTFOLIO</a>
              <a href="#" className="text-[#15455f] my-2 font-bold">CONTACT</a>
            </div>
            )}
        </div>

        <nav className=''>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-[#15455f] focus:outline-none"
            >
              <img src={Menu} className='h-8 w-8' alt="Biola Icon" />
            </button>
          </div>
        </nav>
      </div>

    </div>
  );
};

export default BiolaHeader;
