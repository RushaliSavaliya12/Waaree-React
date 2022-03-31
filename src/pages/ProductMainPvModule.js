import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import SimpleContentSection from '../Components/InnerPagesSection/SimpleContentSection';
import ProductTypeSliderSection from '../Components/InnerPagesSection/productmainpagesection/ProductTypeSliderSection';
import ProductTypeContentSliderSection from '../Components/InnerPagesSection/productmainpagesection/ProductTypeContentSliderSection';
import LetUsKnowSection from '../Components/InnerPagesSection/LetUsKnowSection';
import ProductTypeSliderPvModule from  '../Components/InnerPagesSection/productmainpagesection/ProductTypeSliderPvModule'
import ProductTypeContentSliderPvModule from '../Components/InnerPagesSection/productmainpagesection/ProductTypeContentSliderPvModule';

const ProductMainPvModule = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Pv Module" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <SimpleContentSection />
        <ProductTypeSliderSection productSlider={<ProductTypeSliderPvModule />} SliderbgSrc="assets/images/product-type-slider-sticky-bg.jpg"/>
        <ProductTypeContentSliderSection contentTypeSlider={<ProductTypeContentSliderPvModule />} productTitle="Pv Module"/>
        <LetUsKnowSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default ProductMainPvModule;
