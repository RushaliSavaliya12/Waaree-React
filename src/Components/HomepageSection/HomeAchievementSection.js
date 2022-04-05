import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import VideoPlayer from './SectionInnerComponent/VideoPlayer';
import ArchievementGrid from './SectionInnerComponent/ArchievementGrid';


const HomeAchievementSection = () => {
    return (
        <div className="section achievement-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="achievement-inner">
                            <SectionTitle sectionTitle="Achievement" titleTheme="dark-title" />
                            <Row className="masonary-row">
                                <Col xl={6} className="video-grid-left grid-column reveal-fade">
                                    <div className="col-inner">
                                        <VideoPlayer videoSrc="https://www.youtube.com/embed/_8Pwc5uBbGE?autoplay=1" videCoverBgSrc="assets/images/waree-video-cover-image-home.jpg" videoCoverText="Why Choose Waaree?" />
                                    </div>
                                </Col>
                                <Col xl={6} className="grid-right grid-column">
                                    <div className="col-inner">
                                        <Row className="inner-row">
                                            <ArchievementGrid archivementBg="assets/images/film-history.jpg" achievementTitle="Firm History" achievementText="Click Here To Find All Our locations" achievementButton="/contact-waaree" bgtheme="green-bg" />
                                            <ArchievementGrid archivementBg="assets/images/Leadership.jpg" achievementTitle="Leadership" achievementText="Waaree's leaders & board members driving company success." achievementButton="/about-waaree" bgtheme="pink-bg" />
                                            <ArchievementGrid archivementBg="assets/images/awards.jpg" achievementTitle="Awards" achievementText="The best brand of the year" achievementButton="/awards" bgtheme="pink-bg" />
                                            <ArchievementGrid archivementBg="assets/images/CSR.jpg" achievementTitle="CSR" achievementText="Empowering communities by going the extra mile" achievementButton="/csr" bgtheme="green-bg" />
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="small-round-shape top-left custom-round">
                <div className="yellow-round small reveal-fade"></div>
                <div className="green-round big reveal-fade"></div>
            </div>
            <div className="inner-round-shape bottom-right custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </div>
    )
}

export default HomeAchievementSection;