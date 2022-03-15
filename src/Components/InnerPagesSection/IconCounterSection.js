import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import IconCounterSingle from './IconCounterSingle';

const IconCounterSection = () => {
    return (
        <>
            <section className="section join-community-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Join a community Donec gravida varius sollicitudin" titleTheme="green-title" />
                            <div className="counter-row">
                                <IconCounterSingle />
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default IconCounterSection;