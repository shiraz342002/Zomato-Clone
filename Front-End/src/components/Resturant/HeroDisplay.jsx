import React from 'react';
import GalleryImgCard from '../Cards/GalleryImgCard';
import ViewGalleryImgCard from '../Cards/ViewGalleryImgCard';
import food2Img from '../../assets/images/food2.jpg';
import food3Img from '../../assets/images/food3.jpg';
import food1Img from '../../assets/images/food1.jpg';

const HeroDisplay = () => {
  return (
    <div className="w-full max-h-[410px] flex justify-center mt-10">
      <div className="w-[70%] h-full flex flex-wrap">
        <div className="w-[59%]">
          <GalleryImgCard imgSrc={food1Img} />
        </div>
        <div className="ml-1 w-[40%] h-full grid gap-1 grid-rows-2 grid-cols-2">
          <GalleryImgCard imgSrc={food2Img} />
          <ViewGalleryImgCard imgSrc={food1Img} />
          <GalleryImgCard imgSrc={food3Img} />
        </div>
      </div>
    </div>
  );
}

export default HeroDisplay;
