import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import BoardDirectorSlider from './aboutsectionInnerComponent/BoardDirectorSlider';

const AboutBoardDirectorSection = () => {
    return (
        <section className="section board-director-section">
            <div className="section-inner ">
                <div className="container">
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Board Of Directors" titleTheme="dark-title" />
                        <BoardDirectorSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBoardDirectorSection;