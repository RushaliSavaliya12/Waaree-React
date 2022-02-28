import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import ApplyNowLabelBanner from './ApplyNowLabelBanner';

const PartnerDetailSection = () => {

    return (
        <section className="section partner-detail-section two-col-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="alternate-col-wrap">
                            <Row className="image-content-row">
                                <SectionTitle sectionTitle="Tap Into Solar Energy Business Opportunity" titleTheme="dark-title" />
                                <Col lg={5} className="image-col reveal-fade">
                                    <div className="col-inner">
                                        <img src="assets/images/about-banner.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={7} className="content-col reveal-fade">
                                    <div className="col-inner">
                                        <p>
                                            In current market scenario solar power is most reliable and sustainable source of energy.Solar power in India is a fast developing industry. The scope of solar business in India is very high as government is giving various schemes and subsidies to opt solar power.
                                        </p>
                                        <p>Become Waaree Energies Franchise partner and join the fast growing network. Waaree Energies is amongst the top player in India in providing Solar EPC services, project development, rooftop solutions, solar thermal, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 350 locations nationally and 68 countries internationally.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="image-content-row">
                                <SectionTitle sectionTitle="Benefits of Becoming a Channel Partner" titleTheme="dark-title" />
                                <Col lg={5} className="image-col reveal-fade">
                                    <div className="col-inner">
                                        <img src="assets/images/about-banner.jpg" alt="" />
                                    </div>
                                </Col>
                                <Col lg={7} className="content-col reveal-fade">
                                    <div className="col-inner">
                                        <p>Becoming a channel partner with us is not only about selling products but it is about becoming an 'End to End Vertically Integrated Solar Solutions' provider. Our partners are a single stop solution for solar projects from Finance to Execution to Maintenance. This means that you are more than just a seller, you influence the entire value chain.
                                        </p>
                                        <div className="grin-check-listing">
                                            <p>Some of the benefits of partnering with Waaree-</p>
                                            <ul>
                                                <li>Pan India presence</li>
                                                <li>Ethical business practices</li>
                                                <li>Customer first approach</li>
                                                <li>Premium quality solar product range</li>
                                                <li>Better margins and fast return on investment.</li>
                                                <li>Strong pre & post sales & marketing support.</li>
                                                <li>Training from dedicated expert technical team.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <ApplyNowLabelBanner bgSrc="assets/images/apply-now-bg.jpg" applyIconSrc="assets/images/apply-now-icon.png" applyBannerText="Apply now to become a WAAREE channel partner."/>
                    </div>
                </Container>
                <RoundSvgSectionTop />
            </div>
        </section>
    )

}

export default PartnerDetailSection;