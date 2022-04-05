import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const TestimonialSlider = () => {
  const testimonialSlideData = [
    {
      id:1,
      companyImageSrc:"assets/images/Abellon-Logo.png",
      testimonialText:"Team Waaree, is a company synonymous with solar EPC. To manage each and every thing for 2 MW solar power plant within 35 days is not a joke as it requires meticulous planning, understanding of subject and requirements at site, we appreciate efforts of all involved from Waaree Group.",
      testimonialFigureCaption:"Abellon-Clean-Energy",
    },
    {
      id:2,
      companyImageSrc:"assets/images/sharada-construction.png",
      testimonialText:"Waaree energies commissioned 10 mw grid tied solar power plant with polycrystalline modules. Installation and commissioning work was completed on time also performance of the plant is working satisfactory since commissioning of project i.e. Year 2015.",
      testimonialFigureCaption:"Sharda Construction & Corporation Limited",
    }
  ]
  const TestimonialSlideSingle = (props) => {

    return(
      <>
      <div className="testimonial-slide">
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
export default TestimonialSlider;