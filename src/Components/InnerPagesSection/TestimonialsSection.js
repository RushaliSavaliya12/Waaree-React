import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import TestimonialsSingle from './TestimonialsSingle';



const TestimonialsSection = (props) => {

    return (
        <>
            <section className="section testimonial-listing-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="testimonial-listing-wrapper">
                                <TestimonialsSingle />
                                <div className="btn-wrap text-center">
                                    <ButtonDiv buttonHref="#" buttonText="Load More" />
                                </div>
                                
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection;