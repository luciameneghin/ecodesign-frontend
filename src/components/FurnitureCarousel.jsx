import React, { useState, useEffect, useRef } from 'react';
import '../styles/FurnituresCarousel.css';

const App = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const listTopRef = useRef();

  useEffect(() => {
    fetch('http://localhost:8000/api/furnitures')
      .then((response) => response.json())
      .then((data) => setFurnitures(data))
      .catch((error) => console.error('Error fetching furnitures:', error));
  }, []);

  useEffect(() => {
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  //Calcolo paginazione
  const totalPages = Math.ceil(furnitures.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = furnitures.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  return (
    <>
      <div ref={listTopRef} className="App grid grid-cols-5 gap-10 scroll-mt-[100px]">
        {currentItems.map((furniture) => (
          <div key={furniture.id}>
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
          </div>
        ))}
      </div>
      <div>
        {/* Paginazione */}
        <div className='flex justify-center'>
          <div className='border border-1'>
            <button className='px-5 border-r' onClick={handlePrevPage} disabled={currentPage === 1}>
              &larr;
            </button>
            <span className='px-10'>
              {currentPage} di {totalPages}
            </span>
            <button className='px-5 border-l' onClick={handleNextPage} disabled={currentPage === totalPages}>
              &rarr;
            </button>

          </div>
        </div>
      </div >
    </>
  );
};

export default App;







