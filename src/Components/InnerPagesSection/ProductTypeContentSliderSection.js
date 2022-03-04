import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ProductTypeContentSlider from './ProductTypeContentSlider';

const ProductTypeContentSliderSection = () => {

    return (
        <section className="section product-type-content-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner">
                    <div className="section-wrap">
                        <Container>
                        <SectionTitle sectionTitle="Inverter" titleTheme="dark-title" />
                        <div className="product-type-content-slider-wrap">
                                <ProductTypeContentSlider />
                        </div>
                        </Container>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeContentSliderSection;