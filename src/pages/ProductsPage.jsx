import React from 'react'
import { useFurnitures } from '../context/FurnituresContext';
import Navbar from '../components/Navbar'
import HomeInfoSection from '../components/HomeInfoSection'
import Shipping from '../components/Shipping'
import Footer from '../components/Footer'

const ProductsPage = () => {
  const { furnitures } = useFurnitures();

  return (
    <div>
      <Navbar />
      <div className='container py-20 mx-auto'>
        <h1 className='text-4xl font-bold text-center pb-8'>Il nostro catalogo completo</h1>
        <p className='text-2xl text-center font-thin mb-20'>Immergiti nel nostro catalogo e trova il mobile più adatto a te, ecosostenibile ed artigianale. </p>

        {[...new Set(furnitures.map(f => f.category))
        ].map(category => (
          <div key={category} className="mb-20">
            <h2 className="text-xl font-bold mb-6 border-b border-gray-300 pb-2 uppercase">{category}</h2>

            <div className="grid grid-cols-4 gap-6">
              {furnitures
                .filter(f => f.category === category)
                .map(furniture => (
                  <div key={furniture.id} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
                    <img
                      src={`http://localhost:8000${furniture.image}`}
                      alt={furniture.name}
                      className="w-full h-40 object-contain mb-4"
                    />
                    <h4 className="text-md font-semibold mb-1">{furniture.name}</h4>
                    <p className="text-sm text-gray-700">€ {furniture.price}.00</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Shipping />
      <Footer />
    </div>
  )
}

export default ProductsPage
