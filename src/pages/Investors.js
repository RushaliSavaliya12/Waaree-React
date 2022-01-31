import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import InvestorAccordionSection from '../Components/InvestorPageSection/InvestorAccordionSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';

const Investors = () => {

    // Scroll magic - Inner page End
        InnerPageGsapAnimation();
    // Scroll magic - Inner page End

    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Investor Relations"/>
        <InvestorAccordionSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )
}

export default Investors;