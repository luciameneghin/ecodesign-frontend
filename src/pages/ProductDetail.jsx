import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Shipping from '../components/Shipping'
import Footer from '../components/Footer'

const ProductDetail = () => {
  const [furniture, setFurniture] = useState();

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

  return (

    <div>
      <Navbar />
      <div className='container mx-auto py-10 grid grid-cols-2'>
        <div>
          <h1 className='text-3xl font-bold '>{furniture.name}</h1>
          <div>
            <p>{furniture.category}</p>
            <p className='mt-2 font-semibold text-xl'>{furniture.price} €</p>
          </div>
          <img src={`http://localhost:8000/${furniture.image}`} alt={furniture.name} className='w-1/2 mx-auto my-6' />
        </div>
        <div>
          <div className='my-20'>
            <h3 className='font-semibold'>Descrizione</h3>
            <p className='mt-4'>{furniture.description}</p>
          </div>

          <p className='mt-2 text-sm text-gray-600'>Materiale: {furniture.material}</p>
          <p className='text-sm text-gray-600'>Colore: {furniture.color}</p>
          <p className='text-sm text-gray-600'>Categoria: {furniture.category}</p>
          <p className='text-sm text-gray-600'>Per esterni: {furniture.outdoor ? 'Sì' : 'No'}</p>
        </div>
      </div>

      <Shipping />
      <Footer />
    </div >
  )
}

export default ProductDetail
