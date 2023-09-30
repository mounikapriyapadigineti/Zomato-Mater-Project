import React, { useState } from 'react';
import RestaurantCard from '../RestaurantCard';
import DeliveryCarousel from './DeliveryCarousel';
const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/5/18241275/2814816309e747089e254286c0dda5b8_o2_featured_v2.jpg',
      ],
      name: 'Bakehouse Comfort',
      cuisine: ['Bakery', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/5/18241275/2814816309e747089e254286c0dda5b8_o2_featured_v2.jpg',
      ],
      name: 'Bakehouse Comfort',
      cuisine: ['Bakery', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: '12213',
      photos: [
        'https://b.zmtcdn.com/data/pictures/5/18241275/2814816309e747089e254286c0dda5b8_o2_featured_v2.jpg',
      ],
      name: 'Bakehouse Comfort',
      cuisine: ['Bakery', 'Desserts', 'Fastfood'],
      isPro: false,
      isOff: true,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);

  return (
    <>
      <DeliveryCarousel />
      <div className='flex justify-between flex-wrap my-10'>
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
