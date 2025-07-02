import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/divano-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          Mobili sostenibili dal design unico
        </h1>
      </div>
    </div>

  )
}

export default HeroSection
