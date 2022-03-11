import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const ClienteleLogoSection = () => {

    const CompanyLogoSliderData = [
        {
            id: 1,
            logoSrc: "assets/images/company-logo/Acme.jpg",
        },
        {
            id: 2,
            logoSrc: "assets/images/company-logo/adani.jpg",
        },
        {
            id: 3,
            logoSrc: "assets/images/company-logo/aditya_birla.jpg",
        },
        {
            id: 4,
            logoSrc: "assets/images/company-logo/Amara-Raja.jpg",
        },
        {
            id: 5,
            logoSrc: "assets/images/company-logo/amp-energy.png",
        },
        {
            id: 6,
            logoSrc: "assets/images/company-logo/assam-energy-development-logo.jpg",
        },
        {
            id: 7,
            logoSrc: "assets/images/company-logo/azur-logo.jpg",
        },
        {
            id: 8,
            logoSrc: "assets/images/company-logo/bel-logo.jpg",
        },
        {
            id: 9,
            logoSrc: "assets/images/company-logo/Bharat-petroleum-logo.jpg",
        },
        {
            id: 10,
            logoSrc: "assets/images/company-logo/bhel.jpg",
        },
        {
            id: 11,
            logoSrc: "assets/images/company-logo/bosch.jpg",
        },
        {
            id: 12,
            logoSrc: "assets/images/company-logo/bsnl-logo.jpg",
        },
        {
            id: 13,
            logoSrc: "assets/images/company-logo/central-electronics-logo.jpg",
        },
        {
            id: 14,
            logoSrc: "assets/images/company-logo/chhattisgarh-energy-logo.jpg",
        },
        {
            id: 15,
            logoSrc: "assets/images/company-logo/Fourth-partner.jpg",
        },
        {
            id: 16,
            logoSrc: "assets/images/company-logo/Haldiram-logo.jpg",
        },
        {
            id: 17,
            logoSrc: "assets/images/company-logo/Hareda-logo.jpg",
        },
        {
            id: 18,
            logoSrc: "assets/images/company-logo/hero.jpg",
        },
        {
            id: 19,
            logoSrc: "assets/images/company-logo/hild_energy.jpg",
        },
        {
            id: 20,
            logoSrc: "assets/images/company-logo/Himurja-logo.jpg",
        },
        
    ]


    return (
        <section className="section clientele-logo-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="company-logo-filter">
                            <div className="filter-btn-wrap">
                                <ul className='filter-btn-list'>
                                    <li>
                                        <a className="filter-btn btn active">Domestic</a>
                                    </li>
                                    <li>
                                        <a className="filter-btn btn">International</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="company-logo-listing">
                                <Row className="company-logo-row">
                                    {CompanyLogoSliderData.map((val) =>
                                        <Col lg={3} md={4} sm={6} className="col-20" key={val.key}>
                                            <div className="col-inner">
                                                <img src={val.logoSrc} alt="" />
                                            </div>
                                        </Col>
                                    )}

                                </Row>
                                <div className="load-more-btn btn-wrap text-center">
                                    <ButtonDiv buttonHref="#" buttonText="Load More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <RoundSvgSectionTop />
            </div>
        </section>
    )
}

export default ClienteleLogoSection;