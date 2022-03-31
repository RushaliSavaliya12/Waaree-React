import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductTypeSlider from './ProductTypeSliderInverter';

const ProductTypeSliderSection = (props) => {

    return (
        <section className="section product-type-section" style={{backgroundImage: `url(${props.SliderbgSrc})` }}>
            <div className="section-inner">
                    <div className="section-wrap">
                        
                        <div className="product-type-slider-wrap">
                                {props.productSlider}
                        </div>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeSliderSection;