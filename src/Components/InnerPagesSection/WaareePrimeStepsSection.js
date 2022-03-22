import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import WaareePrimeSteps from './WaareePrimeSteps';

const WaareePrimeStepsSection = () => {
    return (
        <>
            <section className="section steps-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">

                            <div className="step-section-wrap">
                                <Row className="step-row">
                                    <Col md={6} className="step-title-col">
                                        <div className="col-inner">
                                            <SectionTitle sectionTitle="3 Simple Steps to Earn Exiciting Rewards" titleTheme="dark-title" className="text-center" />
                                        </div>
                                    </Col>
                                    <Col md={6} className="steps-col">
                                        <div className="col-inner">
                                            <WaareePrimeSteps />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                    <div class="section-inner-round"></div>
                </div>
            </section>
        </>
    )
}

export default WaareePrimeStepsSection;