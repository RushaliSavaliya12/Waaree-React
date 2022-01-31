import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ContactForm from './ContactForm';

const ContactFormSection = () => {

    return (
        <section className="section contact-form-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="HELLO THERE!" titleTheme="dark-title" />
                        <ContactForm />
                    </div>
                </Container>
            </div>
            <div className="inner-sec-round small-round-shape top-left custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </section>
    )
}

export default ContactFormSection;