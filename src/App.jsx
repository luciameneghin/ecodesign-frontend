import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import FurnituresProvider from './context/FurnituresContext';

const App = () => {
  return (
    <FurnituresProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/furniture/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </FurnituresProvider>
  )
}

export default App

