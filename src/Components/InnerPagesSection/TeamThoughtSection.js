import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import TeamThoughtSlider from './TeamThoughtSlider';

const TeamThoughtSection = () => {
    return (
        <section className="section team-thought-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Thoughts from Our Team" titleTheme="dark-title"/>
                        <div className="team-thought-slider-wrap">
                            <TeamThoughtSlider />
                        </div>

                    </div>
                </Container>
                <div className="section-inner-round"></div>
            </div>
        </section>
    )
}

export default TeamThoughtSection;