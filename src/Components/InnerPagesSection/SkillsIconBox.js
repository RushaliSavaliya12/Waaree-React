import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import WaareePrimeSteps from './WaareePrimeSteps';

const SkillsIconBox = () => {

    const SkillsIconBoxData = [
        {
            id: 1,
            iconSrc: "assets/images/site-survey-icon.png",
            IconBoxTitle: "Site Survey",
            iconBoxContent:"Visit, Analyze, Submit the site survey reports and earn",
        },
        {
            id: 2,
            iconSrc: "assets/images/installation-icon.png",
            IconBoxTitle: "Installation",
            iconBoxContent:"Now earn on every installation you complete.",
        },
        {
            id: 3,
            iconSrc: "assets/images/o&p-icon.png",
            IconBoxTitle: "Operations and Maintenance",
            iconBoxContent:"start taking yearly contracts for O&M with us.",
        },
        {
            id: 4,
            iconSrc: "assets/images/cleaning-icon.png",
            IconBoxTitle: "Cleaning",
            iconBoxContent:"Increase Solar Plants efficiency by cleaning them and earn.",
        }
    ]

    return (
        <>

            {SkillsIconBoxData.map((val) =>

                <Col lg={3} sm={6} className="skill-icon-box icon-box-single reveal-fade stagger-animation">
                    <div className="col-inner">
                        <div className="icon-box-top">
                            <div className="icon-wrap">
                                <img src={val.iconSrc} />
                            </div>
                            <div className="skills-title">
                                <h5>{val.IconBoxTitle}</h5>
                            </div>
                        </div>
                        <div className="icon-box-content">
                            <p>{val.iconBoxContent}</p>
                        </div>

                    </div>
                </Col>
            )}

        </>
    )
}

export default SkillsIconBox;