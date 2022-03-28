import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";


const ServiceSlider = () => {
  const serviceSlideData = [
    {
      id:1,
      serviceImageSrc:"assets/images/solar-panel-service.jpg",
      serviceTitle:"Ground Mount",
      serviceText:"Solar panels on the ground can be placed anywhere that is exposed to the majority of the sun's rays throughout the day.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    },
    {
      id:2,
      serviceImageSrc:"assets/images/floating-solar.jpg",
      serviceTitle:"Floating Solar",
      serviceText:"Solar panels are placed on floating structures above water, such as on a lake, in an ocean, or in a reservoir, so that they generate electricity.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    },
    {
      id:3,
      serviceImageSrc:"assets/images/rooftop-solar.jpg",
      serviceTitle:"Rooftop Solar",
      serviceText:"Solar rooftop systems will provide a good return on investment by utilizing idle roof space. Waaree provides customized solution.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    },
    {
      id:1,
      serviceImageSrc:"assets/images/solar-panel-terres-blog.png",
      serviceTitle:"Operation & Maintenance",
      serviceText:"WAAREE Solar has established a operations and maintenance center for EPC customers to monitor and manage solar rooftop operations.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    },
    {
      id:1,
      serviceImageSrc:"assets/images/solar-panel-house-blog.png",
      serviceTitle:"Waaree Prime",
      serviceText:"Waaree Prime application is reward program for Integrators and Retailers of Solar panel in India. Scan more Earn More.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    },
    {
      id:1,
      serviceImageSrc:"assets/images/solar-panel-house-blog.png",
      serviceTitle:"Waaree Expert",
      serviceText:"Waaree Experts is India's largest Solar plant pre and post installation, Site survey, O & M, Cleaning service platform.",
      serviceReadMoreLink:"/service-epc-floating-solar-solution",
    }
  ]
  const ServiceSlideSingle = (props) => {

    return(
      <>
      <div className="service-slide">
        <div className="service-slide-inner">
          <div className="service-top">
            <h4 className="service-title">{props.serviceTitle}</h4>
            <div className="service-image">
              <Link to={props.serviceReadMoreLink}>
                <img src={props.serviceImageSrc} alt="Solar Panel Service" />
              </Link>
            </div>
          </div>
          <div className="service-bottom-content">
            <div className="service-text">
              <p>{props.serviceText}</p>
            </div>
            <div className="read-more-link">
              <Link to={props.serviceReadMoreLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
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
export default ServiceSlider;