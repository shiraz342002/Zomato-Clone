import React from 'react';
import backgroundImg from '/images/addressbackground.jpg';
import bookIcon from '/icons/book.png';
import bikeIcon from '/icons/bike.png';
import packageIcon from '/icons/package.png';

import HowItWorksCard from '../Cards/HowItWorksCard';

const HowItWorks = () => {
  return (
    <>    <div className="w-full h-auto my-4 relative">
      <div className="w-full h-full flex justify-center items-center relative">
        <div className="w-full h-full absolute inset-0">
          <img className="w-full h-full object-cover" src={backgroundImg} alt="background image" />
        </div>
        <div className="relative mt-16 flex flex-col items-center text-center z-10 px-4">
          <div className="text-3xl font-semibold mb-6 md:text-4xl lg:text-5xl">How it works?</div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4 px-2 md:px-4">
            <HowItWorksCard step='1' title='Create your page on Zomato' tag='Help users discover your place by creating a listing on Zomato' img={bookIcon} color='#FFFCF1' />
            <HowItWorksCard step='2' title='Register for online ordering' tag='And deliver orders to millions of customers with ease' img={bikeIcon} color='#FFF5F6' />
            <HowItWorksCard step='3' title='Start receiving orders online' tag='Manage orders on our partner app, web dashboard or API partners' img={packageIcon} color='#FFF9F1' />
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default HowItWorks;
