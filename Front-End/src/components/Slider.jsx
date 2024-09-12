import React, { useState } from 'react';
import ProductCard from '../components/Cards/ProductCard.jsx';
import onlineorder from "../assets/images/onlineordering_7_11zon.jpg";
import event from "../assets/images/events_22_11zon.jpg";
import advertise from "../assets/images/advertise_5_11zon.jpg";
import listing from "../assets/images/listings_8_11zon.jpg";
import Hyperpure from "../assets/images/hyperpure_23_11zon.jpg";

const products = [
  { img: onlineorder, title: "Online Ordering", desc: "Start taking orders online from millions of users near you and deliver with Zomato..." },
  { img: event, title: "Events", desc: "Partner with us for India’s grandest food & entertainment carnival freeze - “Zomaland”..." },
  { img: advertise, title: "Advertise", desc: "For every marketing dollar spent, Zomato returns over 8x the investment freeze..." },
  { img: listing, title: "Listing", desc: "A free app that allows you to manage your Zomato listing directly from your smartphone" },
  { img: Hyperpure, title: "Hyperpure", desc: "Supplies fresh and high quality ingredients to restaurant for serving delicious meals..." },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, products.length - slidesToShow));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="flex-none w-full sm:w-1/3 p-2">
              <ProductCard
                img={product.img}
                title={product.title}
                desc={product.desc}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 right-22 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
