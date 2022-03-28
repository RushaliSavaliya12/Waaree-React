import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import WaareePrimeSteps from './WaareePrimeSteps';

const ProductServicesSingle = () => {

    const ProductIconBoxData = [
        {
            id: 1,
            iconSrc: "assets/images/wp-icon.png",
            IconBoxTitle: "295wp",
            iconBoxSubTitle:"Power",
        },
        {
            id: 2,
            iconSrc: "assets/images/year-icon.png",
            IconBoxTitle: "30 Years",
            iconBoxSubTitle:"Power Warranty",
        },
        {
            id: 3,
            iconSrc: "assets/images/eficiancy-icon.png",
            IconBoxTitle: "21.4%",
            iconBoxSubTitle:"Efficiency",
        },
        {
            id: 4,
            iconSrc: "assets/images/inch-icon.png",
            IconBoxTitle: "40 mm",
            iconBoxSubTitle:"Anodized aluminium alloy",
        }
    ]

    return (
        <>

            {ProductIconBoxData.map((val) =>

                <Col sm={6} className="icon-box-single reveal-fade stagger-animation">
                    <div className="col-inner">
                            <div className="icon-wrap">
                                <img src={val.iconSrc} />
                            </div>
                            <div className="box-title">
                                <h4>{val.IconBoxTitle}</h4>
                                <span>{val.iconBoxSubTitle}</span>
                            </div>
                    </div>
                </Col>
            )}

        </>
    )
}

export default ProductServicesSingle;