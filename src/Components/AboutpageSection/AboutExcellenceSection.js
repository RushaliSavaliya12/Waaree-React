import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutYearSec from '../HomepageSection/SectionInnerComponent/AboutYearSec';
import VideoPlayer from '../HomepageSection/SectionInnerComponent/VideoPlayer';

const AboutExcellenceSection = (props) => {
    return (
        <section className="section excellence-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="row">
                            <div className="col-lg-7 left-text">
                                <div className="col-inner">
                                    <AboutYearSec />
                                    <div className="content-text reveal-fade">
                                        <p>Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest <a href="https://www.waaree.com/solar-panels">Solar panel</a> manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 video-grid-right reveal-fade">
                                <div className="col-inner">
                                    <VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutExcellenceSection;