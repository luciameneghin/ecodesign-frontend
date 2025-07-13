import { createContext, useState, useEffect, useContext } from 'react'

const FurnituresContext = createContext();

const FurnituresProvider = ({ children }) => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/furnitures')
      .then((res) => {
        if (!res.ok) throw new Error('Errore nel caricamento mobili');
        return res.json();
      })
      .then((data) => setFurnitures(data))
      .catch((err) => console.error(err.message))
  }, []);

  return (
    <FurnituresContext.Provider value={{ furnitures }}>
      {children}
    </FurnituresContext.Provider>
  );
}
export default FurnituresProvider;
export const useFurnitures = () => useContext(FurnituresContext)
