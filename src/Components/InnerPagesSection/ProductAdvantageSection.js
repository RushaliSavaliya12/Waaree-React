import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import AdvantageList from './AdvantageList';

const ProductAdvantageSection = () => {

    return (
        <section className="section product-advantage-section two-col-section" style={{ backgroundColor: "#f0faf2" }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="product-info-row">
                            <Col lg={8} className="content-col">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle="Advantages of Poly Module" titleTheme="dark-title mb-80" />
                                    <AdvantageList />
                                </div>
                            </Col>
                            <Col lg={4} className="image-col reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <img src="assets/images/advantage-image-col.png" alt=""/>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </section>
    )

}

export default ProductAdvantageSection;