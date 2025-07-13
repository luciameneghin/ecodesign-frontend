import React, { useEffect, useState } from 'react'
import { useFurnitures } from '../context/FurnituresContext'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Shipping from '../components/Shipping'
import Footer from '../components/Footer'
import { FaHandshakeSimple } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { RiStairsFill } from "react-icons/ri";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const [furniture, setFurniture] = useState();
  const { furnitures } = useFurnitures();

  const navigate = useNavigate();

  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:8000/api/furnitures/furniture/${id}`)
      .then((response) => response.json())
      .then((data) => setFurniture(data))
      .catch((error) => console.error('Error fetching furniture:', error));
  }, [id]);

  if (!furniture) {
    return (
      <div>
        <Navbar />
        <div className='text-center py-20'>Caricamento in corso...</div>
        <Footer />
      </div>
    );
  }

  const handleClick = (id) => {
    navigate(`/furniture/${id}`)
  }

  const relatedFurnitures = furnitures.filter((f) => f.category === furniture.category && f.id !== furniture.id);

  return (
    <div>
      <Navbar />
      <div className='container py-10 flex mx-auto justify-center gap-10'>
        <div>
          <div className='flex'>
            <h1 className='text-3xl font-bold'>{furniture.name}</h1>
          </div>
          <div className='flex items-center'>
            <p className='font-thin'>{furniture.category}</p>
          </div>
          <img src={`http://localhost:8000/${furniture.image}`} alt={furniture.name} className='w-[600px] h-auto object-contain my-6' />
        </div>
        <div className='w-[20%]'>
          <p className='font-bold text-3xl flex justify-end text-[#5ED34F]'>{furniture.price} €</p>
          <div className='my-20'>
            <h3 className='font-semibold text-[#B4654A]'>Descrizione</h3>
            <p className='mt-4'>{furniture.description}</p>
            <div className='my-10 font-thin'>
              <p className='flex items-center gap-2'><FaHandshakeSimple /> Ritiro in negozio gratuito</p>
              <p className='flex items-center gap-2'><BsFillRocketTakeoffFill /> Spedimao in tutto il mondo</p>
              <p className='flex items-center gap-2'><IoBuild /> Montaggio & installazione su richiesta</p>
              <p className='flex items-center gap-2'><RiStairsFill /> Consegna al piano? Contattaci</p>
            </div>
          </div>
          <div className='text-[#D6AE9E]'>
            <h3>Informazioni</h3>
            <p className='mt-2 text-sm text-[#8D8F8C]'>Materiale: {furniture.material}</p>
            <p className='text-sm text-[#8D8F8C]'>Colore: {furniture.color}</p>
            <p className='text-sm text-[#8D8F8C] capitalize'>Categoria: {furniture.category}</p>
            <p className='text-sm text-[#8D8F8C]'>Per esterni: {furniture.outdoor ? 'Sì' : 'No'}</p>

          </div>
        </div>
      </div>
      <div className='py-20 w-[50%] mx-auto'>
        <h1 className='container text-[#B4654A]'>Ecco qualcosa che potrebbe interessarti</h1>
        <div className='container mx-auto'>
          {relatedFurnitures.length > 0 ? (
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="w-full h-64"
            >

              {relatedFurnitures.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={`http://localhost:8000/${item.image}`}
                    alt={item.name}
                    onClick={() => handleClick(item.id)}
                    className="w-full h-40 object-contain cursor-pointer"
                  />
                  <p className="text-sm text-center mt-2">{item.name}</p>
                </SwiperSlide>
              ))}

            </Swiper>
          ) : (
            <p className="text-center text-gray-500 mt-6">
              Nessun altro oggetto nella stessa categoria
            </p>
          )}
        </div>
      </div>

      <Shipping />
      <Footer />
    </div >
  )
}

export default ProductDetail
