import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ImageGallaryFiveCol from './ImageGallaryFiveCol';


const ImageGallarySection = (props) => {
    return (
        <>
            <section className="section image-gallary-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle={props.gallarySectionTitle} titleTheme="dark-title" />
                            <div className="gallary-wrapper">
                                {props.gallaryType}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ImageGallarySection;