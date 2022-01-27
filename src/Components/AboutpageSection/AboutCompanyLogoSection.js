import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CompanyLogoSlider from './aboutsectionInnerComponent/CompanyLogoSlider';


const AboutCompanyLogoSection = () => {
    return (
        <section className="section company-logo-section"> 
                    <div className="section-inner">
                        <Container>
                            <div className="section-wrap">
                                <CompanyLogoSlider />
                            </div>
                        </Container>
                    </div>
                </section>
    )
}

export default AboutCompanyLogoSection;