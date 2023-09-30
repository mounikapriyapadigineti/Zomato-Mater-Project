import React from 'react';

import { useParams } from 'react-router';
import Brand from './Delivery/Brand';
import Delivery from './Delivery/index';
import Dining from './Dining/index';
import NightLife from './NightLife/index';
import Nutrition from './Nutrition';
const Temp = () => {
  const { type } = useParams();
  return (
    <>
      <div className='my-5'>
        {type === 'delivery' && <Brand />}
        {type === 'delivery' && <Delivery />}
        {type === 'dining' && <Dining />}
        {type === 'night' && <NightLife />}
        {type === 'nutri' && <Nutrition />}
      </div>
    </>
  );
};

export default Temp;
