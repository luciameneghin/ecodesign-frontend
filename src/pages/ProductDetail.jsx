import React, { useEffect, useState } from 'react'
import { useFurnitures } from '../context/FurnituresContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Shipping from '../components/Shipping'
import Footer from '../components/Footer'
import { FaHandshakeSimple } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { RiStairsFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const [furniture, setFurniture] = useState();
  const [legs, setLegs] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selectedSeatImage, setSelectedSeatImage] = useState(null);
  const [selectedLegsImage, setSelectedLegsImage] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedLegs, setSelectedLegs] = useState(null);


  const { furnitures } = useFurnitures();
  const { addToCart, setIsCartOpen } = useCart();

  const navigate = useNavigate();

  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:8000/api/furnitures/furniture/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFurniture(data)
      })
      .catch((error) => console.error('Error fetching furniture:', error));

    fetch(`http://localhost:8000/api/furniture-legs`)
      .then((res) => res.json())
      .then((data) => setLegs(data))

    fetch(`http://localhost:8000/api/furniture-seats`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSeats(data)
      })
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

  const filteredSeats = seats.filter(seat => seat.furniture_id === furniture.id);
  const filteredLegs = legs.filter(leg => leg.furniture_id === furniture.id);


  const handleAddToCart = () => {
    if (!furniture) return;

    const newItem = {
      furnitureId: furniture.id,
      seatId: selectedSeat ? selectedSeat.id : null,
      legsId: selectedLegs ? selectedLegs.id : null,
      name: furniture.name,
      unitPrice: furniture.price,
      imageUrl: `http://localhost:8000/${furniture.image}`
    };

    addToCart(newItem);
    setIsCartOpen(true);
  };



  return (
    <div>
      <Navbar />
      <div className='container py-10 flex mx-auto justify-center gap-10'>
        <div>
          <div>
            <h1 className='text-3xl font-bold'>{furniture.name}</h1>
            <p className='font-thin'>{furniture.category}</p>
          </div>
          <div className='relative w-[600px] h-[600px] mx-auto bg-[#222725] my-20'>
            {/* immagine base */}
            <img
              src={`http://localhost:8000/${furniture.image}`}
              alt={furniture.name}
              className="absolute top-0 left-0 w-full h-full object-contain z-10 opacity-40"
            />

            {/* seduta selezionata */}
            {selectedSeatImage && (
              <img
                src={`http://localhost:8000${selectedSeatImage}`}
                alt="seduta"
                className="absolute top-0 left-0 w-full h-full object-contain z-20"
              />
            )}

            {/* gambe selezionate */}
            {selectedLegsImage && (
              <img
                src={`http://localhost:8000${selectedLegsImage}`}
                alt="gambe"
                className="absolute top-0 left-0 w-full h-full object-contain z-30"
              />
            )}
          </div>

        </div>
        <div className='w-[20%]'>
          <p className='font-bold text-3xl flex justify-end text-[#5ED34F]'>{furniture.price} €</p>
          <div className='my-10'>
            <h3 className='font-semibold text-[#B4654A]'>Descrizione</h3>
            <p className='mt-4'>{furniture.description}</p>
            <div className='my-10 font-thin'>
              <p className='flex items-center gap-2'><FaHandshakeSimple /> Ritiro in negozio gratuito</p>
              <p className='flex items-center gap-2'><BsFillRocketTakeoffFill /> Spedimao in tutto il mondo</p>
              <p className='flex items-center gap-2'><IoBuild /> Montaggio & installazione su richiesta</p>
              <p className='flex items-center gap-2'><RiStairsFill /> Consegna al piano? Contattaci</p>
            </div>
          </div>

          {/* Configuratore */}
          {(filteredSeats.length > 0 || filteredLegs.length > 0) ? (
            <section className="my-10">
              <h3 className="font-semibold text-2xl mb-4">Personalizza il tuo mobile</h3>
              <div className="relative w-full max-w-[600px] mx-auto mb-6">

                {/* seduta selezionata */}
                {selectedSeatImage && (
                  <img
                    src={`http://localhost:8000${selectedSeatImage}`}
                    alt="seduta"
                    className="absolute top-0 left-0 w-full h-full object-contain z-20"
                  />
                )}

                {/* gambe selezionate */}
                {selectedLegsImage && (
                  <img
                    src={`http://localhost:8000${selectedLegsImage}`}
                    alt="gambe"
                    className="absolute top-0 left-0 w-full h-full object-contain z-30"
                  />
                )}
              </div>

              {/* Sedute */}
              {filteredSeats.length > 0 && (
                <div className="mt-6">
                  <p className="mb-2 underline">Seduta</p>
                  <div className="flex flex-wrap gap-2">
                    {filteredSeats.map(seat => (
                      <img
                        key={seat.id}
                        src={`http://localhost:8000${seat.image}`}
                        alt={seat.name}
                        onClick={() => {
                          setSelectedSeatImage(seat.image)
                          setSelectedSeat(seat)
                        }}

                        className={`w-16 h-16 object-contain border-2 rounded-md cursor-pointer bg-[#F0F1EF] ${selectedSeatImage === seat.image ? 'border-[#B4654A]' : 'border-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Gambe */}
              {filteredLegs.length > 0 && (
                <div className="mt-6">
                  <p className="mb-2 underline">Gambe</p>
                  <div className="flex flex-wrap gap-2">
                    {filteredLegs.map(leg => (
                      <img
                        key={leg.id}
                        src={`http://localhost:8000${leg.image}`}
                        alt={leg.name}
                        onClick={() => {
                          setSelectedLegsImage(leg.image)
                          setSelectedLegs(leg)
                        }}

                        className={`w-16 h-16 object-contain border-2 rounded-md cursor-pointer bg-[#F0F1EF] ${selectedLegsImage === leg.image ? 'border-[#B4654A]' : 'border-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </section>
          ) : (
            <div className="my-10 text-sm text-gray-500">
              Questo mobile non è personalizzabile.
            </div>
          )}



          <div className='text-[#D6AE9E]'>
            <h3>Informazioni</h3>
            <p className='mt-2 text-sm text-[#8D8F8C]'>Materiale: {furniture.material}</p>
            <p className='text-sm text-[#8D8F8C]'>Colore: {furniture.color}</p>
            <p className='text-sm text-[#8D8F8C] capitalize'>Categoria: {furniture.category}</p>
            <p className='text-sm text-[#8D8F8C]'>Per esterni: {furniture.outdoor ? 'Sì' : 'No'}</p>

          </div>

          <div className='pt-10'>
            <button className='btn border border-[#8D8F8C] rounded-3xl bg-[#5ed34f] text-white p-5 flex items-center'
              onClick={handleAddToCart}><LuShoppingCart className='mr-2 ' />Aggiungi al Carrello</button>
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
