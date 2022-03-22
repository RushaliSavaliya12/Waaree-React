import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import UseSolarBoxSingle from './UseSolarBoxSingle';

const WaareePrimeSteps = () => {

    const StepData = [
        {
            id: 1,
            stepIconImage: "assets/images/register-icon.png",
            stepTitle: "Register",
        },
        {
            id: 2,
            stepIconImage: "assets/images/earn-points-icon.png",
            stepTitle: "Earn Points",
        },
        {
            id: 3,
            stepIconImage: "assets/images/redeem-icon.png",
            stepTitle: "Redeem",
        }
    ]
    return (
        <>
            <div className="steps-wrap">
                {StepData.map((val) =>

                    <div className="step-single" key={val.id}>
                        <span className="step-no h3">{val.id}</span>
                        <div className="step-content">

                            <div className="icon-wrap">
                                <img src={val.stepIconImage} alt="" />
                            </div>
                            <h4 className="step-title">{val.stepTitle}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WaareePrimeSteps;