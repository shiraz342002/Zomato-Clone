import React from 'react'
import HomeBanner from './components/HomeComponents/HomeBanner.jsx'
import SmallCard from './Utils/Cards/HomeCard.jsx'
import orderOnlineImg from '/images/orderonline.jpg'
import diningoutImg from '/images/diningout.jpg'
import Popular from './components/HomeComponents/Popular.jsx'
import GetTheApp from './components/HomeComponents/GetTheApp.jsx'
import CollapsibleCards from './components/HomeComponents/CollapsibleCards.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
      <HomeBanner />
      <div className='w-[70%] m-auto'>
        <div className='flex flex-wrap items-center justify-center'>
          <SmallCard
            imgSrc={orderOnlineImg}
            text={"Order Online"}
            link={"orderonline"}
            additionalText={"Stay home and order at your doorstep"}
          />
          <SmallCard
            imgSrc={diningoutImg}
            text={"Order Online"}
            link={"Dining Out"}
            additionalText={"Check out our best resturant that offers dine out"}
          />
        </div>
        <Popular/>
      </div>
      <GetTheApp/>
      <CollapsibleCards/>
      <Footer/>
    </>
  )
}

export default App
