import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Navbar from '../components/Navbar';

const stripePromise = loadStripe('pk_test_51RpVzdQWCZ5RxhJcXH5mlHYkbj5rriiVxuQ1EsXjLmgp69kjDAWzTeo7jf4F6rPIpwg6c10wZfC1JuphmYGOlzoH00yHXUqKbc');

const Checkout = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios.post('http://localhost:8000/api/create-checkout-session', {
        items: cart,
      });

      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error('Errore nel checkout:', error);
      alert('Si è verificato un errore durante il pagamento.');
    }
  };

  const getTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.unitPrice * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-2xl font-bold mb-6">Riepilogo del tuo ordine</h1>

        {cart.length === 0 ? (
          <p>Il carrello è vuoto.</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="border p-4 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantità: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Prezzo unitario: €{item.unitPrice}</p>
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              ))}
            </div>

            <p className="text-lg font-bold mb-4">Totale: € {getTotal()}</p>

            <button
              onClick={handleCheckout}
              className="bg-[#5ED34F] text-white px-6 py-3 rounded"
            >
              Paga ora
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;

