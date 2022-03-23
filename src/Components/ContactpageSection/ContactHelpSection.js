import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactHelpColSingle from './ContactHelpColSingle';

const ContactHelpSection = (props) => {
    return (
        <section className="section contact-help-section">
            <div className="section-inner ">
                <div className="section-wrap">
                    <Row className="help-sec-row">
                        {props.ContactHelpSection}
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default ContactHelpSection;