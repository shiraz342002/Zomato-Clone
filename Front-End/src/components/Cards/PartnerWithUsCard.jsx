import React from 'react'

const PartnerWithUsCard = ({ imgSrc, title, tagLine }) => {
  return (
    <div className="w-[260px] h-[100px] m-4 rounded-lg border border-gray-200 shadow-lg bg-white flex">
    <div className="w-[30%] h-full flex justify-center items-center">
      <img className="w-12 h-12" src={imgSrc} alt="icon" />
    </div>
    <div className="w-[70%] h-full flex flex-col justify-center ml-2">
      <div className="text-lg font-normal text-blue-600">{title}</div>
      <div className="text-base text-gray-600">{tagLine}</div>
    </div>
  </div>
  )
}

export default PartnerWithUsCard
