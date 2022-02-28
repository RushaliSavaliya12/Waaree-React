import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import SolarEnergyRow from './SolarEnergyRow';

const SolarEnergySection = () => {
    return (
        <>
            <section className="section solar-energy-section" style={{backgroundColor:"#11582b"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="How can we use the sun’s energy?" titleTheme="light-title" className="text-center" />
                            <div className="solar-energy-wrapper">
                                <SolarEnergyRow />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default SolarEnergySection;