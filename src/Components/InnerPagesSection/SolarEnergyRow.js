import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const SolarEnergyRow = () => {

    const SolarEnergyRowData=[
        {
            id:1,
            solarEnergyImageSrc:"assets/images/feedback-image.jpg",
            energyTitle:"Potable water or Irrigation",
            eneryContentEg:"(e.g. solar water pumps)",
        },
        {
            id:2,
            solarEnergyImageSrc:"assets/images/solar-product.jpg",
            energyTitle:"Light or photovoltaic power",
            eneryContentEg:"(eg. a solar cells)",
        },

    ]

    return (
        <>
            <Row className="solar-energy-row">
                {SolarEnergyRowData.map((val) =>
                    <Col md={6} className="solar-energy-col reveal-fade stagger-animation" key={val.id}>
                        <div className="col-inner">
                            <div className="energy-image">
                                <img src={val.solarEnergyImageSrc} alt=""/>
                            </div>
                            <div className="energy-content">
                                <h4>{val.energyTitle}</h4>
                                <span>{val.eneryContentEg}</span>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default SolarEnergyRow;