import React from 'react'
import { FaCcMastercard, FaPaypal, FaCcVisa, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center gap-[150px] bg-[#65705C] bg-opacity-10'>
        <div className='bg-[#D6AE9E] grid-cols-2 my-10 py-[50px] px-[50px]'>
          <div className='mb-10'>
            <h3 className='uppercase border-b border-white w-[450px] text-white mb-5'>Il tuo account</h3>
            <p className='hover:text-[#65705C] cursor-pointer'>Informazioni personali</p>
            <p className='hover:text-[#65705C] cursor-pointer'>I miei ordini</p>
          </div>

          <div className='mb-10'>
            <h3 className='uppercase border-b border-white text-white mb-5 '>Servizio clienti</h3>
            <p className='hover:text-[#65705C] cursor-pointer'>Spedizioni</p>
            <p className='hover:text-[#65705C] cursor-pointer'>Pagamento sicuro</p>
            <p className='hover:text-[#65705C] cursor-pointer'>Resi</p>
          </div>
          <div className='border-b border-white'></div>
          <div className='flex my-10 justify-around text-5xl text-white'>
            <FaCcMastercard className='hover:text-[#65705C] cursor-pointer' />
            <FaPaypal className='hover:text-[#65705C] cursor-pointer' />
            <FaCcVisa className='hover:text-[#65705C] cursor-pointer' />
          </div>

        </div>


        <div className='my-20'>
          <div className='mb-10'>
            <h2 className='text-3xl font-thin'>I nostri Showroom</h2>
          </div>
          <div className='flex grid-cols-2 gap-10'>
            <div>
              <h3 className='text-xl uppercase border-b border-black mb-4'>Roma</h3>
              <p>Via della Carbonara, 10/Z</p>
              <p>00199 Roma</p>
              <p>tel +39 09 1234567</p>
              <p>roma@ecodesign.it</p>

            </div>

            <div>
              <h3 className='text-xl uppercase border-b border-black mb-4'>Milano</h3>
              <p>Via della Cotoletta, 50/G</p>
              <p>20159 Milano</p>
              <p>tel +39 02 9876543</p>
              <p>milano@ecodesign.it</p>
            </div>
          </div>
          <div className='flex mt-[60px] justify-around'>
            <img src="/images/Footer/iso-2-1-logo-svgrepo-com.svg" alt="iso" className='w-20' />
            <img src="/images/Footer/logo-vero-legno-verde.svg" alt="" className='w-20' />
            <img src="/images/Footer/made-in-italy-icon.svg" alt="" className='w-20' />
          </div>
        </div>
      </div>

      <footer className='mt-20'>
        <div className="container mx-auto border-b border-gray-400">
          <h2 className="relative w-max font-bold uppercase text-sm pt-8">
            Informazioni
            {/* <span className="absolute bottom-0 left-0 h-px w-full bg-neutral-400" /> */}
          </h2>
        </div>

        {/* blocco principale */}
        <div className="container mx-auto px-4 md:px-10">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
            <div className="flex items-start space-x-6 text-2xl md:text-3xl">
              <FaFacebookF className='hover:text-[#5ED34F] cursor-pointer' />
              <FaInstagram className='hover:text-[#5ED34F] cursor-pointer' />
              <FaLinkedinIn className='hover:text-[#5ED34F] cursor-pointer' />
            </div>

            <div className="space-y-1">
              <p className='hover:text-[#5ED34F] cursor-pointer'>Lavora con noi</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Chi siamo</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Contattaci</p>
            </div>

            <div className="space-y-1">
              <p className='hover:text-[#5ED34F] cursor-pointer'>Termini e condizioni</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Privacy policy</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Cookie policy</p>
            </div>

            <div className="space-y-1">
              <p className='hover:text-[#5ED34F] cursor-pointer'>Politica per la Parità di genere</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Politica aziendale integrata</p>
              <p className='hover:text-[#5ED34F] cursor-pointer'>Politica aziendale conforme FSC</p>
            </div>
          </div>
        </div>

        {/* linea finale */}
        <div className="container mx-auto">
          <hr className="my-8 border-neutral-400" />
          <p className="text-center text-xs md:text-sm text-neutral-600 pb-8">
            Ecodesign srl<br />
            Copyright © 2024 | All rights reserved
          </p>
        </div>
      </footer>
    </div>



  )
}

export default Footer
