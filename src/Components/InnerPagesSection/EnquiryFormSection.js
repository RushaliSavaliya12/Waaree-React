import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import EnquiryForm from './EnquiryForm';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const EnquiryFormSection = () => {

    return (
        <section className="section enquiry-form-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="HELLO THERE!" titleTheme="dark-title" />
                        <EnquiryForm />
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default EnquiryFormSection;