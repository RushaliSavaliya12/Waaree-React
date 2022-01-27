import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const CompanyLogoSlider = () => {
  const CompanyLogoSliderData = [
    {
      id: 1,
      logoSrc:"assets/images/company-logo/Acme.jpg",
    },
    {
      id: 2,
      logoSrc:"assets/images/company-logo/adani.jpg",
    },
    {
      id: 3,
      logoSrc:"assets/images/company-logo/aditya_birla.jpg",
    },
    {
      id: 4,
      logoSrc:"assets/images/company-logo/Amara-Raja.jpg",
    },
    {
      id: 5,
      logoSrc:"assets/images/company-logo/amp-energy.png",
    },
    {
      id: 6,
      logoSrc:"assets/images/company-logo/assam-energy-development-logo.jpg",
    },
    {
      id: 7,
      logoSrc:"assets/images/company-logo/azur-logo.jpg",
    },
    {
      id: 8,
      logoSrc:"assets/images/company-logo/bel-logo.jpg",
    },
    {
      id: 9,
      logoSrc:"assets/images/company-logo/Bharat-petroleum-logo.jpg",
    },
    {
      id: 10,
      logoSrc:"assets/images/company-logo/bhel.jpg",
    },
    {
      id: 11,
      logoSrc:"assets/images/company-logo/bosch.jpg",
    },
    {
      id: 12,
      logoSrc:"assets/images/company-logo/bsnl-logo.jpg",
    },
    {
      id: 13,
      logoSrc:"assets/images/company-logo/central-electronics-logo.jpg",
    },
    {
      id: 14,
      logoSrc:"assets/images/company-logo/chhattisgarh-energy-logo.jpg",
    },
    {
      id:15,
      logoSrc:"assets/images/company-logo/Fourth-partner.jpg",
    },
    {
      id: 16,
      logoSrc:"assets/images/company-logo/Haldiram-logo.jpg",
    },
    {
      id: 17,
      logoSrc:"assets/images/company-logo/Hareda-logo.jpg",
    },
    {
      id: 18,
      logoSrc:"assets/images/company-logo/hero.jpg",
    },
    {
      id: 19,
      logoSrc:"assets/images/company-logo/hild_energy.jpg",
    },
    {
      id: 20,
      logoSrc:"assets/images/company-logo/Himurja-logo.jpg",
    },
    {
      id: 21,
      logoSrc:"assets/images/company-logo/Hindustan-energy.png",
    },
    {
      id: 22,
      logoSrc:"assets/images/company-logo/india-oil-logo.jpg",
    },
    {
      id: 23,
      logoSrc:"assets/images/company-logo/ircon-logo.jpg",
    },
    {
      id: 24,
      logoSrc:"assets/images/company-logo/JREDA-logo.jpg",
    },
    {
      id: 25,
      logoSrc:"assets/images/company-logo/l&t.jpg",
    },
    {
      id: 26,
      logoSrc:"assets/images/company-logo/mahindra-logo.jpg",
    },
    {
      id: 27,
      logoSrc:"assets/images/company-logo/mono-steel-logo.jpg",
    },
    {
      id: 28,
      logoSrc:"assets/images/company-logo/mplus.jpg",
    },
    {
      id: 29,
      logoSrc:"assets/images/company-logo/mytrah.jpg",
    },
    {
      id: 30,
      logoSrc:"assets/images/company-logo/ntpc.jpg",
    },
    {
      id: 31,
      logoSrc:"assets/images/company-logo/oreda-logo.jpg",
    },
    {
      id: 32,
      logoSrc:"assets/images/company-logo/peda-logo.jpg",
    },
    {
      id: 33,
      logoSrc:"assets/images/company-logo/piramal.jpg",
    },
    {
      id: 34,
      logoSrc:"assets/images/company-logo/punj-Lloyd-logo.jpg",
    },
    {
      id: 35,
      logoSrc:"assets/images/company-logo/refex-logo.jpg",
    },
    {
      id: 36,
      logoSrc:"assets/images/company-logo/reliance.jpg",
    },
    {
      id: 37,
      logoSrc:"assets/images/company-logo/renew-power-logo.jpg",
    },
    {
      id: 38,
      logoSrc:"assets/images/company-logo/roha-logo.jpg",
    },
    {
      id: 39,
      logoSrc:"assets/images/company-logo/Schneider_Electric-logo.jpg",
    },
    {
      id: 40,
      logoSrc:"assets/images/company-logo/sharda.jpg",
    },
    {
      id: 41,
      logoSrc:"assets/images/company-logo/sterling-&-Wilson.jpg",
    },
    {
      id: 42,
      logoSrc:"assets/images/company-logo/surat-municipal-corporation-logo.jpg",
    },
    {
      id: 43,
      logoSrc:"assets/images/company-logo/susten.jpg",
    },
    {
      id: 44,
      logoSrc:"assets/images/company-logo/suzlon.jpg",
    },
    {
      id: 45,
      logoSrc:"assets/images/company-logo/thermax.jpg",
    },
    {
      id: 46,
      logoSrc:"assets/images/company-logo/Uttarakhand-Shasan-logo.jpg",
    },
    {
      id: 47,
      logoSrc:"assets/images/company-logo/wellspun.jpg",
    },
    
  ]

  var settingsCompanyLogo = {
    speed: 600,
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 6,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  };
  return (
    <Slider className="company-logo-slider" {...settingsCompanyLogo}>
      {CompanyLogoSliderData.map((val) =>
        <div className="logo-slide" key={val.id}>
          <div className="image-wrap">
            <img src={val.logoSrc} alt="" />
          </div>
        </div>
      )}
    </Slider>
  );
}

export default CompanyLogoSlider;