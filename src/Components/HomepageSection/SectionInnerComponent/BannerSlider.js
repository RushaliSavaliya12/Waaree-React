import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col} from 'react-bootstrap';

const BannerSlider = () => {

        const bannerSlideData = [
            {
              id:1,
              bgSrc:"assets/images/banner-image.jpg",
              slideTitle:"#1",
              slideMainTitle: "Indian Solar Panel Manufacturer",
              buttonLink:"#",
              titleBtnAnimation:"fadeInDown",
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
              titleBtnAnimation:"fadeInUp",
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

export default BannerSlider;