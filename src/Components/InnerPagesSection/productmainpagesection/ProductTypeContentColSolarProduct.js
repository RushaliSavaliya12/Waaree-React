import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ProductTypeContentColSolarProduct = () => {

    const ProductTypeData = [
        {
            id: 1,
            productTitle: "All in one solar street light WEPSWS612",
            productTypeImageSrc: "assets/images/Solar-Street-Light.jpg",
            productLinkUrl: "#",
        
        },
        {
            id: 2,
            productTitle: "Solar mobile charger WEPCWS305",
            productTypeImageSrc: "assets/images/Solar-power-bank.jpg",
            productLinkUrl: "#",
            
        },
        {
            id: 3,
            productTitle: "Waaree Solar bag VX WEPBVX0001",
            productTypeImageSrc: "assets/images/waaree-solar-bag.jpg",
            productLinkUrl: "#",
            
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

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )

}

export default ProductTypeContentColSolarProduct;