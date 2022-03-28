import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


const AboutCsrSection = () => {

    const CsrImage = (props) => {
        return (
            <div className="image-wrap reveal-fade">
                <img src={props.csrImageSrc} alt="" />
            </div>
        )
    }

    return (
        <section className="section suitanable-living-section" style={{ backgroundColor: "#f0faf2" }}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="suitanable-row">
                            <div className="col-lg-6 suitanable-content-column">
                                <div className="column-inner">
                                    <h2 className="section-title dark-title reveal-fade">Sustainable Living</h2>
                                    <div className="content-text reveal-fade">
                                        <p>Our goal is to achieve sustainable living and we will inspire to bring this in life by encouraging people to take a step towards green energy. Waaree is present in over 388 locations in India & 20 Countries worldwide.
                                        </p>
                                        <p>Being close to local communities our aim is to make your home safe and sustainable. Waaree runs a wide variety of CSR program helps people, environment and communities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 suitanable-image-column">
                                <div className="image-col-inner">
                                    <CsrImage csrImageSrc="assets/images/csr-1.jpg" />
                                    <CsrImage csrImageSrc="assets/images/csr-2.jpg" />
                                </div>
                            </div>
                            <div className="col-12 btn-wrap text-center reveal-fade">
                                <Link to="/csr" className="btn btn-primary">Read More<i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutCsrSection;