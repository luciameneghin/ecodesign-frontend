import React from 'react'
import { FaLeaf, FaTruckRampBox } from "react-icons/fa6";

const Shipping = () => {
  return (
    <div className='container my-20 mx-auto border border-black font-thin'>
      <div className='flex grid-cols-3 gap-20 px-20 py-10'>
        <div className=''>
          <div className='flex items-center'>
            <FaLeaf className='text-2xl' />
            <h3 className='text-2xl ml-3'>Respira la Natura</h3>
          </div>
          <p>Cura nei dettagli e econosostenibilità</p>
        </div>
        <div>
          <div className='flex items-center'>
            <FaTruckRampBox className='text-2xl' />
            <h3 className='text-2xl ml-3'>Spedizioni</h3>
          </div>
          <p>Consegna in tutto il mondo</p>
        </div>
        <div>
          <h3 className='text-2xl'>Iscriviti alla newsletter</h3>
          <p>Iscrivendoti alla nostra newsletter potrai rimanere aggiornato su contenuti esclusivi e accedere ad offerte speciali e personalizzate</p>
          <div className='mt-5 mb-2'>
            <input type="email" placeholder='Scrivi la tua e-mail' className='border border-black-50 p-2 mr-3' />
            <button className='border border-black p-2'>Iscriviti</button>
          </div>
          <div>
            <input type="checkbox" />
            <span> Ho letto e accettato Termini e Condizioni</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Shipping
