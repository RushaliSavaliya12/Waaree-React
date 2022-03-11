import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import TwoColSliderSection from '../Components/InnerPagesSection/TwoColSliderSection';
import CoreValueTabSection from '../Components/InnerPagesSection/CoreValueTabSection';
import TeamThoughtSection from '../Components/InnerPagesSection/TeamThoughtSection';
import AboutJoinTeamSection from '../Components/AboutpageSection/AboutJoinTeamSection';


const LifeAtWaaree = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Life at Waaree" bannerText="Waaree has acquired honors on numerous occasions from Industry, Government and Our Overseas Parnters."/>
        <TwoColSliderSection />
        <CoreValueTabSection />
        <TeamThoughtSection />
        <AboutJoinTeamSection titleTheme="light-title" joinTeamBgSrc="assets/images/join-team-banner.png" joinTeamTitle="Join our Team" joinTeamContent="We are not just another power company, we believe in people passionate about a sustainable change in the energy landscape globally, people just like you. Welcome to our world." joinBtnLink="#" BgbtnText="View Current Position"/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default LifeAtWaaree;
