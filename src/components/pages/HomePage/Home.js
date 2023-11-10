import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Plantilla from '../../Plantilla'

function Home() {
  return (
    <>
      <Plantilla {...homeObjOne} />

      <Pricing />
      <Plantilla {...homeObjTwo} />
      <HeroSection {...homeObjThree} />


    </>
  );
}

export default Home;
