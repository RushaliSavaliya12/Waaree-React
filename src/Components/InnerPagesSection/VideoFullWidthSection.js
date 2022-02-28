import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import VideoPlayer from '../HomepageSection/SectionInnerComponent/VideoPlayer';


const VideoFullWidthSection = (props) => {
    return (
        <>
            <section className="section video-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className={`video-wrapper ${props.bottomTextClass}`}>
                                {props.videoPlayerCom}
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default VideoFullWidthSection;