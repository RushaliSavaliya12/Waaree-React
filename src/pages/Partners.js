import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import PartnerDetailSection from '../Components/InnerPagesSection/PartnerDetailSection';
import CaseStudySection from '../Components/InnerPagesSection/CaseStudySection';
import FranchiseeLocationSection from '../Components/InnerPagesSection/FranchiseeLocationSection';

const Partners = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Partners" bannerText="In current market scenario solar power is most reliable and sustainable source of energy.Solar power in India is a fast developing industry. The scope of solar business in India is very high as government is giving various schemes and subsidies to opt solar power. "/>
        <PartnerDetailSection />
        <CaseStudySection />
        <FranchiseeLocationSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default Partners;
