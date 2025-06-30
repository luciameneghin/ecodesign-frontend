# Ecodesign Frontend

Questo è il frontend del progetto **Ecodesign**, un'applicazione web che permette di visualizzare una selezione di mobili eco-sostenibili.  
I dati provengono da un backend Symfony e vengono mostrati attraverso una UI React dinamica e responsiva.

## 🔗 API Backend

L'app si connette a un'API Symfony ospitata localmente:
GET http://127.0.0.1:8000/api/furnitures


## 🖼️ Funzionalità

- Visualizza tutti i mobili presenti nel database
- Mostra nome, immagine, materiale, colore, prezzo e sostenibilità (`isGreen`)
- Caricamento automatico tramite `fetch` con `useEffect`
- UI minimale con lista responsive

## ⚙️ Tecnologie utilizzate

- React
- JavaScript (ES6+)
- HTML / CSS (base o Tailwind, se integrato)
- Symfony + MySQL (backend)

## 🚀 Come avviare il progetto

1. Clona la repo (o apri la cartella)
2. Installa le dipendenze:

npm install

Avvia il server React: npm start

Assicurati che il backend Symfony sia attivo all’indirizzo http://127.0.0.1:8000.

Prossimi sviluppi
Filtri per materiale, colore, eco-sostenibilità

Dettaglio del singolo mobile

Aggiunta a preferiti

Versione mobile ottimizzata

