import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mobileHand from '../../assets/icons/smartphone.png';
import menu_icon_1 from '../../assets/icons/menu_icon_1.png';
import close_icon_1 from '../../assets/icons/close_icon_1.png';
import greenTick from '../../assets/icons/greenCheck.png';
import banner from '../../assets/banners/banner2.jpg'


const AddResturantNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="w-full h-[60px] fixed top-0 z-10  text-white flex items-center justify-around px-4">
        <div className="flex items-center space-x-3">
          <img className='w-[130px] mt-3' src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png" alt="" />
        </div>
        <div className="md:hidden">
          <img
            src={menuOpen ? close_icon_1 : menu_icon_1}
            alt="Menu Icon"
            className="w-6 h-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-6 text-lg absolute  md:static top-16 left-0 w-full md:w-auto  md:bg-transparent transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
        >

          <li className="my-2 md:my-0 px-4 w-full md:w-auto">
            <Link to="/signup" className="block">Sign up</Link>
          </li>
          <li className="my-2 md:my-0 px-4 w-full md:w-auto">
            <Link to="/login" className="block">Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full h-[25rem] mb-8 relative">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  text-white">
          <div className="text-4xl font-semibold text-center">Partner with Zomato <br />
            at 0% commission for the 1st month!</div>
          <div className="text-lg font-semibold mt-4 mb-6 text-center">And get ads worth INR 1500. Valid for new restaurant partners in select cities.</div>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/"
              className="w-72 px-2 py-4 mx-2 mb-4 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 block"
            >
              Register your restaurant
            </Link>
            <Link
              to="/"
              className="w-72 px-2  py-4 mx-2 mb-4 text-center bg-white text-black rounded-lg hover:bg-gray-200  transition-colors duration-300 block"
            >
              Login to view your existing restaurants
            </Link>
          </div>
          <p className='flex items-start'>Need help? Contact +91 97-38-38-38-38</p>
        </div>
</div>
        <div className="flex justify-center items-center h-[300px] relative bottom-7 bg-gray-50">
          <div className="w-[700px] bg-white p-8 shadow-lg rounded-xl sm:mb-[70px]">
            <h2 className=" font-semibold mb-4 text-center text-4xl">Get started with online ordering</h2>
            <p className="mb-4 text-center text-1xl">Please keep the documents ready for a smooth signup</p>
            <div className="flex justify-between font-semibold text-xl">
             
              <ul className="space-y-5">
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  FSSAI license copy <span className="text-blue-500">(apply now)</span>
                </li>
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  PAN card copy
                </li>
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  Regular GSTIN <span className="text-blue-500">(apply now)</span>
                </li>
              </ul>

              <ul className="space-y-5">
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  Bank account details
                </li>
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  Your restaurant menu
                </li>
                <li className="flex items-center">
                  <img className="w-5 mr-2" src={greenTick} alt="tick icon" />
                  Dish images for top 5 items
                </li>
              </ul>
            </div>
          </div>
        </div>


      
    </>
  )
}

export default AddResturantNavbar
