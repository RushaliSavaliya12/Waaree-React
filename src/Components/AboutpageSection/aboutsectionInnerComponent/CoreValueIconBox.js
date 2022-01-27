import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const CoreValueIconBox = () => {
    const CoreValueIconBoxSingle = (props) => {
        return (
            <Col lg={3} className="core-value-single reveal-fade">
                <div className="core-value-inner">
                    <div className="icon-wrap">
                        <img src={props.iconSrc} alt={props.iconBoxTitle} />
                    </div>
                    <h5 className="core-value-title">{props.iconBoxTitle}</h5>
                </div>
            </Col>
        )

    }

    return (
        <>
            <Row className="core-value-row">
                <CoreValueIconBoxSingle iconSrc="assets/images/intergrity-icon.png" iconBoxTitle="Intergrity" />
                <CoreValueIconBoxSingle iconSrc="assets/images/respect-individual-icon.png" iconBoxTitle="Respect for Individuals" />
                <CoreValueIconBoxSingle iconSrc="assets/images/customer-first-icon.png" iconBoxTitle="Customer First" />
                <CoreValueIconBoxSingle iconSrc="assets/images/passion-icon.png" iconBoxTitle="Passion for Excellence" />
                <CoreValueIconBoxSingle iconSrc="assets/images/improvement-inovation-icon.png" iconBoxTitle="Continuous Improvements & Innovation" />
            </Row>
        </>
    )
}

export default CoreValueIconBox;