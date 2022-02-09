import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const ServicesSingleCol = () => {

    const ServicesSingleColData = [
        {
            id: "1",
            ServiceLink: "#",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Gound Mounted",
            ServiceText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "2",
            ServiceLink: "#",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Floating Solar",
            ServiceText: "If you switch to KW Solar Rooftop for Home, you can immensely save up on your electricity bills. You will see it go down by up-to 50%. Government is also encouraging residential as well as commercial installation..."
        },
        {
            id: "3",
            ServiceLink: "#",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Roof Top",
            ServiceText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "4",
            ServiceLink: "#",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Operations & Maintenance",
            ServiceText: "Installation experience of over 375MW spread across 15 projects and 5 States, Over 125 MW O&M contract of solar power plants assets..."
        },
    ]

    return (
        <>
            {ServicesSingleColData.map((val) =>
                <Col lg={4} sm={6} className="service-col-single">
                    <div className="col-inner">
                        <div class="service-image">
                            <a href={val.ServiceLink}>
                                <img src={val.serviceImageSrc} alt="services image" />
                            </a>
                        </div>
                        <div className="service-content">
                            <h4 className="service-title">{val.serviceTitle}</h4>
                            <div className="service-text">
                                <p>{val.ServiceText}</p>
                            </div>
                            <div class="read-more-link"><a href={val.ServiceLink} class="read-more">Read More<i class="fa fa-chevron-right"></i></a></div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )
}

export default ServicesSingleCol;