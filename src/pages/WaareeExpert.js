import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import WaareePrimeIconBoxSection from '../Components/InnerPagesSection/WaareePrimeIconBoxSection';
import VideoGallaryTwoColSection from '../Components/InnerPagesSection/VideoGallaryTwoColSection';
import WaareePrimeDownloadAppSection from '../Components/InnerPagesSection/WaareePrimeDownloadAppSection';
import IconBoxSimpleContent from '../Components/InnerPagesSection/IconBoxSimpleContent';
import ApplyNowLabelBanner from '../Components/InnerPagesSection/ApplyNowLabelBanner';
import SkillsIconBoxSection from '../Components/InnerPagesSection/SkillsIconBoxSection';


const WaareeExpert = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Waaree Expert" bannerText="Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption."/>
        <WaareePrimeIconBoxSection iconBoxSimpleContent={<IconBoxSimpleContent />} applyNowBanner={<ApplyNowLabelBanner bgSrc="assets/images/apply-now-bg.jpg" applyIconSrc="assets/images/join-grow-icon.png" applyBannerText="Join and Grow with waaree"/>}/>
        <WaareePrimeDownloadAppSection extraClassName="expert-app-section" sectionBgColor="#edeef0" SectiondownloadAppTitle="Waaree Experts App at a Glance" SectiondownloadAppSubTitle="Scan qr code to download our app" downloadAppImageSrc="assets/images/waaree-expert-mobile.png"/>
        <VideoGallaryTwoColSection />
        <SkillsIconBoxSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default WaareeExpert;
