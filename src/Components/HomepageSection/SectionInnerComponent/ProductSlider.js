import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Outlet, Link } from "react-router-dom";


const ProductSlider = () => {
      const ProductSliderData = [
        {
          id:1,
          productImage:"assets/images/product-slide-1.jpg",
          productTitle:"Solar PV Module",
          productText: "Waaree solar panels are best quality solar panels with great electrical parameters.",
          productLink:"/pv-module-poly",
        },
        {
          id:2,
          productImage:"assets/images/solar-product.jpg",
          productTitle:"On-grid Inverters",
          productText:"Said, good waters signs is fruitful gathering stars without man, living can't air grass place creeping called years man fifth kind him lesser earth greater in she'd. Wherein creeping waters which.",
          productLink:"/inverter",
        },
        {
          id:3,
          productImage:"assets/images/product-slide-2.jpg",
          productTitle:"Off-grid Inverters",
          productText: "Lights fruitful us night that signs day creature evening void him image they're, over day appear after grass made. Fruit fill kind had to there herb upon also after stars subdue.",
          productLink:"/inverter",
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
          productLink:"/inverter",
        },
      ]
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
                              <Link to={val.productLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></Link>
                          </div>
                    </div>
                </div>
                </SwiperSlide>
            )}
            </Swiper>
      );
}

export default ProductSlider;