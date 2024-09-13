import React from 'react'
import RatingUtil from '../../Utils/RatingUtil'
import infoIcon from '../../assets/icons/info.png'

const OrderTitleComponent = () => {
  return (
    <div className="w-full h-full my-2">
      <div className="w-full h-full flex justify-between">
        <div className="w-1/2 h-full">
          <div className="text-2xl font-medium text-gray-800">Krupa Mess & Tiffins</div>
          <div className="text-base font-light text-gray-600">South Indian, Chinese, North Indian, Sichuan, Pizza</div>
          <div className="my-1 text-base font-light text-gray-700">Abids, Hyderabad</div>
          <div className="text-base flex items-center">
            <span className="text-orange-500">Open now -</span>
            <span className="text-gray-700 mx-2">10am - 11pm (Today)</span>
            <div className="relative">
              <img className="w-3 h-3 cursor-pointer" src={infoIcon} alt="Info Icon" />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-56 h-24 bg-white border border-gray-300 rounded-lg p-2 text-center hidden group-hover:block">
                <div className="text-xl font-medium text-gray-800">Opening Hours</div>
                <div className="text-sm text-gray-600 mt-2">
                  Mon-Sun: <span className="mx-1">11:30am-10:30pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end">
          <RatingUtil rating="4.1" count="601" txt="Dining Reviews" />
          <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
        </div>
      </div>
    </div>
  )
}

export default OrderTitleComponent
