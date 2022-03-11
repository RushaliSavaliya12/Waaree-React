import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RoundSvgSectionTop from '../InnerPagesSection/RoundSvgSectionTop';
import TwoColImageSlider from '../InnerPagesSection/TwoColImageSlider';

const TwoColSliderSection = () => {
    return (
        <>
            <section className="section two-col-slider-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="two-col-slider-row">
                                <Col md={6} className="content-col">
                                    <div className="col-inner">
                                        <div className="content-text">
                                            <h2 className="section-title dark-title">People. <br /> Activities at Glance</h2>
                                            <p>Waaree employees come from a wide range of cultural, educational and geographic backgrounds and are able to work in a dynamic professional environment that values individual perspectives.</p>
                                        </div>  
                                    </div>
                                </Col>
                                <Col md={6} className="image-slider-col">
                                    <div className="col-inner">
                                        <TwoColImageSlider />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default TwoColSliderSection;