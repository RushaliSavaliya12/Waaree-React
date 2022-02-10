
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ServiceGreenBoxCol = (props) => {
    return (
        <Col md={4} className="service-green-col reveal-fade">
            <div className="col-inner">
                <h4>{props.serviceGreenTitle}</h4>
                <span className="service-city-type">{props.serviceCitytype}</span>
            </div>
        </Col>
    )
}

export default ServiceGreenBoxCol;