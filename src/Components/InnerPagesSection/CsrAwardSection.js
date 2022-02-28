import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv'

const CsrAwardSection = () => {

    return (
        <section className="section csr-award-section" style={{ backgroundImage: "url(assets/images/join-team-banner.png)" }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="csr-award-row">
                            <Col lg={6} className="csr-award-left-col">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle="Awards" titleTheme="light-title" />
                                    <div className="content-text">
                                        <p>Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar PV Module manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 350 locations nationally and 68 countries internationally.</p>
                                    </div>
                                    <div className="btn-wrap">
                                        <ButtonDiv buttonHref="#" buttonText="Go to Awards" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="csr-award-right-col">
                                <div className="col-inner">
                                    <div className="latest-award-text-box">
                                        <span className="latest-label">Latest</span>
                                        <div className="latest-award-text">
                                            <p>Waaree Energies Ltd. is the flagship company of Waaree Group, founded in 1989 with headquarters in Mumbai, India. It has India's largest Solar PV Module manufacturing capacity of 2 GW's at its plants in Surat and Umbergaon in Gujarat. Waaree Energies is amongst the top player in India in providing EPC services, project development, rooftop solutions, and solar water pumps and also as an Independent Power Producer. Waaree has its presence in over 350 locations nationally and 68 countries internationally.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )

}

export default CsrAwardSection;