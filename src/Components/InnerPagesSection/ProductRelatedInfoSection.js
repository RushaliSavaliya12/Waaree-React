import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ProductServicesSingle from './ProductServicesSingle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';

const ProductRelatedInfoSection = () => {

    return (
        <section className="section product-info-section" style={{ backgroundImage: "url(assets/images/poly-pvmodule-info-bg.jpg)" }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="product-info-row">
                            <Col lg={8} className="product-info-col">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle="Poly/Multi Crystalline Cells" titleTheme="light-title mb-80" />
                                    <Row className="product-service-row p-inner-50">
                                        <ProductServicesSingle />
                                    </Row>
                                    <div className="btn-wrap">
                                        <ButtonDiv buttonHref="#" buttonText="Inquire Now" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="product-image reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <img src="assets/images/poly-pv-modile.png" alt=""/>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductRelatedInfoSection;