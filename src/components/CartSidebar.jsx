import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Overlay scuro cliccabile */}
      {isCartOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Il tuo carrello</h1>
              <button onClick={() => setIsCartOpen(false)} className="text-2xl">✖</button>
            </div>

            {cart.length === 0 ? (
              <p>Il carrello è vuoto.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="border-b pb-3 mb-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Prezzo: € {item.unitPrice}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="px-2 bg-gray-200 rounded">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">＋</button>
                    <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500">Rimuovi</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Totale + Checkout */}
          {cart.length > 0 && (
            <div className="mt-4">
              <p className="font-bold text-lg mb-2">Totale: € {getTotal()}</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/checkout');
                }}
                className="w-full bg-black text-white py-2 rounded"
              >
                Vai al checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;


