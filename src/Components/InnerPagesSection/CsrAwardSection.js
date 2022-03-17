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
                            <Col md={6} className="csr-award-left-col reveal-fade">
                                <div className="col-inner">
                                    <SectionTitle sectionTitle="Awards" titleTheme="light-title" />
                                    <div className="content-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat pharetra quam euismod porttitor. Donec congue velit eu tortor efficitur venenatis. Vivamus dictum enim metus, rhoncus accumsan metus aliquam ac.</p>
                                    </div>
                                    <div className="btn-wrap">
                                        <ButtonDiv buttonHref="#" buttonText="Go to Awards" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="csr-award-right-col reveal-fade">
                                <div className="col-inner">
                                    <div className="latest-award-text-box">
                                        <h4 className="latest-label">Latest</h4>
                                        <div className="latest-award-text">
                                            <p>Waaree Energies Limited has announced that the World CSR Congress has recognised its Chairman and Managing Director Mr Hitesh Doshi as the Renewable Energy Leader of the Year.</p>
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