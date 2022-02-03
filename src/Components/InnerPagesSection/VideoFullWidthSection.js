import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import VideoPlayer from '../HomepageSection/SectionInnerComponent/VideoPlayer';


const VideoFullWidthSection = () => {
    return (
        <>
            <section className="section video-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="video-wrapper">
                                <VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1" videCoverBgSrc="assets/images/manufacture-plant-video-bg.jpg" videoCoverText="Waaree History | Manufacturing Process"/>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default VideoFullWidthSection;