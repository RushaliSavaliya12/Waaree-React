import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import TestimonialSlider from './SectionInnerComponent/TestimonialSlider';

const HomeTestimonialSection = () => {
    return (
        <div className="section testimonial-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="service-inner">
                            <SectionTitle sectionTitle="What our client Say" titleTheme="dark-title" />
                            <TestimonialSlider />
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default HomeTestimonialSection;