import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


const ProductsSingleCol = () => {

    const ServicesSingleColData = [
        {
            id: "1",
            productLink: "#",
            productImageSrc: "assets/images/product-slide-1.jpg",
            productTitle: "Solar PV Module",
            productText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "2",
            productLink: "/inverter",
            productImageSrc: "assets/images/Inverter-product.jpg",
            productTitle: "Inverter",
            productText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "3",
            productLink: "#",
            productImageSrc: "assets/images/Solar-products-product.jpg",
            productTitle: "Solar Products",
            productText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "4",
            productLink: "#",
            productImageSrc: "assets/images/lithium-ion-battery-product.jpg",
            productTitle: "Lithium Ion Batteries",
            productText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
        {
            id: "5",
            productLink: "#",
            productImageSrc: "assets/images/solar-water-pumps-product.jpeg",
            productTitle: "Solar Water Pumps",
            productText: "Waaree Energies Solar EPC solutions will provide a good return on investment by utilizing idle ground space or Land. Waaree provides customized EPC solution as per your need and energy consumption..."
        },
    ]

    return (
        <>
            {ServicesSingleColData.map((val) =>
                <Col md={6} className="service-col-single reveal-fade">
                    <div className="col-inner">
                        <div class="service-image">
                            <Link to={val.productLink}>
                                <img src={val.productImageSrc} alt="product image" />
                            </Link>
                        </div>
                        <div className="service-content">
                            <h4 className="service-title">{val.productTitle}</h4>
                            <div className="service-text">
                                <p>{val.productText}</p>
                            </div>
                            <div class="read-more-link"><Link to={val.productLink} class="read-more">Read More<i class="fa fa-chevron-right"></i></Link></div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )
}

export default ProductsSingleCol;