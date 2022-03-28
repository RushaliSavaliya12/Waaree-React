import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import { ProductFeaturedLeftList, ProductFeatureRightList } from './ProductFeaturedList';

const ProductFeaturedSection = () => {

    return (
        <section className="section product-feature-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Poly Module Features" titleTheme="dark-title mb-80 text-center" />
                        <div className="product-feature-wrap">
                            <div className="product-feature">
                                <div className="left-side-feature feature-list fadeIn-left">
                                    <ProductFeaturedLeftList />
                                </div>
                                <div className="product-image reveal-fade stagger-animation">
                                    <img src="assets/images/poly-pv-module-straight.png" alt="" />
                                </div>
                                <div className="right-side-feature feature-list fadeIn-right">
                                    <ProductFeatureRightList />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductFeaturedSection;