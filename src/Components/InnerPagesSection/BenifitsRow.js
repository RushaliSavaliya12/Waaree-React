import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const BenifitsRow = () => {

    const BenifitRowData=[
        {
            id:1,
            benifitBgSrc:"assets/images/clean-box-bg.jpg",
            benifitTitle:"Clean",
            benifitIconSrc:"assets/images/clean-leaf-icon.png",
            benifitText:"Produces no fumes",
        },
        {
            id:2,
            benifitBgSrc:"assets/images/quite-box-bg.jpg",
            benifitTitle:"Quiet",
            benifitIconSrc:"assets/images/quite-icon.png",
            benifitText:"Less sound pollution unlike diesel generators",
        },
        {
            id:3,
            benifitBgSrc:"assets/images/renewable-box-bg.jpg",
            benifitTitle:"Renewable",
            benifitIconSrc:"assets/images/renewable-icon.png",
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