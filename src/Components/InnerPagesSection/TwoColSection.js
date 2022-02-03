import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { TwoColSecContentCol, TwoColSecImageCol } from './TwoColSecColSingle';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from '../InnerPagesSection/RoundSvgSectionTop';

const TwoColSection = () => {
    return (
        <>
            <section className="section two-col-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Manufacturing Process" titleTheme="dark-title" />
                            <Row className="image-content-row alternate-col">
                                <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                <TwoColSecContentCol contentColTitle="Stringer" contentColText="Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar panel manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally."/>
                            </Row>
                            <Row className="image-content-row alternate-col">
                                <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                <TwoColSecContentCol contentColTitle="Stringer" contentColText="Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar panel manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally."/>
                            </Row>
                            <Row className="image-content-row alternate-col">
                                <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                <TwoColSecContentCol contentColTitle="Stringer" contentColText="Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar panel manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally."/>
                            </Row>
                            
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default TwoColSection;