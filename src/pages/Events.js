import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import UpComingEventSection from '../Components/InnerPagesSection/UpComingEventSection';
import PastEventSection from '../Components/InnerPagesSection/PastEventSection';
import ImageGallaryFiveCol from '../Components/InnerPagesSection/ImageGallaryFiveCol';
import ImageGallarySection from '../Components/InnerPagesSection/ImageGallarySection';

const Events = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Events" bannerText="In current market scenario solar power is most reliable and sustainable source of energy.Solar power in India is a fast developing industry. The scope of solar business in India is very high as government is giving various schemes and subsidies to opt solar power. "/>
        <UpComingEventSection />
        <PastEventSection />
        <ImageGallarySection gallarySectionTitle="Event Gallery" gallaryType={<ImageGallaryFiveCol />}/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default Events;
