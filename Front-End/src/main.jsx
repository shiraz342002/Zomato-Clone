import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddResturant from './pages/AddResturant.jsx'
import Showcase from './pages/Showcase.jsx'
import SignupForm from './components/Auth/Signup.jsx'
import 'react-toastify/dist/ReactToastify.css';  
import Login from './components/Auth/Login.jsx'
import ResturantPage from './pages/ResturantPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
    <Route path="/" element={<App />} />
    <Route path="/add-restaurant" element={<AddResturant />} />
    <Route path="/showcase" element={<Showcase/>} />
    <Route path="/signup" element={<SignupForm/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/resturant" element={<ResturantPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
