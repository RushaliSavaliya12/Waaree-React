import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesSingleCol from './ServicesSingleCol';


const ServicesGridSection = (props) => {
    return (
        <section className="section service-grid-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="service-grid-row">
                           {props.gridType}
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ServicesGridSection;