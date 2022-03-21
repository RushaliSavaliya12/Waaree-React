import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';

const PastEventSection = () => {

    const pastEventData = [
        {
            id: 1,
            logoSrc: "assets/images/Renewable-Event.png",
            hoverTitle: "India Expo Center, Greater Noida",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 2,
            logoSrc: "assets/images/waaree-event.png",
            hoverTitle: "test",
            hoverEventDate: "18-20 July 2019"
        },
        {
            id: 3,
            logoSrc: "assets/images/solar-show-event.png",
            hoverTitle: "Solar",
            hoverEventDate: "01-20 September 2019"
        },
        {
            id: 4,
            logoSrc: "assets/images/solar-Power-event.png",
            hoverTitle: "Solar power",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 5,
            logoSrc: "assets/images/elecrama-event.png",
            hoverTitle: "India Expo Center, Greater Noida",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 6,
            logoSrc: "assets/images/InterSolar-event.png",
            hoverTitle: "test",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 7,
            logoSrc: "assets/images/smart-cities-event.png",
            hoverTitle: "India Expo Center, Greater Noida",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 8,
            logoSrc: "assets/images/IIDE-Event.png",
            hoverTitle: "India Expo Center, Greater Noida",
            hoverEventDate: "18-20 September 2019"
        },
        {
            id: 8,
            logoSrc: "assets/images/IIDE-Event.png",
            hoverTitle: "India Expo Center, Greater Noida",
            hoverEventDate: "18-20 September 2019"
        },

    ]


    return (
        <section className="section past-event-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <SectionTitle sectionTitle="Past Events" titleTheme="dark-title mb-80" />
                        <div className="event-listing-wrap">
                            <div className="event-listing">
                                <Row className="event-listing-row p-inner-50">
                                    {pastEventData.map((val) =>
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
                                <div className="load-more-btn btn-wrap text-center reveal-fade">
                                    <ButtonDiv buttonHref="#" buttonText="Load More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default PastEventSection;