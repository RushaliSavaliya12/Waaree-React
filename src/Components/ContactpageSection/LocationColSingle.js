import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LocationColSingle = () => {

    const LocationColData = [
        {
            id: "1",
            locationImage:"assets/images/mumbai(ho)-factory.jpg",
            locationTitle:"Maharashtra – Borivali (HO)",
            locationAddressSpan1:"602, Western Edge- I",
            locationAddressSpan2:"Off. Western Express Highway,",
            locationAddressSpan3:"Borivali(East) Mumbai - 400066,",
            locationAddressSpan4:"Maharashtra, India",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },
        {
            id: "2",
            locationImage:"assets/images/sachin-factory.jpg",
            locationTitle:"Gujarat – Surat (Manufacturing Unit)",
            locationAddressSpan1:"Plot No. 231 - 236",
            locationAddressSpan2:"Surat Special Economic Zone,",
            locationAddressSpan3:"Diamond Park Sachin",
            locationAddressSpan4:"Surat 394230, Gujarat",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },
        {
            id: "3",
            locationImage:"assets/images/tumb-factory.jpg",
            locationTitle:"Gujarat – Tumb (Manufacturing Unit)",
            locationAddressSpan1:"Survey No. 38/1, Tumb Village,",
            locationAddressSpan2:"Tumb, Umbergaon, Valsad,",
            locationAddressSpan3:"Gujarat – 396150",
            locationAddressSpan4:"",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },
        {
            id: "4",
            locationImage:"assets/images/chikhali-factory.jpg",
            locationTitle:"Gujarat – Chikhli (Manufacturing Unit)",
            locationAddressSpan1:"WAAREE SHREE GODIJI FACTORY",
            locationAddressSpan2:"New Survey no. 1928 Village Degam,",
            locationAddressSpan3:"Taluka, Chikhli, Gujarat 396530",
            locationAddressSpan4:"",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },
        {
            id: "5",
            locationImage:"assets/images/nandigram-factory.jpg",
            locationTitle:"Gujarat –Nandigram (Manufacturing Unit)",
            locationAddressSpan1:"CBIPL NANDIGRAM Unnamed Road,",
            locationAddressSpan2:"Nandigam, Gujarat 396105",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },
        {
            id: "6",
            locationImage:"assets/images/Surat(RO)-factory.jpg",
            locationTitle:"Gujarat- Surat (RO)",
            locationAddressSpan1:"310, Rajhans Montessa, Airport Road,",
            locationAddressSpan2:"Dumas Rd, Magdalla, Surat, Gujarat 395007",
            locationAddressSpan3:"",
            locationAddressSpan4:"",
            locationConactnumber:"022 - 66444444",
            locationEmail:"waaree@waaree.com",
        },

    ]

    return (
        <>
        {LocationColData.map((val) =>
        <Col lg={6} className="location-col-single reveal-fade" key={val.id}>
            <div className="col-inner">
                <Row className="location-inner-row">
                    <Col sm={5} className="image-col">
                        <div className="location-col-inner">
                            <img src={val.locationImage} alt="Company Image" />
                        </div>
                    </Col>
                    <Col sm={7} className="location-content-col">
                        <div className="location-col-inner">
                            <h5 className="location-title">{val.locationTitle}</h5>
                            <div className="location-address">
                                <span>{val.locationAddressSpan1}</span>
                                <span>{val.locationAddressSpan2}</span>
                                <span>{val.locationAddressSpan3}</span>
                                <span>{val.locationAddressSpan4}</span>
                            </div>
                            <div className="location-contact-sec">
                                <ul>
                                    <li>
                                        <span className="icon-wrap">
                                            <i className="fas fa-phone-volume"></i>
                                        </span>
                                        <a className="contact-info mobile-contact" href={`tel:${val.locationConactnumber}`}>
                                            {val.locationConactnumber}
                                        </a>
                                    </li>
                                    <li>
                                        <span className="icon-wrap">
                                            <i className="far fa-envelope"></i>
                                        </span>
                                        <a className="contact-info" href={`mailto:${val.locationEmail}`}>
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