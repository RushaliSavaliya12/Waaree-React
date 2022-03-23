import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WaareePrimeHelpCol from './WaareePrimeHelpCol';

const WaareePrimeHelpSection = (props) => {
    return (
        <section className="section contact-help-section two-col-section">
            <div className="section-inner ">
                <div className="section-wrap">
                    <Row className="help-sec-row">
                        <WaareePrimeHelpCol />
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default WaareePrimeHelpSection;