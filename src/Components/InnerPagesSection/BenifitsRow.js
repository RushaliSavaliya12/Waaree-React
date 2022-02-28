import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const BenifitsRow = () => {

    const BenifitRowData=[
        {
            id:1,
            benifitBgSrc:"",
            benifitTitle:"Clean",
            benifitIconSrc:"",
            benifitText:"Produces no fumes",
        },
        {
            id:2,
            benifitBgSrc:"",
            benifitTitle:"Quiet",
            benifitIconSrc:"",
            benifitText:"Less sound pollution unlike diesel generators",
        },
        {
            id:3,
            benifitBgSrc:"",
            benifitTitle:"Renewable",
            benifitIconSrc:"",
            benifitText:"Unlike coal and other fossil fuels",
        }
    ]

    return (
        <>
            <Row className="benifits-row">
                {BenifitRowData.map((val) =>
                    <Col md={4} className="benifit-col" key={val.id}>
                        <div className="col-inner" style={{backgroundImage:`url(${val.benifitBgSrc})`}}>
                            <div className='icon-wrap'>
                                <img src={val.benifitIconSrc} />
                            </div>
                            <div className="benifit-content">
                                <h4>{val.benifitTitle}</h4>
                                <div className="content-text">
                                    <p>{val.benifitText}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default BenifitsRow;