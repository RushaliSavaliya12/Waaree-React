import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import VideoPlayer from '../HomepageSection/SectionInnerComponent/VideoPlayer';
import RoundSvgSectionTop from './RoundSvgSectionTop';


const VideoFullWidthSection = (props) => {
    return (
        <>
            <section className={`section video-section ${props.fullWidth}`}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className={`video-wrapper ${props.bottomTextClass}`}>
                                {props.videoPlayerCom}
                            </div>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default VideoFullWidthSection;