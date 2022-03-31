import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import LetUsKnowRow from './LetUsKnowRow';

const LetUsKnowSection = () => {

    return (
        <section className="section letus-know-section">
            <div className="section-inner">
                    <div className="section-wrap">
                            <Container>
                                <SectionTitle sectionTitle="Let us Help You" titleTheme="dark-title" />
                                <LetUsKnowRow />
                            </Container>
                    </div>
            </div>
        </section>
    )

}

export default LetUsKnowSection;