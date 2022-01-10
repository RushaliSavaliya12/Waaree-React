import React from 'react';
import { Navbar, Nav, NavDropdown, Container, row, Col, Row, Modal} from 'react-bootstrap';
import { SocialMediaIcon } from './Header';
import { useState } from 'react';

const NewsLetter = () =>{
    return(
        <div className="newsletter-section" style={{backgroundImage:"url(assets/images/newsletter-bg.jpg)"}}>
            <Container>
                <div className="form-wrap reveal-fade">
                    <form action="">
                        <h4 className="newsletter-title">Signup to our newsletter</h4>
                        <div className="form-group">
                            <div className="input-wrap">
                                <input type="email" id="newsletterEmail" name="email" placeholder="Your Email Address" />
                            </div>
                            <div className="subscribe-btn">
                                <button className="btn btn-primary">Subscribe<i className="far fa-bell"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}
const FooterTopCol = (props) =>{
    return(
        <Col xl={3} md={6} className="footer-col reveal-fade">
               <div className="footer-col-inner">
                    <div className="icon-wrap">
                            <i className={props.iconClassName}></i>
                    </div>
                    <div className="footer-detail-title">
                        <h4>{props.footerDetailTitle}</h4>
                    </div>
                    <div className="footer-detail">
                        <span>{props.footerSpanText}</span>
                        <p>{props.footerDetailText}</p>
                        <a href="tel:1800-2121-321" className="detail-link">{props.footerDetailLink}</a>
                    </div>
                </div> 
        </Col>
    )
}
const FooterMainCol = (props) =>{
    const footerCol = {
        'Company' : {
            
                'about-us':'About Us',
                'board-of-directors':'Board of Directors',
                'manufacturing-plant':'Manufacturing Plant',
                'why-solar':'Why Solar',
                'clientele':'Clientele',
                'awards':'Awards',
                'sustainable-living-csr':'Sustainable Living (CSR)'
            
        },
        'Product' : {
            
                'pv-modules':'PV Modules',
                'on-grid-investers':'On-grid Inverters',
                'off-grid-investers':'Off-grid Inverters',
                'batteries':'Batteries',
                'water-pumps-solar-products':'Water Pumps Solar Products',
            
        },
        'Services' : {
            
            'epc-ground-mount':'EPC Ground Mount',
            'epc-floating-solar':'EPC Floating Solar',
            'epc-Rooftop-solar':'EPC Rooftop',
            'solar-finance':'Solar Finance',
        },
        'Insights' : {
            
            'company':'Company',
            'blog':'Blog',
            'investors':'Investors',
            'why-solar':'Why Solar',
            'people-careers':'People Careers',
            'fAQs':'FAQs',
            'press-release':'Press Release',
        
        },
        'Others' : {
            
            'events':'Events',
            'media-coverage':'Media Coverage',
            'videos':'Videos',
            'support':'Support',
            'enquiry-form':'Enquiry Form',
        
        },

    }

    return(
        <>
            {Object.keys(footerCol).map((key) => {
                return(
                    <Col lg={2} className="footer-col reveal-fade" key={key}>
                        <div className="footer-col-inner">
                            <h5 className="footer-menu-title">{key}</h5>
                        </div>
                        <ul className="footer-menu">
                        {/* {console.log(footerCol[key])} */}
                        {Object.keys(footerCol[key]).map((footerlinkKey) => (
                                <li key={footerlinkKey}>
                                    <a href={footerlinkKey}>{footerCol[key][footerlinkKey]}</a>
                                </li>
                           
                        ))}
                        </ul>
                    </Col>
                )
            })}
        </>
    )
    

}

const Footer = () => {
    return (
        <footer className="section site-footer" style={{backgroundColor: "#f0faf2"}} id="Footer">
            <div className="section-inner">
                <NewsLetter />
                <div className="footer-main">
                    <Container>
                        <div className="footer-top">
                            <Row>
                                <Col xl={3} md={6} className="footer-col reveal-fade">
                                    <div className="footer-col-inner">
                                        <div className="footer-logo">
                                            <img src="assets/images/Waaree-logo.svg" alt="Waaree Logo" />
                                        </div>
                                        <SocialMediaIcon />
                                    </div>
                                </Col>
                                <FooterTopCol iconClassName="fas fa-map-marked-alt" footerDetailTitle="Corporate Office"
                                footerSpanText="Waaree Energies Ltd."
                                footerDetailText = "602, Western Edge-I, Off Western Express Highway, Borivali (E), Mumbai - 400066. Maharashtra, India."
                                />
                                <FooterTopCol iconClassName="fas fa-phone-volume" 
                                footerDetailTitle="Talk to Us"
                                footerDetailText = "Our customer experience team is ready to answer any questions."
                                footerDetailLink="Toll Free - 1800-2121-321"
                                />
                                <FooterTopCol iconClassName="fas fa-envelope" 
                                footerDetailTitle="Drop Email"
                                footerDetailText = "Send us an email and we will make sure it gets to the right person."
                                footerDetailLink="Waaree@waaree.com"
                                />
                            </Row>
                        </div>
                        <div className="footer-bottom">
                            <Row>
                                <FooterMainCol />
                            </Row>
                        </div>
                        <div className="footer-note">
                            <Row className="reveal-fade">
                                <Col lg={5} className="footer-col">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </Col>
                                <Col lg={7} className="footer-col">
                                    <p>© Copyright 2021 Waaree Energies Ltd. All Rights Reserved.</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    )
}

export default Footer;