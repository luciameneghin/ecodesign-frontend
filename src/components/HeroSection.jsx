import React from 'react'
import FurnitureCarousel from './FurnitureCarousel'

const HeroSection = () => {
  return (
    <div className="h-screen container mx-auto" >
      <div className="py-20">
        <h1 className="text-xl md:text-2xl font-bold text-center px-4">
          Vivi la natura
        </h1>

        <h3 className='text-xl md:text-2xl font-bold text-center px-4'>Cura nei dettagli e sostenibilità</h3>

        <h5 className='text-xl md:text-2xl font-bold text-center px-4'>Nei nostri mobili poniamo la massima attenzione per la salute della persona e della natura, progettando arredamenti in perfetto equilibrio tra natura e design.</h5>
      </div>
      <div>
        <FurnitureCarousel />
      </div>
    </div>

  )
}

export default HeroSection
