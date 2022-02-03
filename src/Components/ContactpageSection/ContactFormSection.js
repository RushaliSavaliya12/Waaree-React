import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ContactForm from './ContactForm';
import RoundSvgSectionTop from '../InnerPagesSection/RoundSvgSectionTop';

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
            <RoundSvgSectionTop />
        </section>
    )
}

export default ContactFormSection;