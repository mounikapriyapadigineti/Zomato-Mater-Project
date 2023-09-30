import React from 'react';
import Navbar from '../Components/Navbar';
import FoodTab from '../Components/FoodTabs';
const HomeLayout = (props) => {
  return (
    <>
      <div>
        <Navbar />
        <FoodTab />
        <div className='container mx-auto px-4 lg:px-20'>{props.children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
