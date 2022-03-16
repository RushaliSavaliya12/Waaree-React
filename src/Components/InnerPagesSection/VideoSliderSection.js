import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import VideoGallarySlider from './VideoGallarySlider';


const VideoGallarySection = (props) => {
    return (
        <>
            <section className="section video-slider-section" style={{backgroundColor:"#fff"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Mentors to help you grow" titleTheme="dark-title mb-80"/>
                            <div className="gallary-wrapper">
                                <VideoGallarySlider />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default VideoGallarySection;