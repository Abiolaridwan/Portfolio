import React from 'react';
import PageImage from '../BiolaPortfolio/assets/pageimage.png';

export default function BiolaSectionSix() {
  return (
    <div>
      <img
        src={PageImage}
        alt=""
        className='w-full h-auto lg:h-[50rem] object-cover'
        style={{ minHeight: '70vh' }}
      />
    </div>
  );
}

