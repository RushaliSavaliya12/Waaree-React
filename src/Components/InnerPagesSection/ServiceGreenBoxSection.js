import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceGreenBoxCol from './ServiceGreenBoxCol';
import RoundSvgSectionTop from './RoundSvgSectionTop';



const ServiceGreenBoxSection = () => {
    return (
        <section className="section service-greenbox-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="green-box-row row">
                            <ServiceGreenBoxCol serviceGreenTitle="50 MW IN 100 DAYS" serviceCitytype="VIETNAME - 2019"/>
                            <ServiceGreenBoxCol serviceGreenTitle="27.5 MW IN 90 DAYS" serviceCitytype="RAJASTHAN - 2015"/>
                            <ServiceGreenBoxCol serviceGreenTitle="7 MW IN 70 DAYS" serviceCitytype="KARNATAKA - 2015"/>
                        </Row>
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default ServiceGreenBoxSection;