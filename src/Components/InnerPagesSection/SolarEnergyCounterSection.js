import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import EnergyCounterRow from './EnergyCounterRow';

const SolarEnergyCounterSection = () => {
    return (
        <>
            <section className="section solar-energy-counter-section" style={{ backgroundImage: "url(assets/images/counter-section-bg.jpg)" }}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <Row className="energy-counter-main-row">
                                <Col lg={4} className="energy-counter-text-col">
                                    <div className="col-inner">
                                        <h4 className="energy-counter-title">Solar energy: <br />a bright alternative.</h4>
                                        <span>Save the polar. Go solar.</span>
                                    </div>
                                </Col>
                                <Col lg={8} className="energy-counter-col">
                                    <div className="col-inner">
                                        <EnergyCounterRow />
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

export default SolarEnergyCounterSection;