import React from 'react'
import { FaCcMastercard, FaPaypal, FaCcVisa, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center gap-20'>
        <div className='bg-red-300 grid-cols-2'>
          <div>
            <h3 className='uppercase'>Il tuo account</h3>
            <p>Informazioni personali</p>
            <p>I miei ordini</p>
          </div>

          <div>
            <h3 className='uppercase'>Servizio clienti</h3>
            <p>Spedizioni</p>
            <p>Pagamento sicuro</p>
            <p>Resi</p>
          </div>

          <div className='flex'>
            <FaCcMastercard />
            <FaPaypal />
            <FaCcVisa />
          </div>

        </div>

        <div className='bg-blue-400'>
          <h2>I nostri Showroom</h2>
          <div className='flex grid-cols-2 gap-10'>
            <div>
              <h3 className='text-xl uppercase'>Roma</h3>
              <p>Via della Carbonara, 10/Z</p>
              <p>00199 Roma</p>
              <p>tel +39 09 1234567</p>
              <p>roma@ecodesign.it</p>
            </div>
            <div>
              <h3 className='text-xl uppercase'>Milano</h3>
              <p>Via della Cotoletta, 50/G</p>
              <p>20159 Milano</p>
              <p>tel +39 02 9876543</p>
              <p>milano@ecodesign.it</p>
            </div>

          </div>
        </div>
      </div>

      <footer className="w-full bg-white">
        <div className="container mx-auto  border-b border-gray-400">
          <h2 className="relative w-max font-bold uppercase text-sm pt-8">
            Informazioni
            {/* <span className="absolute bottom-0 left-0 h-px w-full bg-neutral-400" /> */}
          </h2>
        </div>

        {/* blocco principale */}
        <div className="container mx-auto px-4 md:px-10">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
            <div className="flex items-start space-x-6 text-2xl md:text-3xl">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
            </div>

            <div className="space-y-1">
              <p>Lavora con noi</p>
              <p>Chi siamo</p>
              <p>Contattaci</p>
            </div>

            <div className="space-y-1">
              <p>Termini e condizioni</p>
              <p>Privacy policy</p>
              <p>Cookie policy</p>
            </div>

            <div className="space-y-1">
              <p>Politica per la Parità di genere</p>
              <p>Politica aziendale integrata</p>
              <p>Politica aziendale conforme FSC</p>
            </div>
          </div>
        </div>

        {/* linea finale */}
        <div className="container mx-auto">
          <hr className="my-8 border-neutral-400" />
          <p className="text-center text-xs md:text-sm text-neutral-600 pb-8">
            Boiserie Riva srl Via Nemorense, 37/C, 00199 Roma | Capitale Sociale i.v. € 64.360,00 REA n° 867380 P.IVA e C.F. 05229581003<br />
            Copyright © 2024 | All rights reserved
          </p>
        </div>
      </footer>
    </div>



  )
}

export default Footer
