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
import ManufacturingPlant from './pages/ManufacturingPlant';
import Awards from './pages/Awards';
import Services from './pages/Services';
import ServiceFloatingSolar from './pages/ServiceFloatingSolar';
import Partners from './pages/Partners';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about-waaree" element={<About />} />
                <Route path="ipo" element={<Investors />} />
                <Route path="contact-waaree" element={<Contact />} />
                <Route path="manufacturing-plant" element={<ManufacturingPlant />} />
                <Route path="awards" element={<Awards />} />
                <Route path="services" element={<Services />} />
                <Route path="epc-floating-solar-solution" element={<ServiceFloatingSolar />} />
                <Route path="partners" element={<Partners />} />
            </Routes>
        </>
    );
}

export default App;
