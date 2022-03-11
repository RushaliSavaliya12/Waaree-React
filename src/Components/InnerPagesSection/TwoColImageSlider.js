import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const TwoColImageSlider = () => {
  const ImageSliderData = [
    {
      id:1,
      imageSrc:"assets/images/about-banner.jpg",
  
    },
    {
      id:2,
      imageSrc:"assets/images/solar-panel-house-blog.png",
  
    },
    {
      id:3,
      imageSrc:"assets/images/waree-video-cover-image.jpg",
  
    },
    {
      id:4,
      imageSrc:"assets/images/vision-image.jpg",
  
    },
    {
      id:5,
      imageSrc:"assets/images/service-bg.jpg",
  
    },
    {
      id:6,
      imageSrc:"assets/images/restaurant-case-study.jpg",
  
    }
  ]
  var settingsImageSlider = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
    return (
          <Slider className="image-slider" {...settingsImageSlider}>
                {ImageSliderData.map((val) =>
                  <div className="slide-inner" key={val.id}>
                      <img src={val.imageSrc} />
                  </div>
                )}
          </Slider>
      
    );
  }
export default TwoColImageSlider;