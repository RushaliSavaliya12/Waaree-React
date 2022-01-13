import React from 'react';
import FullpageHome from '../Components/FullpageHome';
import Header from '../Components/Header';
import ContactBtnFix from '../Components/ContactBtnFix';
import SocialFixedBtn from '../Components/SocialFixedBtn';
import HomeScrollToTop from '../Components/HomepageSection/HomeScrollToTop';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';


const Home = () => {
  
  return (
      <>
      
      <Header />
      <main>
        <React.StrictMode>
            <FullpageHome />
            <SocialFixedBtn />
            <ContactBtnFix />
            <HomeScrollToTop />
        </React.StrictMode>
      </main>
      <PrivacyPolicyPopup />
      
      </>
  )
}
export default Home;
