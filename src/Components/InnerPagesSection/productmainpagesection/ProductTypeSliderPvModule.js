import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ButtonDiv from '../../HomepageSection/SectionInnerComponent/ButtonDiv';

const ProductTypeSliderPvModule = () => {
  const ProductTypeSliderData = [
    {
      id:1,
      productTitleName:"Small Module",
      productTitleSubText:"ARUN SERIES 40Wp - 235Wp",
      productTypeImageSrc:"assets/images/pvmodule-small-module.png",
      productTypeInquiryLink:"#",
    },
    {
      id:2,
      productTitleName:"Poly",
      productTitleSubText:"ADITYA SERIES 250Wp - 350Wp",
      productTypeImageSrc:"assets/images/pv-module-poly.png",
      productTypeInquiryLink:"#",
    },
    {
      id:3,
      productTitleName:"Mono Perc",
      productTitleSubText:"ARKA SERIES 315Wp - 400Wp",
      productTypeImageSrc:"assets/images/pv-module-monoperc.png",
      productTypeInquiryLink:"#",
    },
    {
      id:4,
      productTitleName:"Bifacial",
      productTitleSubText:"AHNAY SERIES 380Wp - 400Wp",
      productTypeImageSrc:"assets/images/pv-module-bifacial.png",
      productTypeInquiryLink:"#",
    },
    {
      id:5,
      productTitleName:"Flexible",
      productTitleSubText:"FLEXIBLE MODULES",
      productTypeImageSrc:"assets/images/pv-module-flexible.png",
      productTypeInquiryLink:"#",
    },
    {
      id:6,
      productTitleName:"BIPV",
      productTitleSubText:"390 Wp- 400 Wp Customized Wp",
      productTypeImageSrc:"assets/images/pv-module-bipv.png",
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
export default ProductTypeSliderPvModule;