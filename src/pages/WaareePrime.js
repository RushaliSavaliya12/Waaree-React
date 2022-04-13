import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import WaareePrimeTwoColSection from '../Components/InnerPagesSection/WaareePrimeTwoColSection';
import WaareePrimeStepsSection from '../Components/InnerPagesSection/WaareePrimeStepsSection';
import WaareePrimeIconBoxSection from '../Components/InnerPagesSection/WaareePrimeIconBoxSection';
import OffersSection from '../Components/InnerPagesSection/OffersSection';
import VideoGallaryTwoColSection from '../Components/InnerPagesSection/VideoGallaryTwoColSection';
import WaareePrimeHelpSection from '../Components/InnerPagesSection/WaareePrimeHelpSection';
import WaareePrimeDownloadAppSection from '../Components/InnerPagesSection/WaareePrimeDownloadAppSection';

const WaareePrime = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Waaree Prime" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <WaareePrimeTwoColSection />
        <WaareePrimeStepsSection />
        <WaareePrimeIconBoxSection />
        <OffersSection />
        <VideoGallaryTwoColSection />
        <WaareePrimeHelpSection />
        <WaareePrimeDownloadAppSection sectionBgColor="#fcfcfc" extraClassName="prime-app-section" SectiondownloadAppTitle="Download the App Now" downloadAppImageSrc="assets/images/waaree-prime-download-app-bg.jpg"/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default WaareePrime;