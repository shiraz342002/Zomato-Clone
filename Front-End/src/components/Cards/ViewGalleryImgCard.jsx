import React from 'react';

const ViewGalleryImgCard = ({ imgSrc }) => {
  return (
    <div className="relative w-full h-full cursor-pointer">
      <div className="w-full h-full overflow-hidden group">
        <img
          src={imgSrc}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:contrast-125"
          alt="Gallery"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-medium bg-black bg-opacity-70">
        View Gallery
      </div>
    </div>
  );
};

export default ViewGalleryImgCard;
