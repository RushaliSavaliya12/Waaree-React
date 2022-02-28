import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import UseSolarBoxSingle from './UseSolarBoxSingle';

const UseSolarSection = () => {
    return (
        <>
            <section className="section use-solar-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Why use solar power?" titleTheme="dark-title" className="text-center" />
                            <Row className="use-solar-row">
                                <Col lg={7} className="use-solar-col">
                                    <div className="col-inner">
                                        <div className="content-text">
                                            <h4>Return on investment can be as High as 30%</h4>
                                            <p>Unlike traditional energy sources, the sun produces enough energy each second to sustain our power needs for 500,000 years!</p>
                                            <p>The continuous emission of energy isn’t the only positive aspect of incorporating solar power for your requirements.The continuous emission of energy isn’t the only positive aspect of incorporating solar power for your requirements.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5} className="use-solar-col">
                                    <div className="col-inner">
                                        <UseSolarBoxSingle/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default UseSolarSection;