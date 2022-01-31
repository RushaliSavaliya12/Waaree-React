import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LocationColSingle from './LocationColSingle';
// import Mapp from './Map';

const ContactLocationSection = () => {
    return (
        <section className="section company-location-section" style={{ backgroundColor: "#effff3" }}>
            <div className="section-inner ">
                <Container className="container">
                    <div className="section-wrap">
                        <Row className="location-sec-row">
                            <LocationColSingle />
                        </Row>
                        {/* <Mapp /> */}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ContactLocationSection;