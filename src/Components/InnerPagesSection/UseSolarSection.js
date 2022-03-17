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
                                        <div className="content-text reveal-fade">
                                            <h4>Return on investment can be as High as 30%</h4>
                                            <p>Installing solar is one of the most significant investments you will make. You'll see immediate reduction in your energy bill, shield yourself from increasing energy rates, and enhance your energy independence!</p>
                                            <p>In fact, a system from WAAREE SOLAR can provide a quick pay back within 3 years and the rest 20 years of operation - free of cost. Investing in solar power plants attract tax savings via 80% accelerated depreciation and IRR that can go high as 30%, that's better performance than you'd get from the stock market!</p>
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