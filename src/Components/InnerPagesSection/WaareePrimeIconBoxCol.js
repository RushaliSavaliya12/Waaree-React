import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import WaareePrimeSteps from './WaareePrimeSteps';

const WaareePrimeIconBoxCol = () => {

    const IconBoxData = [
        {
            id: 1,
            iconSrc: "assets/images/partner-orborded-icon.png",
            IconBoxTitle: "Partners Onboarded",
            greenTitleText: "15+",
        },
        {
            id: 2,
            iconSrc: "assets/images/service-delivered-icon.png",
            IconBoxTitle: "Services Delivered",
            greenTitleText: "60+",
        },
        {
            id: 3,
            iconSrc: "assets/images/training-expert-icon.png",
            IconBoxTitle: "Hours of Training Imparted to Experts",
            greenTitleText: "150+",
        },
        {
            id: 4,
            iconSrc: "assets/images/cities-served-icon.png",
            IconBoxTitle: "City Served",
            greenTitleText: "7",
        }
    ]

    return (
        <>

            {IconBoxData.map((val) =>

                <Col sm={6} className="icon-box-single">
                    <div className="col-inner">
                        <div className="icon-wrap">
                            <img src={val.iconSrc} />
                        </div>
                        <div className="prime-box-title">
                            <h4><span>{val.greenTitleText}</span> {val.IconBoxTitle}</h4>
                        </div>
                    </div>
                </Col>
            )}

        </>
    )
}

export default WaareePrimeIconBoxCol;