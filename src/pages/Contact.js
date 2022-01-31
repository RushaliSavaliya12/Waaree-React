import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactLocationSection from '../Components/ContactpageSection/ContactLocationSection';
import ContactHelpSection from '../Components/ContactpageSection/ContactHelpSection';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ContactFormSection from '../Components/ContactpageSection/ContactFormSection';
import ContactFooterSection from '../Components/ContactpageSection/ContactFooterSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';

const Contact = () => {

    // Scroll magic - Inner page End
        InnerPageGsapAnimation();
    // Scroll magic - Inner page End

    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/contact-banner.jpg" pageTitle="Contact Us" bannerText="To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly."/>
        <ContactFormSection />
        <ContactLocationSection />
        <ContactHelpSection />
        <ContactFooterSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )
}

export default Contact;
