import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import DropDownSingle from './DropDownSingle';
import FranchiseeLocationColSingle from './FranchiseeLocationColSingle';

const FranchiseeLocationSection = () => {

    return (
        <section className="section franchisee-location-section">
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">


                        <SectionTitle sectionTitle="Franchisee Location" titleTheme="dark-title" />
                        <Row className='franchisee-loc-row'>
                            <Col lg={4} md={6} className="location-dropdown-col">
                                <div className='col-inner'>
                                    <DropDownSingle />
                                    <DropDownSingle />
                                    <div className='location-info-wrapper reveal-fade'>
                                        <div className='franchisee-location'>
                                            <FranchiseeLocationColSingle locationTitle="Varizone Solar Pvt Ltd" locationAddress="Shop no 2/3, no. 2, Surat - Navsari Rd, Amrut Nagar, Harinagar, Udhna,Surat, Gujarat 394210" mobileNumber="+91 9374592727" emailId="varizonesolar@waareepartners.com"/>
                                            <FranchiseeLocationColSingle locationTitle="Varizone Solar Pvt Ltd" locationAddress="Shop no 2/3, no. 2, Surat - Navsari Rd, Amrut Nagar, Harinagar, Udhna,Surat, Gujarat 394210" mobileNumber="+91 9374592727" emailId="varizonesolar@waareepartners.com"/>
                                            <FranchiseeLocationColSingle locationTitle="Varizone Solar Pvt Ltd" locationAddress="Shop no 2/3, no. 2, Surat - Navsari Rd, Amrut Nagar, Harinagar, Udhna,Surat, Gujarat 394210" mobileNumber="+91 9374592727" emailId="varizonesolar@waareepartners.com"/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={6} className="map-col reveal-fade">
                                <div className="col-inner">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7427233884637!2d72.83863791393023!3d21.162634588572704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2f6e74d49f%3A0x210f20e88d9ed041!2sShop%20no%202%2F3%2C%202%2C%20Surat%20-%20Navsari%20Rd%2C%20Roshan%20Market%2C%20Harinagar-1%2C%20Udhna%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1645073101306!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Container>
            </div>
        </section>
    )

}

export default FranchiseeLocationSection;