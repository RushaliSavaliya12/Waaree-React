import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import CoreValueTab from './CoreValueTab';

const CompanyLogoSection = () => {
    return (
        <section className="section core-value-tab-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Our Five Core Values" titleTheme="dark-title"/>
                        <div className="core-value-tab-wrap">
                             <CoreValueTab />   
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default CompanyLogoSection;