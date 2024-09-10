import React from 'react'
import PlacesCard from '../../Utils/Cards/PlacesCards'

const Popular = () => {
  return (
    <div className='mt-[4rem]'>
      <p className=' text-4xl ml-4'>Popular localities in and around <span className='font-semibold'>Sri GangaNagar</span></p>
      <div className="flex items-center justify-center mt-[1rem]">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <PlacesCard link={'/jubileeHills'} place={"Jubilee Hills"} count={388}/>
            <PlacesCard link={'/FortSuratgarh'} place={"Fort Suratgarh"} count={318}/>
            <PlacesCard link={'/SuratgarhDunes'} place={"Suratgarh Dunes"} count={218}/>
            <PlacesCard link={'/SunsetPoint'} place={"Sunset Point"} count={428}/>
            <PlacesCard link={'/AmbedkarChowk'} place={"Ambedkar Chowk"} count={103}/>
        </div>
      </div>
    </div>
  )
}

export default Popular
