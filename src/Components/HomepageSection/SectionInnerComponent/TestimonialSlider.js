import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const TestimonialSlider = () => {
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