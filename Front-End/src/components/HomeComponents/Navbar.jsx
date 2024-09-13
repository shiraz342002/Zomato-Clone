import React, { useState } from 'react';
import mobileHand from '../../assets/icons/smartphone.png';
import menu_icon_1 from '../../assets/icons/menu_icon_1.png';
import close_icon_1 from '../../assets/icons/close_icon_1.png';

const Navbar = ({ onOpenLogin, onOpenSignup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-[60px] fixed top-0 z-10 text-white flex items-center justify-around px-4">
      <div className="flex items-center space-x-3">
        <img src={mobileHand} alt="Mobile Icon" className="w-4 h-4" />
        <a href="/get-the-app" className="text-white text-lg">Get The App</a>
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
        className={`md:flex md:items-center md:space-x-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
      >
        <li className="my-2 md:my-0 px-4 w-full md:w-auto">
          <a href="/add-restaurant" className="block">Add Restaurant</a>
        </li>
        <li className="my-2 md:my-0 px-4 w-full md:w-auto">
          <a href="/investor-relations" className="block">Investors Relations</a>
        </li>
        <li className="my-2 md:my-0 px-4 w-full md:w-auto">
          <button onClick={onOpenLogin} className="block">Log In</button>
        </li>
        <li className="my-2 md:my-0 px-4 w-full md:w-auto">
          <button onClick={onOpenSignup} className="block">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
