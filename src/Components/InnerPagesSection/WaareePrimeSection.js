import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import RoundSvgSectionTop from '../InnerPagesSection/RoundSvgSectionTop';

const WaareePrimeSection = () => {
    return (
        <>
            <section className="section waaree-prime-section">
                <Container>
                    <div className="section-inner" style={{ backgroundColor: "#d85540" }}>

                        <div className="section-wrap">
                            <Row className="waare-prime-row">
                                <Col lg={3} className="prime-icon-col">
                                    <div className="icon-wrap">
                                        <img src="assets/images/prime-icon.png" />
                                    </div>
                                </Col>
                                <Col lg={6} className="prime-text-col">
                                    <div className="col-inner">
                                        <SectionTitle sectionTitle="Waaree Prime" titleTheme="light-title" className="text-center" />
                                        <span className="sub-title">Rewards & Programs, for Integrators & Retailers</span>
                                        <div className="prime-text">
                                            <p>First of its kind program in the Solar Industry to reward our valuable partners! At Waaree we believe in building trust among end users with a concrete family of partners, collaborators in the process, that's what ensure us a continuous success. </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <ButtonDiv buttonHref="#" buttonText="Download Waaree Prime" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} className="prime-bg-image">
                                    <div className="image-wrap">
                                        <img src="assets/images/waaree-prime-mobile.png" />
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </div>
                </Container>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default WaareePrimeSection;