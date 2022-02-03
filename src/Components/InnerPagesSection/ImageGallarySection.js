import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ImageGallary from './ImageGallary';


const ImageGallarySection = () => {
    return (
        <>
            <section className="section image-gallary-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Lab Facility" titleTheme="dark-title" />
                            <div className="gallary-wrapper">
                                <ImageGallary />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ImageGallarySection;