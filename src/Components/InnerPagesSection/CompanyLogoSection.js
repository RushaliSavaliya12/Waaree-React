import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CompanyLogoSlider from '../AboutpageSection/aboutsectionInnerComponent/CompanyLogoSlider';


const CompanyLogoSection = () => {
    return (
        <section className="section company-logo-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <h4 className="title-small text-center reveal-fade">We follow the strictest production guidelines and the best International Industry
                            Standards and Practices with all major national & international certifications.</h4>
                        <CompanyLogoSlider />
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default CompanyLogoSection;