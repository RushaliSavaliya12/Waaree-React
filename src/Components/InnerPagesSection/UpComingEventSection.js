import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';

import RoundSvgSectionTop from './RoundSvgSectionTop';

const UpComingEventSection = () => {

    const upcomingData = [
        {
            id: 1,
            logoSrc: "assets/images/smart-cities-event.png",
            hoverTitle:"India Expo Center, Greater Noida",
            hoverEventDate:"18-20 September 2019"
        },
        {
            id: 2,
            logoSrc: "assets/images/IIDE-Event.png",
            hoverTitle:"India Expo Center, Greater Noida",
            hoverEventDate:"18-20 September 2019"
        },
        {
            id: 3,
            logoSrc: "assets/images/InterSolar-event.png",
            hoverTitle:"test",
            hoverEventDate:"18-20 September 2019"
        },
    ]


    return (
        <section className="section upcoming-event-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Upcoming Events" titleTheme="dark-title mb-80" />
                        <div className="event-listing-wrap">
                            <div className="event-listing">
                                <Row className="event-listing-row p-inner-50">
                                    {upcomingData.map((val) =>
                                        <Col lg={4} sm={6} className="event-col-single reveal-fade stagger-animation" key={val.key}>
                                            <div className="col-inner">
                                                <img src={val.logoSrc} alt="" />
                                                <div className="event-hover-content">
                                                    <h4>{val.hoverTitle}</h4>
                                                    <span>{val.hoverEventDate}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    )}

                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
                <RoundSvgSectionTop />
            </div>
        </section>
    )
}

export default UpComingEventSection;