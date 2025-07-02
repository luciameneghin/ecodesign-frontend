import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 shadow-md bg-[#E0E0E0] sticky top-0 z-50 mt-10">
      <div className='flex items-center gap-2'>
        <img src="/images/logo-con-nome.png" alt="Eco-design Logo" className='h-20' />
      </div>
      <ul className='flex gap-6'>
        <li><Link to='/' className="hover:text-green-300 transition">Home</Link></li>
        <li><Link to='/prodotti' className="hover:text-green-300 transition">Prodotti</Link></li>
        <li><Link to='/chi-siamo' className="hover:text-green-300 transition">Chi siamo</Link></li>
        <li><Link to='/contatti' className="hover:text-green-300 transition">Contatti</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
