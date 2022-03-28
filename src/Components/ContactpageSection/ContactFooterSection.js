import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactFooterSection = (props) => {

    return (
        <section className="section contact-footer-section">
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="contact-footer-row">
                            <Col md={7}>
                                <h4 className="reveal-fade">{props.contentText}</h4>
                            </Col>
                            <Col md={5} className="btn-wrap reveal-fade">
                                <a href={props.btnLink} className="btn btn-primary" target="_blank">{props.btnText}<i className="fas fa-chevron-right"></i></a>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ContactFooterSection;