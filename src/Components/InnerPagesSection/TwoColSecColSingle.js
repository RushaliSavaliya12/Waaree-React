import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const TwoColSecContentCol = (props) => {
    return (
        <>
            <Col lg={6} className="content-col reveal-fade" >
                <div className="col-inner">
                    <h4 className="content-col-title">{props.contentColTitle}</h4>
                    <div className="content-col-text">
                        <p>{props.contentColText}</p>
                        <p>{props.contentColText2}</p>
                    </div>
                </div>
            </Col>
        </>
    )
}
const TwoColSecImageCol = (props) => {
    return (
        <>
            <Col lg={6} className="image-col reveal-fade">
                <div className="col-inner">
                    <img src={props.imageColSrc} alt='Col Image'/>
                </div>
            </Col>
        </>
    )
}



export { TwoColSecContentCol, TwoColSecImageCol};