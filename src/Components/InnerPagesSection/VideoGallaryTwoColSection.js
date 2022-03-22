import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import VideoGallaryTwoCol from './VideoGallaryTwoCol';


const VideoGallaryTwoColSection = () => {
    return (
        <>
            <section className="section video-gallary-section gallary-two-col-section" style={{backgroundColor:"#fff"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Success Story" titleTheme="dark-title mb-80" />
                            <div className="gallary-wrapper without-gallary-text">
                                <VideoGallaryTwoCol />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default VideoGallaryTwoColSection;