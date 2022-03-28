import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';



const OffersSlider = () => {

  const OffersSlideData = [
    {
      id: 1,
      offersImageSrc: "assets/images/offers-slider-1.jpg",
      offersTitleText: "20% Bonus Miles on next payment with CRED ",
      offersValidDate: "Valid upto: 31 Aug 2022",
      
    },
    {
      id: 2,
      offersImageSrc: "assets/images/offers-slider-2.jpg",
      offersTitleText: "Feb Festive Flat 10% OFF on All orders.",
      offersValidDate: "Valid upto: 28 Feb 2022",
      
    },
    {
      id: 3,
      offersImageSrc: "assets/images/offers-slider-3.jpg",
      offersTitleText: "$10,000 off on order Premium products",
      offersValidDate: "Valid upto: 31 March 2022",
      
    },
    {
      id: 4,
      offersImageSrc: "assets/images/solar-panel-terres-blog.png",
      offersTitleText: "Feb Festive Flat 10% OFF on All orders.",
      offersValidDate: "Valid upto: 28 Feb 2022",
    
    },
    {
      id: 5,
      offersImageSrc: "assets/images/suitanable-1.jpg",
      offersTitleText: "20% Bonus Miles on next payment with CRED ",
      offersValidDate: "Valid upto: 31 Aug 2022",

    }

  ]

  var settingsOffersSlider = {
    speed: 600,
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (

    <Slider className="offers-slider" {...settingsOffersSlider}>
      {OffersSlideData.map((val) =>
        <div className="slide-inner">
          <div className="image-wrap">
              <img src={val.offersImageSrc} alt="" />
          </div>
          <div className='offers-content'>
            <h5 className='offer-title'>{val.offersTitleText}</h5>
            <span className="offers-valid-date">{val.offersValidDate}</span>
          </div>

        </div>
      )}
    </Slider>

  );
}


export default OffersSlider;