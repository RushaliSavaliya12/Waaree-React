import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';


const AboutJoinTeamSection = () => {
    return (
        <section className="section join-team-section" style={{backgroundImage: "url(assets/images/join-team-banner.png"}}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="join-team-content text-center">
                        <SectionTitle sectionTitle="Join our Team" titleTheme="light-title" />
                            <div className="team-content-text reveal-fade">
                                <p>We are not just another power company, we believe in people passionate about a sustainable change in the energy landscape globally, people just like you. Welcome to our world.</p>
                            </div>
                            <div className="btn-wrap reveal-fade">
                                <a href="https://www.waaree.com/work-with-us" className="btn btn-primary" target="_blank">View Current Position<i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutJoinTeamSection;