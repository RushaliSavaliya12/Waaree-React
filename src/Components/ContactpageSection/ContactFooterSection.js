import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactFooterSection = () => {

    return (
        <section className="section contact-footer-section">
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="contact-footer-row">
                            <Col md={7}>
                                <h4 className="reveal-fade">Let’s build brand WAAREE with a collaborative effort. Partner with us by joining our Vendor community.</h4>
                            </Col>
                            <Col md={5} className="btn-wrap reveal-fade">
                                <a href="https://forms.zohopublic.com/waareeenergiesltd1/form/VendorRegistrationForm/formperma/ezNyFIDU_mcOaM2toYpwl5t5JXEopIYKPtYyhNgKzdI" className="btn btn-primary" target="_blank">Good to go<i className="fas fa-chevron-right"></i></a>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ContactFooterSection;