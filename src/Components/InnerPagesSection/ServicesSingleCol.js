import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";



const ServicesSingleCol = () => {

    const ServicesSingleColData = [
        {
            id: "1",
            ServiceLink: "/service-epc-floating-solar-solution",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Gound Mounted",
            ServiceText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "2",
            ServiceLink: "/service-epc-floating-solar-solution",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Floating Solar",
            ServiceText: "If you switch to KW Solar Rooftop for Home, you can immensely save up on your electricity bills. You will see it go down by up-to 50%. Government is also encouraging residential as well as commercial installation..."
        },
        {
            id: "3",
            ServiceLink: "/service-epc-floating-solar-solution",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Roof Top",
            ServiceText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "4",
            ServiceLink: "/service-epc-floating-solar-solution",
            serviceImageSrc: "assets/images/solar-panel-service.jpg",
            serviceTitle: "Operations & Maintenance",
            ServiceText: "Installation experience of over 375MW spread across 15 projects and 5 States, Over 125 MW O&M contract of solar power plants assets..."
        },
    ]

    return (
        <>
            {ServicesSingleColData.map((val) =>
                <Col md={6} className="service-col-single reveal-fade">
                    <div className="col-inner">
                        <div class="service-image">
                            <Link to={val.ServiceLink}>
                                <img src={val.serviceImageSrc} alt="services image" />
                            </Link>
                        </div>
                        <div className="service-content">
                            <h4 className="service-title">{val.serviceTitle}</h4>
                            <div className="service-text">
                                <p>{val.ServiceText}</p>
                            </div>
                            <div class="read-more-link"><Link to={val.ServiceLink} class="read-more">Read More<i class="fa fa-chevron-right"></i></Link></div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )
}

export default ServicesSingleCol;