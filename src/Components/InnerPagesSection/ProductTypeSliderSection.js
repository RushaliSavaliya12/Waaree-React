import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ProductTypeSlider from './ProductTypeSlider';

const ProductTypeSliderSection = () => {

    return (
        <section className="section product-type-section" style={{backgroundImage:"url(assets/images/product-type-slider-sticky-bg.jpg)"}}>
            <div className="section-inner">
                    <div className="section-wrap">
                        <div className="product-type-slider-wrap">
                                <ProductTypeSlider />
                        </div>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeSliderSection;