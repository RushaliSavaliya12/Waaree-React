import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const WaareePrimeTwoColSection = () => {
    return (
        <>
            <section className="section two-col-section prime-col-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="alternate-col-wrap">
                                <Row className="image-content-row">
                                    <Col lg={8} className="content-col reveal-fade">
                                        <div className="col-inner">
                                            <h2 className="section-title content-col-title">About Prime</h2>
                                            <div className="content-col-text">
                                                <p>First of its kind program in the Solar Industry to reward our valuable partners! At Waaree we believe in building trust among end users with a concrete family of partners, collaborators in the process, that's what ensure us a continuous success. We want to thank all of our partners for this unshakeable support, hereby we invite you to join India's first of its kind Reward program in Solar Energy Industry – WAAREE PRIME.</p>
                                                <p>Explore the world full of Gifts and Vouchers which can be availed on purchase of our products. One can only experience the privilege to be in our reward program by being a member of it. Be a part of our esteemed member group who consistently trust our products, delivers quality to the end users, and transforms the world in various tangible ways. Get started by availing more rewards through our Mobile App!</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="image-col reveal-fade">
                                        <div className="col-inner">
                                            <img src="assets/images/waaree-prime-mobile-content.png" alt='Col Image'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default WaareePrimeTwoColSection;