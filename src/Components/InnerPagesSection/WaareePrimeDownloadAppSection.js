import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DownloadAppCol from './DownloadAppCol';

const WaareePrimeDownloadAppSection = (props) => {
    return (
        <section className={`section download-app-section two-col-section ${props.extraClassName}`} style={{backgroundColor:`${props.sectionBgColor} `}}>
            <div className="section-inner ">
                <Container>
                    <div className="section-wrap">
                        <Row className="image-content-row">
                            <Col md={6} className="content-col reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <DownloadAppCol downloadAppTitle={props.SectiondownloadAppTitle} downloadAppSubTitle={props.SectiondownloadAppSubTitle}/>
                                </div>
                            </Col>
                            <Col md={6} className="image-col reveal-fade stagger-animation">
                                <div className='col-inner'>
                                    <img src={props.downloadAppImageSrc} alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default WaareePrimeDownloadAppSection;