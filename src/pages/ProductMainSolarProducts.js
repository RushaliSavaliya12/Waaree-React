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
import ProductThreeColContentSection from '../Components/InnerPagesSection/ProductThreeColContentSection';
import LetUsKnowSection from '../Components/InnerPagesSection/LetUsKnowSection';
import ProductTypeSliderPvModule from  '../Components/InnerPagesSection/productmainpagesection/ProductTypeSliderPvModule'
import ProductTypeContentColSolarProduct from '../Components/InnerPagesSection/productmainpagesection/ProductTypeContentColSolarProduct';

const ProductMainSolarProducts = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Solar Products" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <SimpleContentSection />
        <ProductThreeColContentSection productContentCol={<ProductTypeContentColSolarProduct />} productsectionTitle="Solar Products"/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default ProductMainSolarProducts;
