import React from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "slick-carousel/slick/slick.css";
import 'swiper/css';
import './assets/css/app.css';
import './assets/css/responsive.css';
import { useState, useEffect } from "react";
import Home from './pages/home';
import About from './pages/About';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import ManufacturingPlant from './pages/ManufacturingPlant';
import Awards from './pages/Awards';
import Services from './pages/Services';
import ServiceFloatingSolar from './pages/ServiceFloatingSolar';
import Partners from './pages/Partners';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import PressRelease from './pages/PressRelease';
import Csr from './pages/CSR';
import WhySolar from './pages/WhySolar';
import ProductMainInverter from './pages/ProductMainInverter';
import Careers from './pages/Careers';
import TeamDetail from './pages/TeamDetail';
import Clientele from './pages/Clientele';
import LifeAtWaaree from './pages/LifeAtWaaree';
import OurCulture from './pages/OurCulture';
import Webinars from './pages/Webinars';
import Events from './pages/Events';
import WaareePrime from './pages/WaareePrime';
import MediaCoverage from './pages/MediaCoverage';
import Testimonials from './pages/Testimonials';
import Products from './pages/Products';
import WaareeExpert from './pages/WaareeExpert';
import ProductSubPVModulePoly from './pages/ProductSubPVModulePoly';
import Enquiry from './pages/Enquiry';
import ProductMainPvModule from './pages/ProductMainPvModule';
import ProductMainSolarProducts from './pages/ProductMainSolarProducts';
import ProductSubPVModuleSmallModule from './pages/ProductSubPVModuleSmallModule';
import ProductSubPVModuleMonoPerc from './pages/ProductSubPVModuleMonoPerc';
import ProductSubPVModuleBifacial from './pages/ProductSubPVModuleBifacial';
import ProductSubPVModuleFlexible from './pages/ProductSubPVModuleFlexible';
import ProductSubPVModuleBIPVModule from './pages/ProductSubPVModuleBIPVModule';
import ProductSubInverterOnGrid from './pages/ProductSubInverterOnGrid';

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
                <Route path="service-epc-floating-solar-solution" element={<ServiceFloatingSolar />} />
                <Route path="partners" element={<Partners />} />
                <Route path="videos" element={<Videos />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog-detail" element={<BlogDetail />} />
                <Route path="all-news" element={<PressRelease />} />
                <Route path="csr" element={<Csr />} />
                <Route path="why-solar" element={<WhySolar />} />
                <Route path="inverter" element={<ProductMainInverter />} />
                <Route path="careers" element={<Careers />} />
                <Route path="team-detail" element={<TeamDetail />} />
                <Route path="clientele" element={<Clientele />} />
                <Route path="life-at-waaree" element={<LifeAtWaaree />} />
                <Route path="work-culture" element={<OurCulture />} />
                <Route path="webinars" element={<Webinars />} />
                <Route path="events" element={<Events />} />
                <Route path="waaree-prime" element={<WaareePrime />} />
                <Route path="media-coverage" element={<MediaCoverage />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="products" element={<Products />} />
                <Route path="waaree-expert" element={<WaareeExpert />} />
                <Route path="pv-module-poly" element={<ProductSubPVModulePoly />} />
                <Route path="enquiry" element={<Enquiry />} />
                <Route path="pv-module" element={<ProductMainPvModule />} />
                <Route path="solar-products" element={<ProductMainSolarProducts />} />
                <Route path="small-module" element={<ProductSubPVModuleSmallModule />} />
                <Route path="mono-perc" element={<ProductSubPVModuleMonoPerc />} />
                <Route path="bifacial" element={<ProductSubPVModuleBifacial />} />
                <Route path="merlin-flexible-pv-module" element={<ProductSubPVModuleFlexible />} />
                <Route path="bipv-modules" element={<ProductSubPVModuleBIPVModule />} />
                <Route path="on-grid-inverter" element={<ProductSubInverterOnGrid />} />
            </Routes>
        </>
    );
}

export default App;
