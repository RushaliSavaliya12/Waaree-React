import React from 'react';
import {gsap,TweenMax, TimelineMax} from 'gsap';
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';
import InnerBannerSection from '../Components/InnerBannerSection';
import AboutExcellenceSection from '../Components/AboutpageSection/AboutExcellenceSection';
import AboutCorevalueSection from '../Components/AboutpageSection/AboutCorevalueSection';
import AboutBoardDirectorSection from '../Components/AboutpageSection/AboutBoardDirectorSection';
import AboutJoinTeamSection from '../Components/AboutpageSection/AboutJoinTeamSection';
import AboutAwardsSection from '../Components/AboutpageSection/AboutAwardsSection';
import AboutCaseStudySection from '../Components/AboutpageSection/AboutCaseStudySection';
import AboutCsrSection from '../Components/AboutpageSection/AboutCsrSection';
import AboutCompanyLogoSection from '../Components/AboutpageSection/AboutCompanyLogoSection';
import ScrollToTopBtn from '../Components/ScrollToTopBtn';
import InnerPageGsapAnimation from '../Components/InnerPageGsapAnimation';

const About = () => {

    // Scroll magic - Inner page End
        InnerPageGsapAnimation();
    // Scroll magic - Inner page End

    return(
        <>
        <Header />
        <main className="no-fullpage">
        <InnerBannerSection bgSrc="assets/images/about-banner.jpg" pageTitle="About Us"/>
        <AboutExcellenceSection />
        <AboutCorevalueSection />
        <AboutBoardDirectorSection />
        <AboutJoinTeamSection />
        <AboutAwardsSection />
        <AboutCaseStudySection />
        <AboutCsrSection />
        <AboutCompanyLogoSection />
        <Footer />
        <SocialFixedBtn />
        <ContactBtnFix />
        <ScrollToTopBtn />
        </main>
        <PrivacyPolicyPopup />
        </>
    )
}

export default About;
