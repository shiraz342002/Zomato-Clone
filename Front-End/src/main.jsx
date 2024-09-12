import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddResturant from './pages/AddResturant.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
    <Route path="/" element={<App />} />
    <Route path="/add-restaurant" element={<AddResturant />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
