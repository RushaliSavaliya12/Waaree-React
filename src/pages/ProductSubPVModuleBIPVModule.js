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
import ProductRelatedInfoSection from '../Components/InnerPagesSection/ProductRelatedInfoSection';
import ProductFeaturedSection from '../Components/InnerPagesSection/ProductFeaturedSection';
import ProductAdvantageSection from '../Components/InnerPagesSection/ProductAdvantageSection';
import ContactFooterSection from '../Components/ContactpageSection/ContactFooterSection';
import VideoFullWidthSection from '../Components/InnerPagesSection/VideoFullWidthSection';
import VideoPlayer from '../Components/HomepageSection/SectionInnerComponent/VideoPlayer';
import ProductThreeColContentSection from '../Components/InnerPagesSection/ProductThreeColContentSection';
import ProductTypeContentColPoly from '../Components/InnerPagesSection/productsubpagesection/ProductTypeContentColPoly'

const ProductSubPVModuleBIPVModule = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="PV Module - Bifacial" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <SimpleContentSection />
        <ProductRelatedInfoSection />
        <ProductFeaturedSection />
        <ProductAdvantageSection />
        <ContactFooterSection btnText="Inquire Now" btnLink="#" contentText="Suspendisse nec justo egestas, venenatis ligula quis, eleifend sapien." />
        <VideoFullWidthSection fullWidth="full-width" videoPlayerCom= {<VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1" videCoverBgSrc="assets/images/product-video-cover-bg.png" videoCoverText="Waaree History | Manufacturing Process"/>}/>
        <ProductThreeColContentSection productContentCol={<ProductTypeContentColPoly/>} productsectionTitle="Poly" />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default ProductSubPVModuleBIPVModule;
