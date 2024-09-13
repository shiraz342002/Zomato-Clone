import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddResturant from './pages/AddResturant.jsx'
import Showcase from './pages/Showcase.jsx'
import SignupForm from './components/Auth/Signup.jsx'
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';   // Import Toastify styles
import Login from './components/Auth/Login.jsx'
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

    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
