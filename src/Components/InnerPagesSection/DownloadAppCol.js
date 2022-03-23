import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WaareePrimeHelpCol from './WaareePrimeHelpCol';

const DownloadAppCol = (props) => {
    return (
        <div className="download-app-content">
            <h3 className='section-title'>Download the App Now</h3>
            <Row className="download-btn-row">
                <Col sm={6} className="download-app-col">
                    <div className="download-app-btn">
                        <a href='#'>
                            <img src="assets/images/google-play-btn.png" alt=""/>
                        </a>
                        <a href='#'>
                            <img src="assets/images/apple-app-store.png" alt=""/>
                        </a>
                    </div>
                </Col>
                <Col sm={6} className="qr-code-col">
                    <img src="assets/images/app-qr-code.png" alt=""/>
                </Col>
            </Row>
        </div>
    )
}

export default DownloadAppCol;