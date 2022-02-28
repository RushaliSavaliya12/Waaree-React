import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import CaseStudySlider from './CaseStudySlider';

const CaseStudySection = () => {

    return (
        <section className="section case-study-section case-study-main-section" style={{backgroundImage:"url(assets/images/case-study-bg.jpg)"}}>
            <div className="section-inner reveal-fade">
                    <div className="section-wrap">
                        <div className="case-study-slider-wrap">
                            <Container>
                            <SectionTitle sectionTitle="Case Studies" titleTheme="light-title"/>
                                <CaseStudySlider />
                            </Container>
                        </div>
                    </div>
            </div>
        </section>
    )

}

export default CaseStudySection;