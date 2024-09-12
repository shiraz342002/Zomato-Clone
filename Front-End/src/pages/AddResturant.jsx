import React from 'react'
import AddResturantNavbar from '../components/AddResturant/AddResturantNavbar'
import PartnerWithUs from '../components/AddResturant/PartnerWithUs'
import HowItWorks from '../components/AddResturant/HowItWorks'
import SearchResturant from '../components/AddResturant/SearchResturant'
import OurProducts from '../components/AddResturant/OurProducts'
import FrequentlyAsked from '../components/AddResturant/FrequentlyAsked'
import Footer from '../components/Footer/Footer'

const AddResturant = () => {
  return (
    <>
      <AddResturantNavbar />
      <PartnerWithUs/>
      <HowItWorks/>
      <SearchResturant/>
      <OurProducts/>
      <FrequentlyAsked/>
      <Footer/>
    </>
  )
}

export default AddResturant
