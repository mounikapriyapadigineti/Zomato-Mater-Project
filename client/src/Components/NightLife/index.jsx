import React from 'react';
import NightLifeCarousel from './NightLifeCarousel';
const NightLife = () => {
  return (
    <div>
      <h1 className='test-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
        Nightlife Restaurants in Hyderabad
      </h1>
      <NightLifeCarousel />
    </div>
  );
};

export default NightLife;
