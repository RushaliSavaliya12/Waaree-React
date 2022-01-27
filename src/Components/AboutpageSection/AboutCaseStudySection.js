import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import CaseStudySingle from './aboutsectionInnerComponent/CaseStudySingle';


const AboutCaseStudySection = () => {
    return (
        <section className="section case-study-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                    <SectionTitle sectionTitle="Case Study" titleTheme="dark-title" />
                        <Row className="case-study-row">
                            <Col lg={5} className="featured-case-column">
                                <CaseStudySingle feauredCaseStudyclassName="featured-col-wrap" caseStudyImageclassName="featured-image" caseStudyLink="#" caseStudySrc="assets/images/case-study-building.jpg" caseStudyTitle="Residential" caseStudyDisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            </Col>
                            <Col lg={7} className="case-study-column">
                                <div className="case-col-wrap">
                                <CaseStudySingle caseStudyImageclassName="case-study-image" caseStudyLink="#" caseStudySrc="assets/images/commercial-case-study.jpg" caseStudyTitle="Commercial & Industrial" caseStudyDisc="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                                <CaseStudySingle caseStudyImageclassName="case-study-image" caseStudyLink="#" caseStudySrc="assets/images/restaurant-case-study.jpg" caseStudyTitle="Resturant" caseStudyDisc="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sdfdfgfjj"/>
                                </div>
                                <div className="btn-wrap reveal-fade">
                                    <a href="#" className="btn btn-primary">More Projects<i className="fas fa-chevron-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutCaseStudySection;