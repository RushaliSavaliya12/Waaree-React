import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';
import VideoFullWidthSection from '../Components/InnerPagesSection/VideoFullWidthSection';
import VideoPlayer from '../Components/HomepageSection/SectionInnerComponent/VideoPlayer';
import VideoGallarySection from '../Components/InnerPagesSection/VideoGallarySection';
import VideoGallaryFourCol from '../Components/InnerPagesSection/VideoGallaryFourCol';

const Videos = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Videos" bannerText="In current market scenario solar power is most reliable and sustainable source of energy.Solar power in India is a fast developing industry. The scope of solar business in India is very high as government is giving various schemes and subsidies to opt solar power. "/>
        <VideoFullWidthSection bottomTextClass="bottom-text" videoPlayerCom= {<VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1" videCoverBgSrc="assets/images/manufacture-plant-video-bg.jpg" videoCoverText="Best Business opportunities in solar industry? How to set up solar business with minimum investment?"/>}/>
        <VideoGallarySection gallaryType={<VideoGallaryFourCol />}/>
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default Videos;
