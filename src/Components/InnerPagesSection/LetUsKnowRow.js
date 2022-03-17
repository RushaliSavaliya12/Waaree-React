import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const LetUsKnowRow = () => {

    const LetUsKnowRowData = [
        {
          id:1,
          serviceIconSrc:"assets/images/warrantry-registration-icon.png",
          titleText:"Warranty Registration",
          contetText:"Register your Waaree Products online for complete peace of mind anytime, anywhere!",
          
        },
        {
          id:2,
          serviceIconSrc:"assets/images/service-support-icon.png",
          titleText:"Service Support",
          contetText:"Contact us for inquiries about product purchase and order, or feedback and complaints.",
        },
        {
          id:3,
          serviceIconSrc:"assets/images/dealer-locator-icon.png",
          titleText:"Dealer Locator",
          contetText:"Find your nearest Waaree dealer.",
        },
      ]

    return (
        <Row className="letus-know-row">
            {LetUsKnowRowData.map((val) =>
                <Col md={4} key={val.id} className="reveal-fade stagger-animation">
                    <div className="col-inner">
                        <div className="icon-wrap">
                            <img src={val.serviceIconSrc} alt="" />
                        </div>
                        <div className="content-wrap">
                            <h4>{val.titleText}</h4>
                            <div className="content-text">
                                <p>{val.contetText}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            )}
        </Row>
    )

}

export default LetUsKnowRow;