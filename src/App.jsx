import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import FurnituresProvider from './context/FurnituresContext';
import CartProvider from './context/CartContext';
import CartSidebar from './components/CartSidebar';

const App = () => {
  return (
    <FurnituresProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/furniture/:id' element={<ProductDetail />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <CartSidebar />
        </Router>
      </CartProvider>
    </FurnituresProvider>
  )
}

export default App

