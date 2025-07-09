import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/FurnituresCarousel.css';

const App = () => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/furnitures')
      .then((response) => response.json())
      .then((data) => setFurnitures(data))
      .catch((error) => console.error('Error fetching furnitures:', error));
  }, []);

  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        pagination={{ clickable: true }}

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







