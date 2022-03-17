import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import SocialMediaIcon from '../SocialMediaIcon';



const TeamDetailSection = () => {
    return (
        <section className="section team-detail-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="team-member-title">
                            <SectionTitle sectionTitle="Hitesh Chimanlal Doshi" titleTheme="dark-title" />
                            <span className="team-member-post reveal-fade">Chairman & Managing Director</span>
                        </div>
                        <Row className="team-detail-row">
                            <Col md={4} className="people-image-col reveal-fade stagger-animation">
                                <div className="col-inner">
                                    <div className='people-image'>
                                        <img src="assets/images/hitesh-chimanlal.jpg" alt=''/>
                                    </div>
                                    <div className="socia-media-wrap">
                                        <SocialMediaIcon />
                                    </div>
                                </div>  
                            </Col>
                            <Col md={8} className="people-detail-col reveal-fade stagger-animation">
                                <div className="col-inner">
                                    <div className="team-detail-text">
                                        <div className="team-quotes"> 
                                            <blockquote>Mr. Hitesh Doshi is the Chairman of our Board and Managing Director of our Company.</blockquote>
                                        </div>
                                        <div className="content-text">
                                            <h4>Experiance</h4>
                                            <p>Hitesh Chimanlal Doshi is the Chairman of our Board and Managing Director of our Company. He holds a bachelor’s degree in commerce from the University of Mumbai. He also holds a doctorate in professional entrepreneurship in business project management from the European Continental University. He has been associated with our Company since 1999 and is currently responsible for, inter alia, overseeing our Company’s financial performance, investments and other business ventures, providing strategic advice to the Board, developing and executing our Company’s business strategies and establishing policies and legal guidelines. He has over 21 years of experience in the engineering industry. </p>
                                        </div>
                                        <div className="content-text">
                                            <h4>Education</h4>
                                            <p>He has been associated with our Company since 1999 and is currently responsible for, inter alia, overseeing our Company’s financial performance, investments and other business ventures, providing strategic advice to the Board, developing and executing our Company’s business strategies and establishing policies and legal guidelines. He has over 21 years of experience in the engineering industry. </p>
                                        </div>
                                    </div>
                                </div>  
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default TeamDetailSection;