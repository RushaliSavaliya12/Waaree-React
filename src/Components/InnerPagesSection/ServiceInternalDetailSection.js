import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';
import ServiceListColSingle from './ServiceListColSingle';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const ServiceInternalDetailSection = () => {

    return (
        <section className="section service-detail-section two-col-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Floating Solar" titleTheme="dark-title" />
                        <Row className="image-content-row">
                            <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                            <TwoColSecContentCol contentColText="We are a solar energy solution company that aims to develop innovative and smart technologies for a sustainable future. Floating Solar Solution obviates the need for large tracts of land by installing solar panels on lakes, ponds, reservoirs, lagoons etc. which are available in abundance in most of places in country. Floating Solar PV Systems allows PV panels to be installed on unused areas of water, converting unutilised areas into profitable generators of renewable energy." />
                        </Row>
                        <Row className="service-list-row">
                            <ServiceListColSingle />
                        </Row>
                    </div>
                </Container>
                <RoundSvgSectionTop />
            </div>
        </section>
    )

}

export default ServiceInternalDetailSection;