import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import ServicesSingleCol from './ServicesSingleCol';



const ServicesGridSection = () => {
    return (
        <section className="section service-grid-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="service-grid-row">
                            <ServicesSingleCol />
                        </Row>
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default ServicesGridSection;