import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';


const ImageGallarySection = () => {
    return (
        <>
            <section className="section image-gallary-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Lab Facility" titleTheme="dark-title" />
                            <div className="gallary-wrapper">
                                
                            </div>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default ImageGallarySection;