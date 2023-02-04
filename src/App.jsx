import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgetpassword from './pages/Forgetpassword';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sellerprofile from './pages/Sellerprofile';
import Sell from './pages/Sell';
import Carsellform from './pages/Carsellform';
import ProtectRouter from './pages/ProtectRouter';
import { useState } from 'react';
import Time from './pages/Time';


export default function App() {
    const { isLoggedIn, setIsLoggedIn } = useState(false);
    return (
        <>
            <BrowserRouter>
                <Navbar  />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/singup" element={<Singup />} />
                    <Route path="/forgetpassword" element={<Forgetpassword />} />
                    <Route path="/sell" element={<Sell/>} />
                    <Route path="/buy/:id" element={<Buy />} />
                    <Route path="/sellerprofile" element={<Sellerprofile />} />
                    <Route path="/carsellform" element={<Carsellform />} />
                    <Route path="/time" element={<Time />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
