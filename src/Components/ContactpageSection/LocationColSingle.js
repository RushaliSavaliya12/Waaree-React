import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LocationColSingle = () => {

    const LocationColData = [
        {
            id: "1",
            locationImage:"newwebsite/images/mumbai(ho)-factory.jpg",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },
        {
            id: "2",
            locationImage:"",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },
        {
            id: "1",
            locationImage:"",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },
        {
            id: "1",
            locationImage:"",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },
        {
            id: "1",
            locationImage:"",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },
        {
            id: "1",
            locationImage:"",
            locationTitle:"",
            locationAddressSpan1:"",
            locationAddressSpan2:"",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"",
            locationEmail:"",
        },

    ]

    return (
        <>
        {LocationColData.map((val) =>
        <Col lg={6} className="location-col-single reveal-fade" key={val.id}>
            <div className="col-inner">
                <Row className="row location-inner-row">
                    <Col sm={5} className="image-col">
                        <div className="location-col-inner">
                            <img src={val.locationImage} alt="Company Image" />
                        </div>
                    </Col>
                    <Col sm={5} className="location-content-col">
                        <div className="location-col-inner">
                            <h5 className="location-title">{val.locationTitle}</h5>
                            <div className="location-address">
                                <span>{val.locationAddressSpan1}</span>
                                <span>{locationAddressSpan2}</span>
                                <span>{locationAddressSpan3}</span>
                                <span>{locationAddressSpan4}</span>
                            </div>
                            <div className="location-contact-sec">
                                <ul>
                                    <li>
                                        <span className="icon-wrap">
                                            <i className="fas fa-phone-volume"></i>
                                        </span>
                                        <a className="contact-info mobile-contact" href={`tel:${locationConactnumber}`}>
                                            {val.locationConactnumber}
                                        </a>
                                    </li>
                                    <li>
                                        <span className="icon-wrap">
                                            <i className="far fa-envelope"></i>
                                        </span>
                                        <a className="contact-info" href={`mailto:${locationEmail}`}>
                                            {val.locationEmail}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        )}
        </>
    )
}

export default LocationColSingle;