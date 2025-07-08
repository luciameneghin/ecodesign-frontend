import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa il CSS di base per Swiper
import 'swiper/css/navigation'; // Importa il CSS per la navigazione
import 'swiper/css/pagination'; // Importa il CSS per la paginazione
import '../styles/FurnituresCarousel.css'; // Puoi aggiungere il tuo CSS personalizzato

const App = () => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    // Simula una richiesta al backend per ottenere i dati
    fetch('http://localhost:8000/api/furnitures')
      .then((response) => response.json())
      .then((data) => setFurnitures(data))
      .catch((error) => console.error('Error fetching furnitures:', error));
  }, []);

  return (
    <div className="App">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {furnitures.map((furniture) => (
          <SwiperSlide key={furniture.id}>
            <div className="carousel-slide-content">
              <img
                src={`http://localhost:8000${furniture.image}`}
                alt={furniture.name}
                className="carousel-image"
              />
              <div className="carousel-info">
                <h3>{furniture.name}</h3>
                <p>{furniture.price}.00 €</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;




