import React from 'react';
import { Nav, NavDropdown, Container, Col, Row, Modal} from 'react-bootstrap';
import { gsap} from "gsap";
import { useState } from 'react';
import SocialMediaIcon from './SocialMediaIcon';

const MoreMenuModel = () =>{

    var durationTime = 2.5;
    var circleDurationTime = 1;
    var staggerTime = 0.2;


    var moreMenu = gsap.timeline();
    moreMenu.to(".more-menu-modal .navbar-nav > .nav-item > a",{ staggerTime, opacity: 1, scale: 1,rotate:0, stagger: 0.1});
    moreMenu.to(".gallery-slider-wrap",{ durationTime, opacity: 1 },"+=0.1"
    );
    moreMenu.pause();

    // const [show, setShow] = useState(false);
    const [moreMenuShow, setMoreMenuShow] = useState('');
    const moreMenuhandleClose = () => {
        setMoreMenuShow({moreMenuShow:''});
        moreMenu.progress(1).reverse();
    }
    
    const moreMenuhandleShow = () => {
        setMoreMenuShow('show');
        moreMenu.play();
    }

    const [showDropdownState, setDropdownShow] = useState({
        Company: false,
        Products:false,
        Services:false,
        Insights:false,
        Others: false,
        People: false
    });

    const dropdownShowHandler = (e,key) => {
        const showDropdownStateChange = showDropdownState;
        setDropdownShow(Object
        .keys(showDropdownStateChange) // Get list of keys in model
        .reduce((result, k) => { 
          
          return { ...result, [k] : key === k };
        }, {}));
        // setDropdownShow({...showDropdownState, [key]: true})
    }

    const dropdownHideHandler = (e,key) => {
        setDropdownShow({...showDropdownState, [key]: false})
    }

    return (
        <>
    <div className="nav-item more-menu">
        <Nav.Link onClick={moreMenuhandleShow} className="more-menu"><div className="more-menu-btn"><div className="toggle-icon"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></div>More</div></Nav.Link>
        <div className={`more-menu-modal ${moreMenuShow}`}>
                <div className="dropdown-menu-wrap">
                    <div className="close-btn-wrap">
                        <a className="close-btn" onClick={moreMenuhandleClose}><span className="close-icon" id="closeMoreMenu"></span>Close</a>
                    </div>
                    <Container>
                        <div className="more-menu-inner">
                            <Row>
                                <Col md={6} className="main-mobile-menu d-block d-xl-none">
                                    <div className="menu-title"><h4>Main Menu</h4></div>
                                    <Nav>
                                        <Nav.Link href="#about">About Us</Nav.Link>
                                        <Nav.Link href="#Products">Products</Nav.Link>
                                        <Nav.Link href="#Services">Services</Nav.Link>
                                        <Nav.Link href="#Contact">Contact Us</Nav.Link> 
                                    </Nav>
                                </Col>
                                <Col md={6} className="menu-column">
                                    <div className="menu-wrapper">
                                    <div className="menu-title"><h4>More Menu</h4></div>
                                    <Nav>
                                    <NavDropdown id="companyMenu" title="Company" show={showDropdownState.Company} onMouseEnter={(e) => dropdownShowHandler(e,"Company")} onMouseLeave={(e) => dropdownHideHandler(e,"Company")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>About Us</NavDropdown.Item>
                                            <NavDropdown.Item>Board of Directors</NavDropdown.Item>
                                            <NavDropdown.Item>Manufacturing Plant</NavDropdown.Item>
                                            <NavDropdown.Item>Why Solar</NavDropdown.Item>
                                            <NavDropdown.Item>Clientele</NavDropdown.Item>
                                            <NavDropdown.Item>Awards</NavDropdown.Item>
                                            <NavDropdown.Item>Sustainable Living (CSR)</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <NavDropdown id="productsMenu" title="Products" show={showDropdownState.Products} onMouseEnter={(e) => dropdownShowHandler(e,"Products")} onMouseLeave={(e) => dropdownHideHandler(e,"Products")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>PV Modules</NavDropdown.Item>
                                            <NavDropdown.Item>On-grid Inverters</NavDropdown.Item>
                                            <NavDropdown.Item>Off-grid Inverters</NavDropdown.Item>
                                            <NavDropdown.Item>Batteries</NavDropdown.Item>
                                            <NavDropdown.Item>Water Pumps Solar Products</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <NavDropdown id="servicesMenu" title="Services" show={showDropdownState.Services} onMouseEnter={(e) => dropdownShowHandler(e,"Services")} onMouseLeave={(e) => dropdownHideHandler(e,"Services")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>EPC Ground Mount</NavDropdown.Item>
                                            <NavDropdown.Item>EPC Floating Solar</NavDropdown.Item>
                                            <NavDropdown.Item>EPC Rooftop</NavDropdown.Item>
                                            <NavDropdown.Item>Ops & Maintenance</NavDropdown.Item>
                                            <NavDropdown.Item>Solar Finance</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <NavDropdown id="insightsMenu" title="Insights" show={showDropdownState.Insights} onMouseEnter={(e) => dropdownShowHandler(e,"Insights")} onMouseLeave={(e) => dropdownHideHandler(e,"Insights")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>Company</NavDropdown.Item>
                                            <NavDropdown.Item>Blog</NavDropdown.Item>
                                            <NavDropdown.Item>Investors</NavDropdown.Item>
                                            <NavDropdown.Item>People Careers</NavDropdown.Item>
                                            <NavDropdown.Item>FAQs</NavDropdown.Item>
                                            <NavDropdown.Item>Press Release</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <NavDropdown id="otherMenu" title="Others" show={showDropdownState.Others} onMouseEnter={(e) => dropdownShowHandler(e,"Others")} onMouseLeave={(e) => dropdownHideHandler(e,"Others")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>Events</NavDropdown.Item>
                                            <NavDropdown.Item>Media Coverage</NavDropdown.Item>
                                            <NavDropdown.Item>videos</NavDropdown.Item>
                                            <NavDropdown.Item>Support</NavDropdown.Item>
                                            <NavDropdown.Item>Enquiry Form</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    <NavDropdown id="peopleMenu" title="People" show={showDropdownState.People} onMouseEnter={(e) => dropdownShowHandler(e,"People")} onMouseLeave={(e) => dropdownHideHandler(e,"People")}>
                                        <div className="dropdown-inner">
                                            <NavDropdown.Item>Our Culture</NavDropdown.Item>
                                            <NavDropdown.Item>Life at Waaree</NavDropdown.Item>
                                            <NavDropdown.Item>Work With Us</NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                    </Nav>
                                    </div>
                                    
                                </Col>
                                <Col md={6} className="gallery-column">
                                    <div className="gallery-slider-wrap reveal-fade">
                                        <div className="slide-single active">
                                            <img src="assets/images/more-menu-image.jpg" alt="slide Image" />
                                        </div>
                                        <div className={showDropdownState.Products ? 'active slide-single' : 'slide-single' } data-gallary="productMenu">
                                            <img src="assets/images/solar-panel-terres-blog.png" alt="slide Image" />
                                        </div>
                                        <div className={showDropdownState.Services ? 'active slide-single' : 'slide-single' } data-gallary="serviceMenu">
                                            <img src="assets/images/product-slide-1.jpg" alt="slide Image" />
                                        </div>
                                        <div className={showDropdownState.Insights ? 'active slide-single' : 'slide-single' } data-gallary="insightsMenu">
                                            <img src="assets/images/rooftop-solar.jpg" alt="slide Image" />
                                        </div>
                                        <div className={showDropdownState.Others ? 'active slide-single' : 'slide-single' } data-gallary="otherMenu">
                                            <img src="assets/images/solar-panel-house-blog.png" alt="slide Image" />
                                        </div>
                                        <div className={showDropdownState.People ? 'active slide-single' : 'slide-single' } data-gallary="peopleMenu">
                                            <img src="assets/images/product-slide-2.jpg" alt="slide Image" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={6} className="social-column">
                                    <div className="social-icon-wrap">
                                        <SocialMediaIcon />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
        </div>
    </div>
    </>
    )
}

export default MoreMenuModel;