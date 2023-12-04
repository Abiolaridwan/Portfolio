import React from 'react';
import BiolaSectionOne from '../BiolaPortfolio/BiolaSectionOne';
import BiolaSectionTwo from '../BiolaPortfolio/BiolaSectionTwo';
import BiolaSectionThree from '../BiolaPortfolio/BiolaSectionThree';
import BiolaSectionFour from '../BiolaPortfolio/BiolaSectionFour';
import BiolaSectionFive from '../BiolaPortfolio/BiolaSectionFive';
import BiolaSectionSix from '../BiolaPortfolio/BiolaSectionSix';
import BiolaSectionSeven from '../BiolaPortfolio/BiolaSectionSeven';
import BiolaSectionImg from '../BiolaPortfolio/BiolaSectionImg'

export default function BiolaPortfolioAll() {
  return (
  <div>
      <BiolaSectionOne />
      <BiolaSectionImg />
      <BiolaSectionTwo />
      <BiolaSectionThree />
      <BiolaSectionFour />
      <BiolaSectionFive />
      <BiolaSectionSix />
      <BiolaSectionSeven />
  </div>
  )
}
