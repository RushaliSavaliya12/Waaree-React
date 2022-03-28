import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DownloadAppCol = (props) => {
    return (
        <div className="download-app-content">
            <h3 className='section-title'>{props.downloadAppTitle}</h3>
            <span className="sub-title">{props.downloadAppSubTitle}</span>
            <Row className="download-btn-row">
                <Col sm={6} className="download-app-col reveal-fade stagger-animation">
                    <div className="download-app-btn">
                        <a href='#'>
                            <img src="assets/images/google-play-btn.png" alt=""/>
                        </a>
                        <a href='#'>
                            <img src="assets/images/apple-app-store.png" alt=""/>
                        </a>
                    </div>
                </Col>
                <Col sm={6} className="qr-code-col reveal-fade stagger-animation">
                    <img src="assets/images/app-qr-code.png" alt=""/>
                </Col>
            </Row>
        </div>
    )
}

export default DownloadAppCol;