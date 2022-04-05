import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import ButtonDiv from './SectionInnerComponent/ButtonDiv';
import AboutYearSec from './SectionInnerComponent/AboutYearSec';
import AboutValueboxes from './SectionInnerComponent/AboutValueboxes';

const HomeAboutSection = () => {

    return (
        <div className="section about-section" style={{ backgroundColor: "#11582c" }} id="aboutSection">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row>
                            <Col xl={6} className="about-left-column">
                                <div className="column-wrap">
                                    <div className="about-content">
                                        <SectionTitle sectionTitle="Waaree Energies Ltd. is the flagship company of Waaree Group." titleTheme="light-title" />
                                        <div className="about-content-text reveal-fade">
                                            <AboutYearSec />
                                            <div className="about-text">
                                                <p>Waaree Energies is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India’s largest Solar PV module manufacturing capacity of 2GW’s at its manufacturing plants in Surat and Umbergaon in Gujarat. We are amongst the top players in India in providing <a href="https://www.waaree.com/solar-panels" >Solar Panels</a>, Inverters, Batteries, EPC services, rooftop solar solutions, and solar water pumps, and also as an Independent Power Producer (IPP).</p>
                                            </div>
                                            <div className="btn-wrap">
                                                <ButtonDiv buttonHref="/about-waaree" buttonText="Read More" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} className="about-right-column">
                                <div className="column-wrap about-value-box">
                                    <Row>
                                        <AboutValueboxes col="6" valueURL="/about-waaree#visionMissionSec" valueImageSrc="assets/images/vision-image.jpg" valueText="Our Vision is to provide high quality and cost effective sustainable energy solutions across all the markets, redu" valueBoxTitle="Vision" />
                                        <AboutValueboxes col="6" valueURL="/about-waaree#visionMissionSec" valueImageSrc="assets/images/mission-image.jpg" valueText="By virtue of our commitment to our stakeholders, we strive for continuous improvement in the quality of our products." valueBoxTitle="Mission" />
                                        <AboutValueboxes col="12" extraclassName="yellow-bg" valueURL="/about-waaree#coreValueSec" valueText="The core values of our organization are those values that underlie our work & strategies we employ to fulfill our vision & mission." valueBoxTitle="Values" />
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="big-round-shape reveal-fade">
                <div className="inner-round-shape"></div>
            </div>
        </div>
    )

}

export default HomeAboutSection;