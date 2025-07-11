import React from 'react'
import FurnitureCarousel from './FurnitureCarousel'

const HeroSection = () => {
  return (
    <div className="container mx-auto p-20 bg-red" >
      <div className="mb-10">
        <h1 className="text-xl md:text-2xl font-thin text-center px-4 uppercase mb-3">
          Arreda la tua casa <br />in armonia con la natura
        </h1>
        <h3 className='text-xl md:text-2xl text-center px-4 mb-3'>Scopri i nostri mobili artigianali realizzati in legno sostenibile</h3>

        <h5 className='text-xl md:text-2xl font-thin px-4'>Nei nostri mobili poniamo la massima attenzione per la salute della persona e della natura, progettando arredamenti in perfetto equilibrio tra natura e design.</h5>
      </div>
      <div>
        <FurnitureCarousel />
      </div>
    </div>

  )
}

export default HeroSection
