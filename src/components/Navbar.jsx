import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 shadow-md bg-[#222725] sticky top-0 z-50">
      <div className='flex items-center gap-2' onClick={handleNavigate}>
        <img src="/images/logo-con-nome.png" alt="Eco-design Logo" className='h-20 cursor-pointer' />
      </div>
      <ul className='flex gap-6'>
        <li><Link to='/' className="hover:text-[#5ED34F] transition text-white">Home</Link></li>
        <li><Link to='/prodotti' className="hover:text-[#5ED34F] transition text-white">Prodotti</Link></li>
        <li><Link to='/chi-siamo' className="hover:text-[#5ED34F] transition text-white">Chi siamo</Link></li>
        <li><Link to='/contatti' className="hover:text-[#5ED34F] transition text-white">Contatti</Link></li>
        <li><Link to='/carrello' className="hover:text-[#5ED34F] transition text-white"><LuShoppingCart /></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
