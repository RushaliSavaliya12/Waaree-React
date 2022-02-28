import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import TwoColSection from '../Components/InnerPagesSection/TwoColSection';
import TeamReviewSection from '../Components/InnerPagesSection/TeamReviewSection';
import CsrAwardSection from '../Components/InnerPagesSection/CsrAwardSection';
import ImageGallarySection from '../Components/InnerPagesSection/ImageGallarySection';
import ImageGallaryFiveCol from '../Components/InnerPagesSection/ImageGallaryFiveCol';

const Csr = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Sustainable Living (CSR)" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <TwoColSection />
        <TeamReviewSection />
        <CsrAwardSection />
        <ImageGallarySection gallarySectionTitle="CSR Gallery" gallaryType={<ImageGallaryFiveCol />}/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default Csr;
