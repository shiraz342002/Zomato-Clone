import React, { useState } from 'react';
import HomeBanner from './components/HomeComponents/HomeBanner';
import SmallCard from './components/Cards/HomeCard';
import orderOnlineImg from '/images/orderonline.jpg';
import diningoutImg from '/images/diningout.jpg';
import Popular from './components/HomeComponents/Popular';
import GetTheApp from './components/HomeComponents/GetTheApp';
import CollapsibleCards from './components/HomeComponents/CollapsibleCards';
import Footer from './components/Footer/Footer';
import SignupForm from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Navbar from './components/HomeComponents/Navbar';

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const openSignup = () => setShowSignup(true);
  const closeSignup = () => setShowSignup(false);
  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <>
      <Navbar onOpenSignup={openSignup} onOpenLogin={openLogin} />
      <HomeBanner />
      <div className='w-[70%] m-auto'>
        <div className='flex flex-wrap items-center justify-center'>
          <SmallCard
            imgSrc={orderOnlineImg}
            text={"OrderOnline"}
            link={"showcase"}
            additionalText={"Stay home and order at your doorstep"}
          />
          <SmallCard
            imgSrc={diningoutImg}
            text={"Dining"}
            link={"showcase"}
            additionalText={"Check out our best restaurants that offer dine out"}
          />
        </div>
        <Popular />
      </div>
      <GetTheApp />
      <CollapsibleCards />
      <Footer />
      {showSignup && <SignupForm onClose={closeSignup} />}
      {showLogin && <Login onClose={closeLogin} />}
    </>
  );
};

export default App;
