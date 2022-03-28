import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import ButtonDiv from './SectionInnerComponent/ButtonDiv';
import ProductSlider from './SectionInnerComponent/ProductSlider';

const HomeProductSection = () => {
    return (
        <div className="section product-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="product-inner">
                            <SectionTitle sectionTitle="Products" titleTheme="dark-title" />
                            <div className="product-slider-wrap">
                                <ProductSlider />
                            </div>
                            <div className="view-all-btn text-center reveal-fade">
                                <ButtonDiv buttonText="View All Products" buttonHref="/products" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="small-round-shape top-right custom-round">
                <div className="yellow-round small reveal-fade"></div>
                <div className="green-round big reveal-fade"></div>
            </div>
            <div className="inner-round-shape boottom-left custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </div>
    )
}

export default HomeProductSection;