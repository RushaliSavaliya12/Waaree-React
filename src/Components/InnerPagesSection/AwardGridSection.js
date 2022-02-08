import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AwardGridSingle from './AwardGridSingle';
import RoundSvgSectionTop from './RoundSvgSectionTop';



const AwardGridSection = () => {
    return (
        <section className="section company-logo-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <Row className="awards-grid-row">
                            <AwardGridSingle AwardGridImageBg="assets/images/contact-banner.jpg" awardGridTitle="Solar Quarter Consumer Choice Awards" awardGridText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
                            <AwardGridSingle AwardGridImageBg="assets/images/contact-banner.jpg" awardGridTitle="Solar Quarter Consumer Choice Awards" awardGridText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
                            <AwardGridSingle AwardGridImageBg="assets/images/contact-banner.jpg" awardGridTitle="Solar Quarter Consumer Choice Awards" awardGridText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
                            <AwardGridSingle AwardGridImageBg="assets/images/contact-banner.jpg" awardGridTitle="Solar Quarter Consumer Choice Awards" awardGridText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. " />
                        </Row>
                    </div>
                </Container>
            </div>
            <RoundSvgSectionTop />
        </section>
    )
}

export default AwardGridSection;