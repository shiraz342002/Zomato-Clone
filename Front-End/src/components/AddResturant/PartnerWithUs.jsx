import React from 'react'
import PartnerWithUsCard from '../Cards/PartnerWithUsCard'
import globIcon from '/icons/glob.png'
import calenderIcon from '/icons/calenderIcon.png'
import restaurantIcon from '/icons/restaurantIcon.png'

const PartnerWithUs = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="w-[60%] m-8 flex flex-col justify-center items-center">
                    <div className="text-4xl font-semibold text-center text-gray-900">
                        Why should you partner with Tomato?
                    </div>
                    <div className="text-lg my-6 text-center text-gray-600">
                    Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.
                    </div>
                    <div className="flex flex-wrap justify-center items-center">
                        <PartnerWithUsCard imgSrc={globIcon} title="100+ cities" tagLine="in India" />
                        <PartnerWithUsCard imgSrc={restaurantIcon} title="3 lakhs+" tagLine="restaurant listings" />
                        <PartnerWithUsCard imgSrc={calenderIcon} title="5.0 crore+" tagLine="monthly orders" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerWithUs
