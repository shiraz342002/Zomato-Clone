import React, { useState } from 'react';
import Footer from "../components/Footer/Footer.jsx"
import CrousilUtil from "../Utils/CrousilUtil.jsx"

import locpin from '../assets/images/locationPin.png';
import search from '../assets/icons/search.png';
import dining1 from '../assets/icons/dinning2.png';
import dining2 from '../assets/icons/dinning1.png';
import delivery1 from '../assets/icons/delivery2.png';
import delivery2 from '../assets/icons/delivery1.png';
import { useNavigate } from 'react-router-dom';
import filter from "../assets/icons/filter.png"



import biryaniCImg from '../assets/icons/Food/biryaniC.png';
import burgerImg from '../assets/icons/Food/burger.png';
import chickenImg from '../assets/icons/Food/chicken.png';
import friesImg from '../assets/icons/Food/fries.png';
import homestyleImg from '../assets/icons/Food/homestyle.png';
import noodelsImg from '../assets/icons/Food/noodels.png';
import pannerImg from '../assets/icons/Food/panner.png';
import pizzaImg from '../assets/icons/Food/pizza.png';
import sandwichImg from '../assets/icons/Food/sandwich.png';
import shawarmaImg from '../assets/icons/Food/shawarma.png';

import kfcImg from '../assets/icons/Brands/kfc.png';
import pizzahutImg from '../assets/icons/Brands/pizzahut.png';
import scoopsImg from '../assets/icons/Brands/scoops.png';

import biryaniSCImg from '../assets/images/Food/biryani.png';
import biryaniSCImg2 from '../assets/images/Food/biryani2.png';
import chapathiImg from '../assets/images/Food/chapathi.png';
import fishImg from '../assets/images/Food/fish.png';
import icecreamImg from '../assets/images/Food/icecream.png';
import kfcSCImg from '../assets/images/Food/kfc.png';
import pizzaSCImg from '../assets/images/Food/pizza.png';
import ShowCaseCard from '../components/Cards/ShowCaseCard';
import ExploreOptions from '../components/ShowCase/ExploreOptions';
import CircleCard1 from '../components/Cards/CircleCard1.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';


const DiningOutComponent = () => {
  
    const items = [
      {
          promoted: true,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Paradise Hotel",
          rating: '3.6',
          imgSrc: biryaniSCImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Mangal Hotel",
          rating: '2.6',
          imgSrc: biryaniSCImg2
      },
      {
          promoted: true,
          time: "30",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "Chapathi Hotel",
          rating: '4.6',
          imgSrc: chapathiImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Fish Mandi Hotel",
          rating: '4.9',
          imgSrc: fishImg
      },
      {
          promoted: true,
          time: "25",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "MangalCaptain Hotel",
          rating: '4.6',
          imgSrc: icecreamImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "KFCS Hotel",
          rating: '2.8',
          imgSrc: kfcSCImg
      },
      {
          promoted: true,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Pizza Hotel",
          rating: '3.2',
          imgSrc: pizzaSCImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Fish Mandi Hotel",
          rating: '4.6',
          imgSrc: fishImg
      },
      {
          promoted: true,
          time: "25",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "MangalCaptain Hotel",
          rating: '2.6',
          imgSrc: icecreamImg
      },
  ]
  return (
    <>
    <div className='flex flex-row gap-3 justify-start relative bottom-4 items-center'>
    
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'> <img className='inline-block w-5 ' src={filter} alt="" />&nbsp;Filters</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Offers</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Rating:4.0</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Pet Friendly</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Outdoor Setting</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Serves Alcohol</span>
        <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Open Now</span>
    </div> 
    <div className='flex justify-start items-center mt-3 '>
        <img className='pr-36' src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" alt="" />
    </div>
    <div className='flex justify-start items-center mt-3 '>
        <p className='text-4xl  mt-10 font-bold'>Tredning Resturants in Sri Ganganganagar locality</p>
    </div>
    
    <div className="w-full h-full my-4">
    <div className="mx-auto">
        <div className="text-2xl font-semibold text-gray-800">
        </div>
        <div className="w-full h-auto my-4 flex flex-wrap justify-start">
            {items?.map((item, id) => (
                <ShowCaseCard
                    key={id}
                    promoted={item.promoted}
                    time={item.time}
                    offB={item.offB}
                    proExtraB={item.proExtraB}
                    off={item.off}
                    proExtra={item.proExtra}
                    name={item.name}
                    rating={item.rating}
                    imgSrc={item.imgSrc}
                />
            ))}
        </div>
    </div>
</div>
    <ExploreOptions/>
    
   
    </>
  );
};


const DeliveryComponent = () => {
  const foodCardScroll = [
    {
        name: "Biryani",
        imgSrc: biryaniCImg
    },
    {
        name: "Burger",
        imgSrc: burgerImg
    },
    {
        name: "Chicken",
        imgSrc: chickenImg
    },
    {
        name: "Fries",
        imgSrc: friesImg
    },
    {
        name: "Home Style",
        imgSrc: homestyleImg
    },
    {
        name: "Noodles",
        imgSrc: noodelsImg
    },
    {
        name: "Panner",
        imgSrc: pannerImg
    },
    {
        name: "Pizza",
        imgSrc: pizzaImg
    },
    {
        name: "Sandwich",
        imgSrc: sandwichImg
    },
    {
        name: "Shawarma",
        imgSrc: shawarmaImg
    },
]
const brandsCardScroll = [
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "45"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "35"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "49"
        },
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "19"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "22"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "33"
        },
    ]
    const items = [
      {
          promoted: true,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Paradise Hotel",
          rating: '3.6',
          imgSrc: biryaniSCImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Mangal Hotel",
          rating: '2.6',
          imgSrc: biryaniSCImg2
      },
      {
          promoted: true,
          time: "30",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "Chapathi Hotel",
          rating: '4.6',
          imgSrc: chapathiImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Fish Mandi Hotel",
          rating: '4.9',
          imgSrc: fishImg
      },
      {
          promoted: true,
          time: "25",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "MangalCaptain Hotel",
          rating: '4.6',
          imgSrc: icecreamImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "KFCS Hotel",
          rating: '2.8',
          imgSrc: kfcSCImg
      },
      {
          promoted: true,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Pizza Hotel",
          rating: '3.2',
          imgSrc: pizzaSCImg
      },
      {
          promoted: false,
          time: "25",
          offB: true,
          proExtraB: false,
          off: "30",
          proExtra: "40",
          name: "Fish Mandi Hotel",
          rating: '4.6',
          imgSrc: fishImg
      },
      {
          promoted: true,
          time: "25",
          offB: false,
          proExtraB: true,
          off: "30",
          proExtra: "40",
          name: "MangalCaptain Hotel",
          rating: '2.6',
          imgSrc: icecreamImg
      },
  ]
  return (
    <>
    <div className='flex flex-row gap-3 justify-start relative bottom-4 items-center'>
    
    <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'> <img className='inline-block w-5 ' src={filter} alt="" />&nbsp;  Filters</span>
    <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Pure Veg</span>
    <span className='text-gray-400 border px-4 rounded-md py-1 cursor-pointer text-based'>Cusine</span>
    
</div> 
      <div className="w-[70%] mx-auto md:w-full ">
  <div className="text-2xl font-[450] mb-4 text-gray-800">
    Inspiration for your first order
  </div>
  <div className="w-full h-full flex overflow-x-auto md:overflow-hidden">
    <CrousilUtil>
      {foodCardScroll?.map((val, id) => (
        <div className="w-[150px] mx-2" key={id}>
          <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
        </div>
      ))}
    </CrousilUtil>
  </div>
</div>
      <div className="w-[70%] mx-auto md:w-full ">
  <div className="text-2xl font-[450] mb-4 text-gray-800">
    Top Brands for you
  </div>
  <div className="w-full h-full flex overflow-x-auto md:overflow-hidden">
    <CrousilUtil>
      {brandsCardScroll?.map((val, id) => (
        <div className="w-[150px] mx-2" key={id}>
          <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
        </div>
      ))}
    </CrousilUtil>
  </div>
</div>
  <div className="w-full h-full my-4">
    <div className="mx-auto">
        <div className="text-2xl font-semibold text-gray-800">
        </div>
        <div className="w-full h-auto my-4 flex flex-wrap justify-start">
            {items?.map((item, id) => (
                <ShowCaseCard
                    key={id}
                    promoted={item.promoted}
                    time={item.time}
                    offB={item.offB}
                    proExtraB={item.proExtraB}
                    off={item.off}
                    proExtra={item.proExtra}
                    name={item.name}
                    rating={item.rating}
                    imgSrc={item.imgSrc}
                />
            ))}
        </div>
    </div>
</div>
  <ExploreOptions/>
    </>
  );
};

const Showcase = () => {
  const navigate = useNavigate('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [diningOut, setDiningOut] = useState(true);
  const [delivery, setDelivery] = useState(false);

  const handleDiningOutClick = () => {
    setDiningOut(true);
    setDelivery(false);
  };

  const handleDeliveryClick = () => {
    setDiningOut(false);
    setDelivery(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className="px-8 lg:pr-36">

      <nav className="bg-white border-b border-gray-300 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-around">
          <div className="flex items-center">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="Logo"
              className="h-8 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          <div className="relative flex items-center flex-grow mx-4">
            <div
              className="flex items-center px-4 py-2 border-l border-t border-b border-gray-300 rounded-l-lg cursor-pointer"
              onClick={toggleDropdown}
            >
              <img className="w-5" src={locpin} alt="" />
              <span className="mr-2 text-gray-400">
                &nbsp; Model Town, Sri Ganganagar
              </span>
              <svg
                className={`w-4 h-4 text-gray-600 transform transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                    >
                      Detect Current Location
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <div className="h-8 border-l border-gray-300"></div>

            <div className="flex items-center flex-grow relative">
              <img
                src={search}
                alt="Search Icon"
                className="absolute left-2 w-4 h-4 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search for restaurants, cuisine, or dishes"
                className="w-full pl-8 pr-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/signup" className="text-gray-900 hover:text-gray-300">
              Login
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/login" className="text-gray-900 hover:text-gray-300">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="flex mt-6 ml-64 text-gray-400">
        Home / India / Hyderabad / Hyderabad City / Indira Nagar
      </p>

      <div className="flex flex-row gap-4 mt-8 ml-64 cursor-pointer items-center">
        <div onClick={handleDiningOutClick} className="flex flex-col items-center">
          <img
            className="w-[70px]"
            src={diningOut ? dining1 : dining2}
            alt="Dining Out"
          />
          <span>Dining Out</span>
          {diningOut && <div className="w-full h-1 bg-black mt-1"></div>}
        </div>

        <div onClick={handleDeliveryClick} className="flex flex-col items-center">
          <img
            className="w-[70px]"
            src={delivery ? delivery1 : delivery2}
            alt="Delivery"
          />
          <span>Delivery</span>
          {delivery && <div className="w-full h-1 bg-black mt-1"></div>}
        </div>
      </div>

      <hr className='mt-3' />
     
      <div className="mt-8 ml-64">
        {diningOut && <DiningOutComponent />}
        {delivery && 
        <ErrorBoundary>
        <DeliveryComponent />
        </ErrorBoundary>
        }
        </div>
      </div>
      <div className='mt-22'>
      <Footer/>
      </div>
    </>

  );
};

export default Showcase;
