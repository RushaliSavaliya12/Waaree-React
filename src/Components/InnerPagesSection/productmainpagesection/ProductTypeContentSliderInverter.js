import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

const ProductTypeContentSliderInverter = () => {
    const ProductTypeSliderData = [
        {
            id: 1,
            productTitle: "On-Grid Inverters",
            productText: "Cras pretium placerat massa, non vehicula libero ornare at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis vestibulum ultricies. Nulla eu arcu faucibus, congue diam nec, ultricies orci. Nunc aliquam nulla eget aliquet luctus. Nunc viverra elit ac mauris iaculis malesuada. Justo dapibus, ac egestas erat eleifend.",
            productTypeImageSrc: "assets/images/on-grid-inverter-image.png",
            productLinkUrl: "#",
        },
        {
            id: 2,
            productTitle: "Off-Grid Inverters",
            productText: "Cras pretium placerat massa, non vehicula libero ornare at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis vestibulum ultricies. Nulla eu arcu faucibus, congue diam nec, ultricies orci. Nunc aliquam nulla eget aliquet luctus. Nunc viverra elit ac mauris iaculis malesuada. Justo dapibus, ac egestas erat eleifend.",
            productTypeImageSrc: "assets/images/off-grid-inverter-image-one.png",
            productLinkUrl: "#",
        },
        {
            id: 3,
            productTitle: "On-Grid Inverters",
            productText: "Cras pretium placerat massa, non vehicula libero ornare at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis vestibulum ultricies. Nulla eu arcu faucibus, congue diam nec, ultricies orci. Nunc aliquam nulla eget aliquet luctus. Nunc viverra elit ac mauris iaculis malesuada. Justo dapibus, ac egestas erat eleifend.",
            productTypeImageSrc: "assets/images/on-grid-inverter-image.png",
            productLinkUrl: "#",
        },
        {
            id: 4,
            productTitle: "Off-Grid Inverters",
            productText: "Cras pretium placerat massa, non vehicula libero ornare at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis vestibulum ultricies. Nulla eu arcu faucibus, congue diam nec, ultricies orci. Nunc aliquam nulla eget aliquet luctus. Nunc viverra elit ac mauris iaculis malesuada. Justo dapibus, ac egestas erat eleifend.",
            productTypeImageSrc: "assets/images/off-grid-inverter-image.png",
            productLinkUrl: "#",
        },
    ]
    var settingsProductType = {
        speed: 600,
        arrows: true,
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Slider className="product-content-slider reveal-fade stagger-animation" {...settingsProductType}>
            {ProductTypeSliderData.map((val) =>
                <div className="product-content-inner" key={val.id}>
                    <div className="product-type-content">
                        <div className="product-image">
                            <a href={val.productLinkUrl}>
                                <img src={val.productTypeImageSrc} alt='' />
                            </a>
                        </div>
                        <div className="product-content-wrap">
                            <h4 className="product-title">{val.productTitle}</h4>
                            <div className="product-content-text">
                                <p>{val.productText}</p>
                            </div>
                            <div className="read-more-link">
                                <a href={val.productLinkUrl} className="read-more">Learn More<i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Slider>

    );
}
export default ProductTypeContentSliderInverter;