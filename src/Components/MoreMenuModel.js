import React from 'react';
import { Nav, NavDropdown, Container, Col, Row, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { gsap } from "gsap";
import SocialMediaIcon from './SocialMediaIcon';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";




const MoreMenuModel = () => {

    useEffect(() => {
        InnerSubMenuShow();
    });


    var durationTime = 2.5;
    var circleDurationTime = 1;
    var staggerTime = 0.2;

    var moreMenu = gsap.timeline();

    // const [show, setShow] = useState(false);
    const [moreMenuShow, setMoreMenuShow] = useState('');
    const moreMenuhandleClose = () => {
        setMoreMenuShow({ moreMenuShow: '' });
        moreMenu.progress(1).reverse();
    }

    const moreMenuhandleShow = () => {
        setMoreMenuShow('show');
        moreMenu.to(".more-menu-modal .navbar-nav > .nav-item > a", { staggerTime, opacity: 1, scale: 1, rotate: 0, stagger: 0.1 });
        moreMenu.to(".gallery-slider-wrap", { durationTime, opacity: 1 }, "+=0.1"
        );
        moreMenu.play();
    }
    // dropdown hover
    const showClassName = "show";
    const dropdownItem = document.querySelectorAll('.more-menu-modal .nav-item.dropdown');

    const moreMenuGallaryItem = document.querySelectorAll('.gallery-column .slide-single');
    [].forEach.call(dropdownItem, function (item) {
        const dropDownMenu = item.querySelector('.dropdown-menu');
        item.onmouseenter = function () {

            item.classList.add(showClassName);
            dropDownMenu.classList.add(showClassName);

            const gallaryId = item.querySelector('.nav-link').getAttribute('id');

            [].forEach.call(moreMenuGallaryItem, function (gallaryitem) {

                const gallaryAttr = gallaryitem.getAttribute('data-gallary');
                if (gallaryId == gallaryAttr) {
                    gallaryitem.classList.add('active');
                } else {
                    gallaryitem.classList.remove('active');
                }
            });

        }
        item.onmouseleave = function () {
            item.classList.remove(showClassName);
            dropDownMenu.classList.remove(showClassName);
        }
    });


    // dropdown hover
    const InnerSubMenuShow = () => {

        const dropdownInnerMenuItem = document.querySelectorAll('.toggle-div');

        console.log(dropdownInnerMenuItem);

        [].forEach.call(dropdownInnerMenuItem, function (item) {
            item.onclick = function () {
                if (item.parentNode.classList.contains('show')) {
                    item.parentNode.classList.remove('show');
                } else {
                    item.parentNode.classList.add('show');
                }

                

            }
        });
        

    }

    // Dropdown Inside dropdown


    // Dropdown Inside dropdown




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
                                            <LinkContainer to="/about-waaree"><Nav.Link>About us</Nav.Link></LinkContainer>
                                            <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>
                                            <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>
                                            <LinkContainer to="/contact-waaree"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
                                        </Nav>
                                    </Col>
                                    <Col md={6} className="menu-column">
                                        <div className="menu-wrapper">
                                            <div className="menu-title"><h4>More Menu</h4></div>
                                            <Nav>
                                                <NavDropdown id="companyMenu" title="Company" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <LinkContainer to="/about-waaree"><NavDropdown.Item>About Us</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/about-waaree"><NavDropdown.Item>Board of Directors</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/manufacturing-plant"><NavDropdown.Item>Manufacturing Plant</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/why-solar"><NavDropdown.Item>Why Solar</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/clientele"><NavDropdown.Item>Clientele</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/awards"><NavDropdown.Item>Awards</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/csr"><NavDropdown.Item>Sustainable Living (CSR)</NavDropdown.Item></LinkContainer>

                                                    </div>
                                                </NavDropdown>
                                                <NavDropdown id="productsMenu" title="Products" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <div class="nav-item inner-menu-wrap">
                                                            <LinkContainer to="/pv-module-poly">
                                                                <NavDropdown.Item>
                                                                    PV Modules
                                                                </NavDropdown.Item>
                                                            </LinkContainer>
                                                            <span className="toggle-div"></span>
                                                            <div class="inner-menu">
                                                                <Link to="/small-module">
                                                                    Small Module
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Poly
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Mono Perc
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Bifacial
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Flexible
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    BIPV
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div class="nav-item inner-menu-wrap">
                                                            <LinkContainer to="/inverter"><NavDropdown.Item>On-grid Inverters</NavDropdown.Item></LinkContainer>
                                                            <span className="toggle-div"></span>
                                                            <div class="inner-menu">
                                                                <Link to="/small-module">
                                                                    Small Module
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Poly
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Mono Perc
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Bifacial
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    Flexible
                                                                </Link>
                                                                <Link to="/small-module">
                                                                    BIPV
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <LinkContainer to="/inverter"><NavDropdown.Item>On-grid Inverters</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/inverter"><NavDropdown.Item>Off-grid Inverters</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="#"><NavDropdown.Item>Solar Products</NavDropdown.Item></LinkContainer>
                                                    </div>
                                                </NavDropdown>
                                                <NavDropdown id="servicesMenu" title="Services" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <LinkContainer to="/service-epc-floating-solar-solution"><NavDropdown.Item>EPC Ground Mount</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/service-epc-floating-solar-solution"><NavDropdown.Item>EPC Floating Solar</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/service-epc-floating-solar-solution"><NavDropdown.Item>EPC Rooftop</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/service-epc-floating-solar-solution"><NavDropdown.Item>Ops & Maintenance</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/waaree-prime"><NavDropdown.Item>Waaree Prime</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/waaree-expert"><NavDropdown.Item>Waaree Expert</NavDropdown.Item></LinkContainer>

                                                    </div>
                                                </NavDropdown>
                                                <LinkContainer to="/partners"><Nav.Link>Our Franchisee Locations</Nav.Link></LinkContainer>
                                                <LinkContainer to="/ipo"><Nav.Link>Investors</Nav.Link></LinkContainer>
                                                <LinkContainer to="#"><Nav.Link>Download</Nav.Link></LinkContainer>
                                                <NavDropdown id="CareersMenu" title="Careers" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <LinkContainer to="/work-culture"><NavDropdown.Item>Our Culture</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/life-at-waaree"><NavDropdown.Item>Life at Waaree</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="#"><NavDropdown.Item>Work with us</NavDropdown.Item></LinkContainer>
                                                    </div>
                                                </NavDropdown>
                                                <NavDropdown id="InsightsMenu" title="Insights" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <LinkContainer to="/blog"><NavDropdown.Item>Blog</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="#"><NavDropdown.Item>FAQs</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/all-news"><NavDropdown.Item>Press Release</NavDropdown.Item></LinkContainer>
                                                    </div>
                                                </NavDropdown>
                                                <NavDropdown id="otherMenu" title="Others" renderMenuOnMount={true}>
                                                    <div className="dropdown-inner">
                                                        <LinkContainer to="/events"><NavDropdown.Item>Events</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/media-coverage"><NavDropdown.Item>Media Coverage</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/videos"><NavDropdown.Item>videos</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="#"><NavDropdown.Item>Support</NavDropdown.Item></LinkContainer>
                                                        <LinkContainer to="/enquiry"><NavDropdown.Item>Enquiry Form</NavDropdown.Item></LinkContainer>

                                                    </div>
                                                </NavDropdown>
                                            </Nav>
                                        </div>

                                    </Col>
                                    <Col md={6} className="gallery-column">
                                        <div className="gallery-slider-wrap reveal-fade">
                                            <div className="slide-single active" data-gallary="companyMenu">
                                                <img src="assets/images/more-menu-image.jpg" alt="slide Image" />
                                            </div>
                                            <div className="slide-single" data-gallary="productsMenu">
                                                <img src="assets/images/solar-panel-terres-blog.png" alt="slide Image" />
                                            </div>
                                            <div className="slide-single" data-gallary="servicesMenu">
                                                <img src="assets/images/product-slide-1.jpg" alt="slide Image" />
                                            </div>
                                            <div className="slide-single" data-gallary="CareersMenu">
                                                <img src="assets/images/rooftop-solar.jpg" alt="slide Image" />
                                            </div>
                                            <div className="slide-single" data-gallary="otherMenu">
                                                <img src="assets/images/solar-panel-house-blog.png" alt="slide Image" />
                                            </div>
                                            <div className="slide-single" data-gallary="InsightsMenu">
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