import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { gsap} from "gsap";
import BannerSlider from './HomepageSection/SectionInnerComponent/BannerSlider';
import HomeAboutSection from './HomepageSection/HomeAboutSection';
import HomeProductSection from './HomepageSection/HomeProductSection';
import HomeServiceSection from './HomepageSection/HomeServiceSection';
import HomeTestimonialSection from './HomepageSection/HomeTestimonialSection';
import HomeAchievementSection from './HomepageSection/HomeAchievementSection';
import HomeBlogSection from './HomepageSection/HomeBlogSection';
import Footer from './Footer';

const FullpageHome = () => {
    // Gsap Animation
  var durationTime = 2.5;
  var circleDurationTime = 1;
  var staggerTime = 0.2;

    const onLeave = (origin, destination, direction) =>  {
        // console.log("After load: " + origin.isLast);
    }
    const afterLoad = (origin, destination, direction) => {

        var siteHeader = document.querySelector('.site-header');
        var scrollToTopBtn = document.querySelector('.home-scroll-top');
        var socialFixBtnClass = document.querySelector('.social-fixed-btn');
    
        if(destination.item == document.querySelector('.banner-section')){
            siteHeader.classList.remove('scrolled');
            scrollToTopBtn.classList.remove('show');
        }else{
            siteHeader.classList.add('scrolled');
            scrollToTopBtn.classList.add('show');
        }
        if(destination.item == document.querySelector('.banner-section') || destination.item == document.querySelector('.site-footer')){
          socialFixBtnClass.classList.remove('scrolled');
        }else{
          socialFixBtnClass.classList.add('scrolled');
        }
        if(destination.item == document.querySelector('.banner-section')){
          var homeBanner = gsap.timeline();
          homeBanner.to(".banner-slider-nav .slick-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=1.5");
          homeBanner.to(".banner-section .slick-dots", { durationTime, opacity: 1 },"+=1");
          homeBanner.to(".scroll-down-link", { durationTime, opacity: 1 },"+=0.1");
          homeBanner.play();

          var headerAnimation = gsap.timeline();
          headerAnimation.to(".site-header",{ circleDurationTime, opacity: 1}, "+=0.05");
          headerAnimation.play();
        }
        if(destination.item == document.querySelector('.about-section')){
            var homeAboutSection = gsap.timeline();
            homeAboutSection.to(".big-round-shape",{ circleDurationTime, scale: 1, opacity: 1,});
            homeAboutSection.to(".big-round-shape .inner-round-shape", { circleDurationTime, scale: 1, opacity: 1,});
            homeAboutSection.to(".about-section .section-title", { circleDurationTime, opacity: 1,y:0,});
            homeAboutSection.to(".about-content-text", { circleDurationTime, opacity: 1 });
            homeAboutSection.to(".about-value-box .value-box-col",{ circleDurationTime, opacity: 1, stagger: 0.1 }
            );
            homeAboutSection.play();
        }
        if(destination.item == document.querySelector('.product-section')){
            var homeProductSection = gsap.timeline();
            homeProductSection.to(".product-section .small-round-shape .small, .product-section .small-round-shape .big, .product-section .inner-round-shape .big, .product-section .inner-round-shape .small",{ circleDurationTime, scale: 1, opacity: 1,});
            homeProductSection.to(".product-section .section-title",{ durationTime, opacity: 1, y:0 });
            homeProductSection.to(".product-slider .product-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.1");
            homeProductSection.to(".product-section .swiper-button-prev,.product-section .swiper-button-next, .product-section .swiper-pagination, .product-section .view-all-btn",{ durationTime, opacity: 1 });
            homeProductSection.play();
        }
        if(destination.item == document.querySelector('.service-section')){
            var homeServiceSection = gsap.timeline();
            homeServiceSection.to(".service-section .inner-round-shape .big, .service-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
            homeServiceSection.to(".service-section .section-title",{ durationTime, opacity: 1, y:0 }, "+=0.01");
            homeServiceSection.to(".service-slider .slick-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            homeServiceSection.to(".service-section .slick-arrow, .service-section .slick-dots, .service-section .view-all-btn",{ durationTime, opacity: 1 });
            homeServiceSection.play();
        }
        if(destination.item == document.querySelector('.testimonial-section')){
            var homeTestimonialSection = gsap.timeline();
            homeTestimonialSection.to(".testimonial-section .section-title",{ durationTime, opacity: 1, y:0 });
            homeTestimonialSection.to(".testimonial-slider .slick-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            homeTestimonialSection.to(".testimonial-slider .slick-arrow, .testimonial-slider .slick-dots",{ durationTime, opacity: 1 },"+=0.01");
            homeTestimonialSection.play();
        }
        if(destination.item == document.querySelector('.achievement-section')){
            var homeAchievementSection = gsap.timeline();
            homeAchievementSection.to(".achievement-section .small-round-shape .small, .achievement-section .small-round-shape .big, .achievement-section .inner-round-shape .big, .achievement-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
            homeAchievementSection.to(".achievement-section .section-title",{ durationTime, opacity: 1, y:0 });
            homeAchievementSection.to(".masonary-row .video-grid-left",{ durationTime, opacity: 1 }, "+=0.1");
            homeAchievementSection.to(".masonary-row .inner-grid-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            homeAchievementSection.play();
        }
        if(destination.item == document.querySelector('.blog-section')){
            var homeBlogSection = gsap.timeline();
            homeBlogSection.to(".blog-section .inner-round-shape .big, .blog-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
            homeBlogSection.to(".blog-section .section-title",{ durationTime, opacity: 1, y:0 });
            homeBlogSection.to(".blog-section .blog-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            homeBlogSection.to(".blog-section .view-all-btn",{ durationTime, opacity: 1 }, "+=0.1");
            homeBlogSection.play();
        }
        if(destination.item == document.querySelector('.site-footer')){
            var footerAnimation = gsap.timeline();
            footerAnimation.to(".newsletter-section .form-wrap",{ durationTime, scale: 1,opacity: 1,});
            footerAnimation.to(".footer-top .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            footerAnimation.to(".footer-bottom .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
            footerAnimation.to(".footer-note .row",{ durationTime, scale: 1,opacity: 1,});
            footerAnimation.play();
        }
    }
    return(
        <>
            <ReactFullpage
            //fullpage options
            licenseKey = {'EE418FB3-8EF84889-B923FDA0-E09B828F'}
            autoScrolling = {true}
            scrollOverflow = {true}
            fitToSection = {true}
            easing = {'easeInOutCubic'}
            easingcss3 = {'ease'}
            autoScrolling = {true}
            fitToSectionDelay = {1000}
            scrollingSpeed = {1200}
            normalScrollElements = {'.more-menu .more-menu-inner ,.language-dropdown .dropdown-menu'}
            onLeave={onLeave.bind(this)}
            afterLoad={afterLoad.bind(this)}

            render={({ state, fullpageApi }) => {
              return (
                <>
                  <ReactFullpage.Wrapper>
                    <div className="section banner-section fp-noscroll" id="topSection">
                        <BannerSlider />
                        <div className="scroll-down-link">
                            <a href="#" className="scroll-down-btn" onClick={() => fullpageApi.moveSectionDown()}>
                              <span className="switch-icon"></span>
                              Scroll to About
                            </a>                                
                        </div>
                    </div>
                    <HomeAboutSection />
                    <HomeProductSection />
                    <HomeServiceSection />
                    <HomeTestimonialSection />
                    <HomeAchievementSection />
                    <HomeBlogSection />
                    <Footer />
                    
                  </ReactFullpage.Wrapper>
                  <div className="scroll-top-btn">
                    <a href="#" className="inner-scrollToTop" id="scrollToTop" onClick={() => fullpageApi.moveTo(1)}><i className="fas fa-chevron-up"></i></a>
                  </div>
                </>
              );
            }}
      />
        </>
    )

}

export default FullpageHome;