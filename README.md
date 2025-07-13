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
- HTML / CSS (base o Tailwind)
- PHP + Symfony + MySQL (backend)

:house: Homepage
<img width="1912" height="4919" alt="Home-ecodesign" src="https://github.com/user-attachments/assets/1f27bea1-68c5-4252-b18a-3f4a1fa73f06" />

🛋️ Pagina di dettaglio del prodotto (:construction: work in progress... :construction_worker:
<img width="1912" height="2809" alt="ProductDetail-page-ecodesign" src="https://github.com/user-attachments/assets/2dd2247d-c760-43ed-925c-b7d7fba86533" />

