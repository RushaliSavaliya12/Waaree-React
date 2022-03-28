import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import WaareePrimeIconBoxCol from './WaareePrimeIconBoxCol';

const WaareePrimeIconBoxSection = (props) => {

    return (
        <>
            <section className="section prime-icon-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            {props.iconBoxSimpleContent}
                            <Row className="icon-box-row">
                                <WaareePrimeIconBoxCol />
                            </Row>
                            {props.applyNowBanner}
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default WaareePrimeIconBoxSection;