import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import CoreValueIconBox from './aboutsectionInnerComponent/CoreValueIconBox';
import AboutValueBottom from './aboutsectionInnerComponent/AboutValueBottom';

const AboutCorevalueSection = (props) => {
    return (
        <section className="section core-value-section">
            <div className="section-inner core-value-main" id="coreValueSec">
                <Container>
                    <div className="section-wrap">
                        <Row className="title-row">
                            <Col lg={3} md={4} className="title-wrap">
                                <SectionTitle sectionTitle="The Core Value" titleTheme="light-title" />
                            </Col>
                            <Col lg={9} md={8} className="subtitle-wrap reveal-fade">
                                <p>The core values of our organization are those values that
                                    underlie our work & strategies we employ to fulfill our vision & mission.</p>
                            </Col>
                        </Row>
                        <CoreValueIconBox />
                    </div>
                </Container>
            </div>
            <div className="section-inner core-value-boxes" id="visionMissionSec">
                <Container>
                    <div className="section-wrap">
                        <AboutValueBottom />
                    </div>
                </Container>
                <div className="small-round-shape top-right custom-round">
                    <div className="green-round big reveal-fade"></div>
                    <div className="yellow-round small reveal-fade"></div>
                </div>
            </div>
        </section>
    )
}

export default AboutCorevalueSection;