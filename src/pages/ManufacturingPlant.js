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
import ImageGallarySection from '../Components/InnerPagesSection/ImageGallarySection';
import VideoFullWidthSection from '../Components/InnerPagesSection/VideoFullWidthSection';
import CompanyLogoSection from '../Components/InnerPagesSection/CompanyLogoSection';
import ImageGallaryFiveCol from '../Components/InnerPagesSection/ImageGallaryFiveCol';
import VideoPlayer from '../Components/HomepageSection/SectionInnerComponent/VideoPlayer';


const ManufacturingPlant = () => {
    // Scroll magic - Inner page End
    InnerPageGsapAnimation();
    // Scroll magic - Inner page End
    
    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/investor-bg.jpg" pageTitle="Manufacturing Plant"/>
        <TwoColSection />
        <ImageGallarySection gallarySectionTitle="Lab Facility" gallaryType={<ImageGallaryFiveCol />}/>
        <VideoFullWidthSection bottomTextClass="" videoPlayerCom= {<VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1" videCoverBgSrc="assets/images/manufacture-plant-video-bg.jpg" videoCoverText="Best Business opportunities in solar industry? How to set up solar business with minimum investment?"/>}/>
        <CompanyLogoSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )

}

export default ManufacturingPlant;
