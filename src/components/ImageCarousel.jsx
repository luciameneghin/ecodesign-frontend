import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const images = [
  '/images/carousel/carousel-1.jpg',
  '/images/carousel/carousel-2.jpg',
  '/images/carousel/carousel-3.jpg',
  '/images/carousel/carousel-4.jpg',
  '/images/carousel/carousel-5.jpg',
  '/images/carousel/carousel-6.jpg',
  '/images/carousel/carousel-7.jpg',
  '/images/carousel/carousel-8.jpg'
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[600px] overflow-hidden relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover object-center transition duration-700 ease-in-out"
      />
      {/* Freccia sinistra */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
      >
        <BsChevronCompactLeft size={24} />
      </button>
      {/* Freccia destra */}
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
      >
        <BsChevronCompactRight size={24} />
      </button>


      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
      >
        <BsChevronCompactRight size={24} />
      </button>

      {/* Pallini sottostanti */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
