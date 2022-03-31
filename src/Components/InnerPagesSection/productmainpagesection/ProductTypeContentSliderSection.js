import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../../HomepageSection/SectionInnerComponent/SectionTitle';

const ProductTypeContentSliderSection = (props) => {

    return (
        <section className="section product-type-content-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner">
                    <div className="section-wrap">
                        <Container>
                        <SectionTitle sectionTitle={props.productTitle} titleTheme="dark-title" />
                        <div className="product-type-content-slider-wrap">
                                {props.contentTypeSlider}
                        </div>
                        </Container>
                    </div>
            </div>
        </section>
    )

}

export default ProductTypeContentSliderSection;