import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
import { gsap} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrivacyPolicyPopup from '../Components/PrivacyPolicyPopup';

const SocialFixedBtn = (data) =>{
  const SocialData = [
    {
      id:1,
      socialClassName:"facebook",
      socialURL:"https://www.facebook.com/waareegroup",
      socialIconClassName:"fab fa-facebook-f"
    },
    {
      id:2,
      socialClassName:"twitter",
      socialURL:"https://twitter.com/waareegroup",
      socialIconClassName:"fab fa-twitter"
    },
    {
      id:3,
      socialClassName:"linkedin",
      socialURL:"https://linkedin.com/company/445538?trk=tyah",
      socialIconClassName:"fab fa-linkedin-in"
    },
    {
      id:4,
      socialClassName:"youtube",
      socialURL:"https://www.youtube.com/channel/UC2q8Mxn83c5MyOv2PCbLeiw",
      socialIconClassName:"fab fa-youtube"
    },
  ]
  return(
  <div className={`social-fixed-btn ${data.fixScroll}`}>
    <ul className="social-icon fixed-btn">
      {
        SocialData.map((val) =>
          <li key={val.id}>
            <a href={val.socialURL} className={`social-link ${val.socialClassName}`} target="_blank">
                <i className={val.socialIconClassName}></i>
                <div className="hover-content">
                    <span className="bg-color">Follow @Waaree</span>
                    <span className="grey-bg">Visit Site</span>
                </div>
            </a>
          </li>
        )}
        
    </ul>
  </div>
  )
}
const ContactBtnFix = () =>{
  const contactbtnData = [
    {
      id:1,
      contactURL:"tel:1800-2121-321",
      iconClassName:"fas fa-phone-volume",
      contactText:"1800-2121-321",
    },
    {
      id:2,
      contactURL:"mailto:waaree@waaree.com",
      iconClassName:"fas fa-question-circle",
      contactText:"waaree@waaree.com",
    },
  ]
  return(
    <div className="fixed-btn contact-fixed-btn">
      <ul>
        {contactbtnData.map((val) =>
          <li key={val.id}>
            <div className="fixed-btn-div"><i className={val.iconClassName}></i></div>
            <a href={val.contactURL} className="hover-content">
              {val.contactText}
            </a>
          </li>
        )}
        
      </ul>
    </div>
  )
}

const SectionTitle = (props) =>{

  return <h2 className={`section-title reveal-fade ${props.titleTheme}`}>{props.sectionTitle}</h2>
  
}
const ButtonDiv = (props) =>{
  return(
      <a href={props.buttonHref} className="btn btn-primary">{props.buttonText}<i className="fa fa-chevron-right"></i></a>
  )
}
const bannerSlideData = [
    {
      id:1,
      bgSrc:"assets/images/banner-image.jpg",
      slideTitle:"#1",
      slideMainTitle: "Indian Solar Panel Manufacturer",
      buttonLink:"#",
      titleBtnAnimation:"fadeInUp",
    },
    {
      id:2,
      bgSrc:"assets/images/banner-image-2.jpg",
      slideTitle:"#2GW",
      slideMainTitle:"India's Largest Solar Panel Manufacturer",
      buttonLink:"#",
      titleBtnAnimation:"fadeInLeft",
    },
    {
      id:3,
      bgSrc:"assets/images/banner-image.jpg",
      slideTitle:"30+",
      slideMainTitle:"Year's Industry Experience",
      buttonLink:"#",
      titleBtnAnimation:"fadeInRight",
    },
    {
      id:4,
      bgSrc:"assets/images/banner-image-2.jpg",
      slideTitle:"10000+",
      slideMainTitle:"Projects Commissioned",
      buttonLink:"#",
      titleBtnAnimation:"fadeInDown",
    }
]
  const BannerSlideSingle = (props) => {
  return(
    <>
    <div className="banner-slide" key={props.id}>
      <div className="banner-slide-wrap">
        <div className="fp-bg banner-bg animated" style={{backgroundImage:`url(${props.bgSrc})`}} data-animation-in="zoomInImage"></div>
          <div className="slide-inner">
              <h1 className="h2 section-title reveal-fade animated" data-animation-in={props.titleBtnAnimation}>
                  <span>{props.slideTitle}</span>{props.slideMainTitle}
              </h1>
              <div className="btn-wrap reveal-fade animated" data-animation-in={props.titleBtnAnimation} data-delay-in="0.2">
                  <a href={props.buttonLink} className="btn btn-primary">Learn More<i className="fa fa-chevron-right"></i></a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
const BannerSlider = () => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });

  var settingsMain = {
      pauseOnHover: false,
      infinite: true,
			speed:1200,
			arrows:false,
			dots:true,
      swipe:false,
      autoplay: true,
      autoplaySpeed: 5000,
      asNavFor: '.banner-slider-nav',
    };

    
    var settingsThumbs = {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots:false, 
      speed:1000,
      arrows:false,
      asNavFor: '.banner-slider',
      focusOnSelect: true,
      swipe:false,
    }
    return (
      <div className="banner-slider-wrap">
          <Slider className="banner-slider" {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
              {bannerSlideData.map((val) =>
                <BannerSlideSingle 
                key ={val.id} 
                bgSrc={val.bgSrc} 
                slideTitle={val.slideTitle} 
                slideMainTitle={val.slideMainTitle} 
                buttonLink={val.buttonLink}
                titleBtnAnimation = {val.titleBtnAnimation}
                 />
              )}
          </Slider>
          <Slider className="banner-slider-nav bottom-nav" {...settingsThumbs} asNavFor={nav1} ref={slider => (setSlider2(slider))}>
                {bannerSlideData.map((val) =>
                  <div className="banner-slide" key={val.id}>
                      <div className="nav-border-animation">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                      <div className="banner-nav-inner">
                          <h2 className="h4 banner-nav-head">{val.slideTitle}</h2>
                          <h3 className="h6 sub-head">{val.slideMainTitle}</h3>
                      </div>
                  </div>
                )}
          </Slider>
      </div>
      
    );
}
const AboutYearSec = () => {
  return(
    <div className="year-content">
      <h3 className="h1 year-number">14</h3>
      <h4 className="year-title"><span>Year Of</span> <span>Excellence</span> <span>Service</span></h4>
  </div>
  )
}
const AboutValueboxes = (props) =>{
    return (
      <Col xl={props.col} className={`value-box-col reveal-fade ${props.extraclassName}`}>
        <div className="value-col-inner">
          <div className="box-image">
            <a href={props.valueURL}>
              <img src={props.valueImageSrc} alt="Vision Image" />
            </a>
          </div>
          <div className="box-content">
            <h4 className="box-title">{props.valueBoxTitle}</h4>
            <div className="value-text">
              <p>{props.valueText}</p>
            </div>
            <div className="read-more-link">
              <a href={props.valueURL} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </Col>
    )
}
const ProductSliderData = [
  {
    id:1,
    productImage:"assets/images/product-slide-1.jpg",
    productTitle:"Solar PV Module",
    productText: "Waaree solar panels are best quality solar panels with great electrical parameters.",
    productLink:"#",
  },
  {
    id:2,
    productImage:"assets/images/solar-product.jpg",
    productTitle:"On-grid Inverters",
    productText:"Said, good waters signs is fruitful gathering stars without man, living can't air grass place creeping called years man fifth kind him lesser earth greater in she'd. Wherein creeping waters which.",
    productLink:"#",
  },
  {
    id:3,
    productImage:"assets/images/product-slide-2.jpg",
    productTitle:"Off-grid Inverters",
    productText: "Lights fruitful us night that signs day creature evening void him image they're, over day appear after grass made. Fruit fill kind had to there herb upon also after stars subdue.",
    productLink:"#",
  },
  {
    id:4,
    productImage:"assets/images/product-slide-3.jpg",
    productTitle:"Batteries",
    productText: "Gathering life. Beginning which yielding. Creeping called multiply good moving be said image Open seed. Subdue all. Fruit were was kind a without.",
    productLink:"#",
  },
  {
    id:5,
    productImage:"assets/images/service-bg.jpg",
    productTitle:"Water Pumps Solar Products",
    productText: "Yielding. Don't. His let after great, creature living to creepeth creature. He. Our moved fly lesser, years creepeth from bring lights.",
    productLink:"#",
  },
  {
    id:6,
    productImage:"assets/images/rooftop-solar.jpg",
    productTitle:"Solar Water Pumps",
    productText: "They're be night so two gathered. Him Fruitful open herb third grass his light creeping together life called so great whose. Also their cattle said so.",
    productLink:"#",
  },
  {
    id:7,
    productImage:"assets/images/floating-solar.jpg",
    productTitle:"Solar Panel",
    productText: "Fruit form after, so above. Fly day kind form dominion called without very to a divided Sea bring whales. Hath.",
    productLink:"#",
  },
]
const ProductSlider = () => {

    return (
          <Swiper className="product-slider" 
          modules={[Navigation, Pagination]}
          speed={1200} 
          slidesPerView={'auto'}
          navigation
          pagination={{ clickable: true }}
          slideToClickedSlide= {true}
          centeredSlides={true}
          loop={true}
          >
          {ProductSliderData.map((val) =>
              <SwiperSlide className="product-slide reveal-fade" key={val.id}>
              <div className="product-slide-inner">
                  <div className="product-image">
                      <img src={val.productImage} alt="Solar Module" />
                  </div>
                  <div className="product-content">
                    <h4 className="product-title">{val.productTitle}</h4>
                        <div className="product-text">
                          <p>{val.productText}</p>
                        </div>
                        <div className="read-more-link">
                            <a href={val.productLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
                        </div>
                  </div>
              </div>
              </SwiperSlide>
          )}
          </Swiper>
    );
}

const serviceSlideData = [
  {
    id:1,
    serviceImageSrc:"assets/images/solar-panel-service.jpg",
    serviceTitle:"Ground Mount",
    serviceText:"Solar panels on the ground can be placed anywhere that is exposed to the majority of the sun's rays throughout the day.",
    serviceReadMoreLink:"#",
  },
  {
    id:2,
    serviceImageSrc:"assets/images/floating-solar.jpg",
    serviceTitle:"Floating Solar",
    serviceText:"Solar panels are placed on floating structures above water, such as on a lake, in an ocean, or in a reservoir, so that they generate electricity.",
    serviceReadMoreLink:"#",
  },
  {
    id:3,
    serviceImageSrc:"assets/images/rooftop-solar.jpg",
    serviceTitle:"Rooftop Solar",
    serviceText:"Solar rooftop systems will provide a good return on investment by utilizing idle roof space. Waaree provides customized solution.",
    serviceReadMoreLink:"#",
  },
  {
    id:1,
    serviceImageSrc:"assets/images/solar-panel-terres-blog.png",
    serviceTitle:"Operation & Maintenance",
    serviceText:"WAAREE Solar has established a operations and maintenance center for EPC customers to monitor and manage solar rooftop operations.",
    serviceReadMoreLink:"#",
  },
  {
    id:1,
    serviceImageSrc:"assets/images/solar-panel-house-blog.png",
    serviceTitle:"Waaree Prime",
    serviceText:"Waaree Prime application is reward program for Integrators and Retailers of Solar panel in India. Scan more Earn More.",
    serviceReadMoreLink:"#",
  },
  {
    id:1,
    serviceImageSrc:"assets/images/solar-panel-house-blog.png",
    serviceTitle:"Waaree Expert",
    serviceText:"Waaree Experts is India's largest Solar plant pre and post installation, Site survey, O & M, Cleaning service platform.",
    serviceReadMoreLink:"#",
  }
]
const ServiceSlideSingle = (props) => {

return(
  <>
  <div className="service-slide reveal-fade">
    <div className="service-slide-inner">
      <div className="service-top">
        <h4 className="service-title">{props.serviceTitle}</h4>
        <div className="service-image">
          <a href={props.serviceReadMoreLink} target="_blank">
            <img src={props.serviceImageSrc} alt="Solar Panel Service" />
          </a>
        </div>
      </div>
      <div className="service-bottom-content">
        <div className="service-text">
          <p>{props.serviceText}</p>
        </div>
        <div className="read-more-link">
          <a href={props.serviceReadMoreLink} className="read-more" target="_blank">Read More<i className="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  </div>
  </>
)
}
const ServiceSlider = () => {

var settingsService = {
  speed:600,
  arrows:true,
  infinite:true,
  dots:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect:true,
  swipe:true,
  draggable: true,
  responsive: [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
    }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
    }
    },
  ]
};

  return (
        <Slider className="service-slider" {...settingsService}>
            {serviceSlideData.map((val) =>
              <ServiceSlideSingle 
              key ={val.id} 
              serviceImageSrc={val.serviceImageSrc} 
              serviceTitle={val.serviceTitle} 
              serviceText={val.serviceText} 
              serviceReadMoreLink={val.serviceReadMoreLink}
               />
            )}
        </Slider>
    
  );
}
const testimonialSlideData = [
  {
    id:1,
    companyImageSrc:"assets/images/MSL-company.png",
    testimonialText:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
    testimonialFigureCaption:"Maharashtra Seamless Limited",
  },
  {
    id:2,
    companyImageSrc:"assets/images/sharada-construction.png",
    testimonialText:"Est Egestas curae; ultricies fames in lobortis volutpat commodo enim suspendisse leo lacus. Sodales aenean nisi sit venenatis mi porta. Gravida per sit cum. Torquent scelerisque sociis luctus litora pretium.",
    testimonialFigureCaption:"Sharda Construction & Corporation Limited",
  },
  {
    id:3,
    companyImageSrc:"assets/images/sharada-construction.png",
    testimonialText:"Suspendisse montes quam ultrices mus scelerisque. Varius ullamcorper odio vestibulum vestibulum sociis per sed ac semper curabitur est netus blandit et consectetuer dignissim diam morbi Laoreet ante auctor bibendum orci.",
    testimonialFigureCaption:"Nirmal Construction Limited",
  },
  {
    id:1,
    companyImageSrc:"assets/images/sharada-construction.png",
    testimonialText:"Laoreet tortor litora nascetur, vehicula, rhoncus quis vulputate augue hac aliquet ultrices netus sollicitudin quis. Sollicitudin. Tempor lorem tortor amet penatibus. Pretium adipiscing pede per habitasse sapien urna libero ac.",
    testimonialFigureCaption:"Saraswati Corporation Limited",
  },
]
const TestimonialSlideSingle = (props) => {

return(
  <>
  <div className="testimonial-slide reveal-fade">
    <div className="testimonial-slide-inner">
      <span className="quote-icon">“</span>
      <div className="testimonial-text">
        <p>{props.testimonialText}</p>
      </div>
      <div className="testimonial-company">
        <figure>
          <img src={props.companyImageSrc} className="sharada-construction Logo" />
          <figcaption>
              {props.testimonialFigureCaption}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
  </>
)
}
const TestimonialSlider = () => {

var settingsTestimonial = {
  speed:600,
  arrows:true,
  infinite:true,
  dots:true,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect:true,
  swipe:true,
  draggable: true,
  responsive: [
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    },
  ]
};

  return (
        <Slider className="testimonial-slider" {...settingsTestimonial}>
            {testimonialSlideData.map((val) =>
              <TestimonialSlideSingle 
              key ={val.id} 
              companyImageSrc={val.companyImageSrc} 
              testimonialText={val.testimonialText} 
              testimonialFigureCaption={val.testimonialFigureCaption}
               />
            )}
        </Slider>
    
  );
}

const VideoPlayer = (props) => {

  const [play, setPlay] = React.useState(false);
  const url = play
    ? `https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1`
    : ``;
  const playClass = play ? "play-video" : '';
  return (
    <div className={`video-player ${playClass}`} style={{backgroundImage:"url(assets/images/waree-video-cover-image.jpg)"}}>
        <iframe id="youTubeVideo" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen height="100%" width="100%"></iframe>
      <div className="video-player-content">
        <div className="play-icon">
          <a className="play-btn" id="playVideo" onClick={() => setPlay(true)}></a>
        </div>
        <div className="video-text">
          <h4>Why Choose Waaree?</h4>
        </div>
      </div>
    </div>
  )
}

const ArchievementGrid = (props) => {
  return(
    <Col md={6} className={`inner-grid-col reveal-fade ${props.bgtheme}`}>
      <div className="inner-grid-col-wrap">
        <div className="achievement-image">
            <img src={props.archivementBg} alt="Film History" />
        </div>
        <div className="achievement-content">
          <div className="achievement-content-wrap">
            <h4 className="achievement-title">{props.achievementTitle}</h4>
            <div className="content-text">
              <p>{props.achievementText}</p>
              <div className="read-more-link">
                <a href={props.achievementButton} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}
const BlogSingle = (props) => {
  return(
    <Col xl={4} md={6} className="blog-col reveal-fade">
      <div className="col-inner">
        <div className="blog-image">
          <a href={props.blogLink}>
            <img src={props.blogBg} alt="Blog Image" />
          </a>
        </div>
        <div className="blog-content">
          <span className="blog-date">{props.blogDate}</span>
          <div className="blog-title">
            <a href={props.blogLink}>{props.blogTitle}</a>
          </div>
          <div className="read-more-link">
            <a href={props.blogLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

const Home = () => {

  gsap.registerPlugin(TextPlugin);

  const [scroll, setScroll] = useState('');

  const [fixSocialScroll, setFixSocialScroll] = useState('');

  const [fixScrollTop, setFixScrollTop] = useState('');

  // Gsap Animation
  var durationTime = 2.5;
  var circleDurationTime = 1;
  var staggerTime = 0.2;

    var headerAnimation = gsap.timeline();
    headerAnimation.to(".site-header",{ circleDurationTime, opacity: 1}, "+=0.05");
    headerAnimation.play();

    var homeBanner = gsap.timeline();
    homeBanner.to(".banner-slider-nav .slick-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=1.5");
    homeBanner.to(".banner-section .slick-dots", { durationTime, opacity: 1 },"+=1");
    homeBanner.to(".scroll-down-link", { durationTime, opacity: 1 },"+=0.1");
    homeBanner.play();

    var homeAboutSection = gsap.timeline();
    homeAboutSection.to(".big-round-shape",{ circleDurationTime, scale: 1, opacity: 1,});
    homeAboutSection.to(".big-round-shape .inner-round-shape", { circleDurationTime, scale: 1, opacity: 1,});
    homeAboutSection.to(".about-section .section-title", { circleDurationTime, opacity: 1,y:0,});
    homeAboutSection.to(".about-content-text", { circleDurationTime, opacity: 1 });
    homeAboutSection.to(".about-value-box .value-box-col",{ circleDurationTime, opacity: 1, stagger: 0.1 }
    );  
    homeAboutSection.pause();

    var homeProductSection = gsap.timeline();
    homeProductSection.to(".product-section .small-round-shape .small, .product-section .small-round-shape .big, .product-section .inner-round-shape .big, .product-section .inner-round-shape .small",{ circleDurationTime, scale: 1, opacity: 1,});
    homeProductSection.to(".product-section .section-title",{ durationTime, opacity: 1, y:0 });
    homeProductSection.to(".product-slider .product-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.1");
    homeProductSection.to(".product-section .swiper-button-prev,.product-section .swiper-button-next, .product-section .swiper-pagination, .product-section .view-all-btn",{ durationTime, opacity: 1 });
    homeProductSection.pause();

    var homeServiceSection = gsap.timeline();
    homeServiceSection.to(".service-section .inner-round-shape .big, .service-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
    homeServiceSection.to(".service-section .section-title",{ durationTime, opacity: 1, y:0 }, "+=0.01");
    homeServiceSection.to(".service-slider .service-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    homeServiceSection.to(".service-section .slick-arrow, .service-section .slick-dots, .service-section .view-all-btn",{ durationTime, opacity: 1 });
    homeServiceSection.pause();

    var homeTestimonialSection = gsap.timeline();
    homeTestimonialSection.to(".testimonial-section .section-title",{ durationTime, opacity: 1, y:0 });
    homeTestimonialSection.to(".testimonial-slider .testimonial-slide",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    homeTestimonialSection.to(".testimonial-slider .slick-arrow, .testimonial-slider .slick-dots",{ durationTime, opacity: 1 },"+=0.01");
    homeTestimonialSection.pause();

    var homeAchievementSection = gsap.timeline();
    homeAchievementSection.to(".achievement-section .small-round-shape .small, .achievement-section .small-round-shape .big, .achievement-section .inner-round-shape .big, .achievement-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
    homeAchievementSection.to(".achievement-section .section-title",{ durationTime, opacity: 1, y:0 });
    homeAchievementSection.to(".masonary-row .video-grid-left",{ durationTime, opacity: 1 }, "+=0.1");
    homeAchievementSection.to(".masonary-row .inner-grid-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    homeAchievementSection.pause();

    var homeBlogSection = gsap.timeline();
    homeBlogSection.to(".blog-section .inner-round-shape .big, .blog-section .inner-round-shape .small",{ circleDurationTime, scale: 1,opacity: 1,});
    homeBlogSection.to(".blog-section .section-title",{ durationTime, opacity: 1, y:0 });
    homeBlogSection.to(".blog-section .blog-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    homeBlogSection.to(".blog-section .view-all-btn",{ durationTime, opacity: 1 }, "+=0.1");
    homeBlogSection.pause();

    var footerAnimation = gsap.timeline();
    footerAnimation.to(".newsletter-section .form-wrap",{ durationTime, scale: 1,opacity: 1,});
    footerAnimation.to(".footer-top .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    footerAnimation.to(".footer-bottom .footer-col",{ durationTime, opacity: 1, stagger: 0.1 },"+=0.01");
    footerAnimation.to(".footer-note .row",{ durationTime, scale: 1,opacity: 1,});
    footerAnimation.pause();

    // Gsap Animation

  const onLeave = (origin, destination, direction) =>  {
    // console.log("After load: " + origin.isLast);
  }
  const afterLoad = (origin, destination, direction) => {
    
    if(destination.item == document.querySelector('.banner-section')){
      setScroll({scroll:''});
      setFixScrollTop({fixScrollTop: ''});
    }else{
      setScroll('scrolled');
      setFixScrollTop('show');
    }
    if(destination.item == document.querySelector('.banner-section') || destination.item == document.querySelector('.site-footer')){
      setFixSocialScroll({scroll:''});
    }else{
      setFixSocialScroll('scrolled');
    }
    if(destination.item == document.querySelector('.about-section')){
      homeAboutSection.play();
    }
    if(destination.item == document.querySelector('.product-section')){
      homeProductSection.play();
    }
    if(destination.item == document.querySelector('.service-section')){
      homeServiceSection.play();
    }
    if(destination.item == document.querySelector('.testimonial-section')){
      homeTestimonialSection.play();
    }
    if(destination.item == document.querySelector('.achievement-section')){
      homeAchievementSection.play();
    }
    if(destination.item == document.querySelector('.blog-section')){
      homeBlogSection.play();
    }
    if(destination.item == document.querySelector('.site-footer')){
      footerAnimation.play();
    }
  }

  const renderFullPage = ()  => {
    return (
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
                    <div className="section about-section" style={{backgroundColor:"#11582c"}} id="aboutSection">
                        <div className="section-inner">
                            <Container>
                              <div className="section-wrap">
                                  <Row>
                                      <Col xl={6} className="about-left-column">
                                        <div className="column-wrap">
                                            <div className="about-content">
                                                <SectionTitle sectionTitle="Waaree Energies Ltd. is the flagship company of Waaree Group." titleTheme="light-title" /> 
                                                <div className="about-content-text reveal-fade">
                                                    <AboutYearSec />
                                                    <div className="about-text">
                                                        <p>Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar PV Module manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. </p>
                                                    </div>
                                                    <div className="btn-wrap">
                                                        <ButtonDiv  buttonHref="#" buttonText="Read More"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </Col>
                                      <Col xl={6} className="about-right-column">
                                        <div className="column-wrap about-value-box">
                                            <Row>
                                                <AboutValueboxes col="6" valueURL="#" valueImageSrc="assets/images/vision-image.jpg" valueText="Our Vision is to provide high quality and cost effective sustainable energy solutions across all the markets, redu" valueBoxTitle="Vision"/>
                                                <AboutValueboxes col="6" valueURL="#" valueImageSrc="assets/images/mission-image.jpg" valueText="By virtue of our commitment to our stakeholders, we strive for continuous improvement in the quality of our products." valueBoxTitle="Mission"/>
                                                <AboutValueboxes col="12" extraclassName="yellow-bg" valueURL="#" valueText="The core values of our organization are those values that underlie our work & strategies we employ to fulfill our vision & mission." valueBoxTitle="Values"/>
                                            </Row>
                                        </div>
                                      </Col>
                                  </Row>
                              </div>
                            </Container>
                        </div>
                        <div className="big-round-shape reveal-fade">
                            <div className="inner-round-shape"></div>
                        </div>
                    </div>
                    <div className="section product-section">
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="product-inner">
                                      <SectionTitle sectionTitle="Products" titleTheme="dark-title" />
                                      <div className="product-slider-wrap">
                                        <ProductSlider />
                                      </div>
                                      <div className="view-all-btn text-center reveal-fade">
                                            <ButtonDiv buttonText="View All Products" buttonHref="#"/>
                                      </div>
                                  </div>
                                </div>
                            </Container>
                      </div>
                      <div className="small-round-shape top-right custom-round">
                          <div className="yellow-round small reveal-fade"></div>
                          <div className="green-round big reveal-fade"></div>
                      </div>
                      <div className="inner-round-shape boottom-left custom-round">
                          <div className="green-round big reveal-fade"></div>
                          <div className="yellow-round small reveal-fade"></div>
                      </div>
                    </div>
                    <div className="section service-section" style={{backgroundColor:"#effff3"}}>
                    <div className="fp-fixed-inr">
                        <div className="fp-fixed-content">
                            <div className="bg-image" style={{backgroundImage:"url(assets/images/service-bg.jpg)"}}></div>
                        </div>
                      </div>
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="service-inner">
                                      <SectionTitle sectionTitle="Services" titleTheme="light-title" />
                                      <ServiceSlider />
                                      <div className="view-all-btn text-center reveal-fade">
                                            <ButtonDiv buttonText="View All Service" buttonHref="#"/>
                                      </div>
                                  </div>
                                </div>
                              </Container>
                      </div>
                      <div className="inner-round-shape top-right custom-round">
                          <div className="green-round big reveal-fade"></div>
                          <div className="yellow-round small reveal-fade"></div>
                      </div>
                    </div>
                    <div className="section testimonial-section">
                    <div className="fp-fixed-inr">
                        <div className="fp-fixed-content">
                            <div className="bg-image" style={{backgroundImage:"url(assets/images/Wave-bg.png)"}}></div>
                        </div>
                      </div>
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="service-inner">
                                      <SectionTitle sectionTitle="What our client Say" titleTheme="dark-title" />
                                      <TestimonialSlider />
                                  </div>
                                </div>
                              </Container>
                      </div>

                    </div>
                    <div className="section achievement-section">
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="achievement-inner">
                                    <SectionTitle sectionTitle="Achievement" titleTheme="dark-title" />
                                    <Row className="masonary-row">
                                      <Col xl={6} className="video-grid-left grid-column reveal-fade">
                                        <div className="col-inner">
                                            <VideoPlayer />
                                        </div>
                                      </Col>
                                      <Col xl={6} className="grid-right grid-column">
                                        <div className="col-inner">
                                          <Row className="inner-row">
                                              <ArchievementGrid archivementBg="assets/images/film-history.jpg" achievementTitle="Firm History" achievementText="Waaree Energies is committed to grow its business in socially responsible way" achievementButton="#" bgtheme="green-bg" />
                                              <ArchievementGrid archivementBg="assets/images/leadershipl.jpg" achievementTitle="Leadership" achievementText="Waaree Energies is committed to grow its business in socially responsible way" achievementButton="#" bgtheme="pink-bg"/>
                                              <ArchievementGrid archivementBg="assets/images/awards.jpg" achievementTitle="Awards" achievementText="Waaree Energies is committed to grow its business in socially responsible way" achievementButton="#" bgtheme="pink-bg"/>
                                              <ArchievementGrid archivementBg="assets/images/CSR.jpg" achievementTitle="CSR" achievementText="Waaree Energies is committed to grow its business in socially responsible way" achievementButton="#" bgtheme="green-bg"/>
                                          </Row>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </Container>
                      </div>
                      <div className="small-round-shape top-left custom-round">
                          <div className="yellow-round small reveal-fade"></div>
                          <div className="green-round big reveal-fade"></div>
                      </div>
                      <div className="inner-round-shape bottom-right custom-round">
                          <div className="green-round big reveal-fade"></div>
                          <div className="yellow-round small reveal-fade"></div>
                      </div>
                    </div>
                    <div className="section blog-section">
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="blog-inner">
                                    <SectionTitle sectionTitle="Blogs" titleTheme="dark-title" />
                                    <Row className="blog-row">
                                        <BlogSingle blogBg="assets/images/solar-panel-blog.png" blogDate="16 September 2021" blogTitle="Types of solar panels find the Right Solar Panel That Fits yor Home" blogLink="#"/>
                                        <BlogSingle blogBg="assets/images/solar-panel-house-blog.png" blogDate="14 September 2021" blogTitle="Awesome Facts about Solar Energy You Can’t Miss" blogLink="#"/>
                                        <BlogSingle blogBg="assets/images/solar-panel-terres-blog.png" blogDate="16 September 2021" blogTitle="Best Solar System for Home" blogLink="#"/>
                                    </Row>
                                    <div className="view-all-btn text-center reveal-fade">
                                            <ButtonDiv buttonText="View All Blogs" buttonHref="#"/>
                                    </div>
                                  </div>
                                </div>
                            </Container>
                      </div>
                      <div className="inner-round-shape top-right custom-round">
                          <div className="green-round big reveal-fade"></div>
                          <div className="yellow-round small reveal-fade"></div>
                      </div>
                    </div>
                    <Footer />
                    
                  </ReactFullpage.Wrapper>
                  <div className="scroll-top-btn">
                    <a href="#" className="inner-scrollToTop" id="scrollToTop" onClick={() => fullpageApi.moveTo(1)}><i className="fas fa-chevron-up"></i></a>
                  </div>
                </>
              );
            }}
      />
  );
  }
  const scrollToTop = () => {
    let element = document.getElementsByClassName('inner-scrollToTop')[0];
    element.click();
  };
  return (
      <>
      <Header scroll={scroll}/>
        <main>
          {renderFullPage()}
          <SocialFixedBtn fixScroll={fixSocialScroll}/>
          <ContactBtnFix />
          <div className={`scroll-top-btn ${fixScrollTop}`}>
              <a href="#" onClick={() => scrollToTop()}><i className="fas fa-chevron-up"></i></a>
          </div>
        </main>
        <PrivacyPolicyPopup />
      </>
  )
}
export default Home;
