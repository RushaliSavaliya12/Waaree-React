import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ButtonDiv from '../../HomepageSection/SectionInnerComponent/ButtonDiv';

const ProductTypeSliderInverter = () => {
  const ProductTypeSliderData = [
    {
      id:1,
      productTitleName:"On-Grid Inverters",
      productTitleSubText:"Single Phase Inverter 1kW / 2kW",
      productTypeImageSrc:"assets/images/on-grid-inverter-image.png",
      productTypeInquiryLink:"#",
    },
    {
      id:2,
      productTitleName:"Off-Grid Inverters",
      productTitleSubText:"325 VA - 10000 VA Home, Commercial PCU & Performance Range",
      productTypeImageSrc:"assets/images/off-grid-inverter-image-one.png",
      productTypeInquiryLink:"#",
    },
    {
      id:3,
      productTitleName:"On-Grid Inverters",
      productTitleSubText:"Single Phase Inverter 1kW / 2kW",
      productTypeImageSrc:"assets/images/on-grid-inverter-image.png",
      productTypeInquiryLink:"#",
    },
    {
      id:4,
      productTitleName:"Off-Grid Inverters",
      productTitleSubText:"325 VA - 10000 VA Home, Commercial PCU & Performance Range",
      productTypeImageSrc:"assets/images/off-grid-inverter-image.png",
      productTypeInquiryLink:"#",
    },
  ]
  var settingsProductType = {
    modules:[Navigation, Pagination],
    speed:600, 
    slidesPerView:1,
    slideToClickedSlide: true,
    centeredSlides:true,
    pagination: {
      clickable: true,
    },
    navigation:{
      clickable: true,
    },
    loop:true,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768:{
        slidesPerView: 2,
      }
    }
  };
  
    return (
          <Swiper className="product-type-slider" {...settingsProductType}>
                {ProductTypeSliderData.map((val) =>
                  <SwiperSlide key={val.id} className="reveal-fade stagger-animation">
                  <div className="product-type-inner">
                      <div className="product-type-content">
                        <div className="product-type-title">
                            <h2>{val.productTitleName}</h2>
                            <span className="sub-text">{val.productTitleSubText}</span>
                        </div>
                        <div className="product-type-image">
                            <img src={val.productTypeImageSrc} alt=''/>
                        </div>
                        <div className="btn-wrap">
                          <ButtonDiv buttonHref={val.productTypeInquiryLink} buttonText="Inquire Now" />
                        </div>
                      </div>
                  </div>
                  </SwiperSlide>
                )}
          </Swiper>
      
    );
  }
export default ProductTypeSliderInverter;