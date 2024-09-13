import React from 'react';
import FreqQuestion from '../Cards/FreqQuestion';

const ExploreOptions = () => {
  return (
    <div className="my-8 w-full flex justify-start items-center">
      <div className="w-full sm:w-3/4 md:w-2/2 flex flex-col items-center">
        <div className="mb-4 text-4xl font-semibold text-gray-900">
          Explore Options Near me 
        </div>
        <div className="flex flex-wrap justify-center items-center ">
        <FreqQuestion 
            title="What will Zomato charge me for creating a page on its platform?" 
            content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." 
          />
        <FreqQuestion 
            title="What will Zomato charge me for creating a page on its platform?" 
            content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." 
          />
        <FreqQuestion 
            title="What will Zomato charge me for creating a page on its platform?" 
            content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." 
          />
        <FreqQuestion 
            title="What will Zomato charge me for creating a page on its platform?" 
            content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." 
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreOptions;
