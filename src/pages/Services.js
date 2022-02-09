import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import ServiceGreenBoxSection from '../Components/InnerPagesSection/ServiceGreenBoxSection';
import ServicesGridSection from '../Components/InnerPagesSection/ServicesGridSection';
import WaareePrimeSection from '../Components/InnerPagesSection/WaareePrimeSection';
import AboutJoinTeamSection from '../Components/AboutpageSection/AboutJoinTeamSection';


const Services = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Services" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <ServiceGreenBoxSection />
        <ServicesGridSection />
        <WaareePrimeSection />
        <AboutJoinTeamSection titleTheme="light-title" joinTeamBgSrc="assets/images/waaree-expert-bg.jpg" joinTeamTitle="Join the Fastest Growing solar Industry" joinTeamContent="Opportunities that shine like sCun! Join and Grow your income by
utilizing your skills to spread solar to the remotest corners." joinBtnLink="#" BgbtnText="Waaree Expert" />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default Services;
