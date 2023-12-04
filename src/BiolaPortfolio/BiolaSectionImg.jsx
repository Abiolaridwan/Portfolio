import React from 'react';
import LagosNg from '../BiolaPortfolio/assets/LagosNg.jpg';

export default function BiolaSectionImg() {
  return (
    <div className="relative">
      <img
        src={LagosNg}
        alt="Developer Table"
        className="w-full h-1/4 object-cover object-center"
      />
    </div>
  );
}

