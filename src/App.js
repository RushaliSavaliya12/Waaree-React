import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "slick-carousel/slick/slick.css";
import 'swiper/css';
import './assets/css/app.css';
import './assets/css/responsive.css';
import Home from './pages/home';
import About from './pages/About';
import Investors from './pages/Investors';
import Contact from './pages/Contact';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about-waaree" element={<About />} />
                <Route path="ipo" element={<Investors />} />
                <Route path="contact-waaree" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
