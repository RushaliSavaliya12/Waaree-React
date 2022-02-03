import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
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
                            <div className="alternate-col-wrap">
                                <Row className="image-content-row">
                                    <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                    <TwoColSecContentCol contentColTitle="Stringer" contentColText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat pharetra quam euismod porttitor. Donec congue velit eu tortor efficitur venenatis. Vivamus dictum enim metus, rhoncus accumsan metus aliquam ac. Vivamus mollis libero id convallis sodales. Ut sagittis facilisis orci, ut fermentum quam facilisis non. Nam a facilisis elit. Sed sit amet blandit ligula. Vivamus finibus aliquet scelerisque." />
                                </Row>
                                <Row className="image-content-row">
                                    <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                    <TwoColSecContentCol contentColTitle="Stringer" contentColText="Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar panel manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally." />
                                </Row>
                                <Row className="image-content-row">
                                    <TwoColSecImageCol imageColSrc="assets/images/about-banner.jpg" />
                                    <TwoColSecContentCol contentColTitle="Stringer" contentColText="Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar panel manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 380 locations nationally and 20 countries internationally." />
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <RoundSvgSectionTop />
            </section>
        </>
    )
}

export default TwoColSection;