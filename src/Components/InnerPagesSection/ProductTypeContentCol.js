import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ProductTypeContentCol = () => {

    const ProductTypeData = [
        {
            id: 1,
            productTitle: "Aditya Series 60 cells",
            productTypeImageSrc: "assets/images/aditya-series-66.jpg",
            productLinkUrl: "#",
            datasheetLink: "#",
        },
        {
            id: 2,
            productTitle: "Aditya Series 72 cells",
            productTypeImageSrc: "assets/images/aditya-series-72.jpg",
            productLinkUrl: "#",
            datasheetLink: "#"
        },
        {
            id: 3,
            productTitle: "Aditya Series 144 cells",
            productTypeImageSrc: "assets/images/aditya-series-144.jpg",
            productLinkUrl: "#",
            datasheetLink: "#"
        },
    ]

    return (
        <>
            {ProductTypeData.map((val) =>

                <Col lg={4} md={6} className="product-content-col reveal-fade stagger-animation">
                    <div className="col-inner product-content-inner">
                        <div className="product-type-content">
                            <div className="product-image">

                                <img src={val.productTypeImageSrc} alt='' />

                            </div>
                            <div className="product-content-wrap">
                                <h4 className="product-title">{val.productTitle}</h4>
                                <div className="product-content-text">
                                    <ul className="product-data-list">
                                        <li>WS250Wp – WS295Wp</li>
                                        <li>Higher power output & lower BOS cost</li>
                                        <li>Better heat dissipation, higher safety</li>
                                        <li>40 mm anodized aluminium alloy</li>
                                        <li>Easy installation</li>
                                        <li>IP68 / Weatherproof PPO</li>
                                        <li>Simplified wire fix</li>
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                    <a href={val.shopNowLink} className="btn-small btn btn-primary">Shop Now<i class="fas fa-cart-arrow-down"></i></a>
                                    <a href={val.datasheetLink} className="btn-white btn-small small-btn btn btn-primary" download>Data Sheet<i class="fas fa-arrow-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )

}

export default ProductTypeContentCol;