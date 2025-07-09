import React from 'react'
import { FaTruckRampBox } from "react-icons/fa6";
import { GiNewShoot } from "react-icons/gi";
import { PiMailboxBold } from "react-icons/pi";

const Shipping = () => {
  return (
    <div className='container my-20 mx-auto font-thin px-20 py-10'>
      <div className='flex mx-[150px] border border-black grid-cols-3 gap-20 p-10'>
        <div>
          <div className='flex items-center mb-2'>
            <GiNewShoot className='text-3xl' />
            <h3 className='text-xl ml-3'>Respira la Natura</h3>
          </div>
          <p className='text-sm'>Cura nei dettagli ed ecosostenibilità, dai materiali al salute del pianeta</p>
        </div>
        <div>
          <div className='flex items-center mb-2'>
            <FaTruckRampBox className='text-2xl' />
            <h3 className='text-2xl ml-3'>Spedizioni</h3>
          </div>
          <p className='text-sm'>Consegna in tutto il mondo</p>
        </div>
        <div>
          <div className='flex items-center mb-2'>
            <PiMailboxBold className='text-2xl' />
            <h3 className='text-2xl mb-2 ml-3'>Iscriviti alla newsletter</h3>

          </div>
          <p className='text-sm'>Iscrivendoti alla nostra newsletter potrai rimanere aggiornato su contenuti esclusivi e accedere ad offerte speciali e personalizzate</p>
          <div className='mt-5 mb-2'>
            <input type="email" placeholder='Scrivi la tua e-mail' className='border border-black-50 p-2 mr-3' />
            <button className='border border-black p-2'>Iscriviti</button>
          </div>
          <div>
            <input type="checkbox" />
            <span className='text-sm'> Ho letto e accettato Termini e Condizioni</span>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Shipping
