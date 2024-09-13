import React from 'react';

const GalleryImgCard = ({ imgSrc }) => {
  return (
    <div className="w-full h-full">
      <div className=" h-full overflow-hidden group">
        <img
          src={imgSrc}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:contrast-125 cursor-pointer"
          alt="Gallery"
        />
      </div>
    </div>
  );
};

export default GalleryImgCard;
