import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 shadow-md bg-black sticky top-0 z-50">
      <div className='flex items-center gap-2'>
        <img src="/images/logo-con-nome.png" alt="Eco-design Logo" className='h-20' />
      </div>
      <ul className='flex gap-6'>
        <li><Link to='/' className="hover:text-green-300 transition text-white">Home</Link></li>
        <li><Link to='/prodotti' className="hover:text-green-300 transition text-white">Prodotti</Link></li>
        <li><Link to='/chi-siamo' className="hover:text-green-300 transition text-white">Chi siamo</Link></li>
        <li><Link to='/contatti' className="hover:text-green-300 transition text-white">Contatti</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
