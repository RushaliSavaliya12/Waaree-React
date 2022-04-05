import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Outlet, Link } from "react-router-dom";


const ProductSlider = () => {
      const ProductSliderData = [
        {
          id:1,
          productImage:"assets/images/PV-module-product.jpg",
          productTitle:"Solar PV Module",
          productText: "Waaree solar panels are best quality solar panels with great electrical parameters.",
          productLink:"/pv-module-poly",
        },
        {
          id:2,
          productImage:"assets/images/Solar-products-product.jpg",
          productTitle:"Solar Products",
          productText:"Waaree has launched a large range of gadgets and portable kits with an integrated solar.",
          productLink:"/solar-product",
        },
        {
          id:3,
          productImage:"assets/images/lithium-ion-battery-product.jpg",
          productTitle:"Lithium Ion Batteries",
          productText: "Waaree is capable of of producing battery packs of both NMC & LFP technology.",
          productLink:"/inverter",
        },
        {
          id:4,
          productImage:"assets/images/Channel-partner-product.jpg",
          productTitle:"Channel Partner",
          productText: "Become Waaree Energies Franchise partner and join the fast growing network.",
          productLink:"/partners",
        },
        {
          id:5,
          productImage:"assets/images/Inverter-product.jpg",
          productTitle:"Inverters",
          productText: "WAAREE has developed a range of single and three phase inverters unrivaled in the industry for their quality, reliability and efficiency.",
          productLink:"/inverter",
        },
        {
          id:6,
          productImage:"assets/images/solar-water-pumps-product.jpeg",
          productTitle:"Solar water pumps",
          productText: "Waaree offer solar pumps and electric pumps for the purpose of simplifying our nation's water needs.",
          productLink:"#",
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