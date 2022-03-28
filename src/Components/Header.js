import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {gsap,TweenMax, TimelineMax} from 'gsap';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import MoreMenuModel from './MoreMenuModel';
import SearchPopup from './SearchPopup';

const LanguageDropdown = (props) =>{
    return(
        <>
        <NavDropdown.Item>
            <div className="dropdown-inner">
                <img src={props.imageSrc} className="flag-img" alt="Flag" /> {props.countryName}
            </div>
        </NavDropdown.Item>
        </>
    )
}
const Header = () =>{

    setTimeout(function() {
        var noFullpage = document.getElementsByClassName('no-fullpage')
        if(noFullpage.length)
        {
            var durationTime = 1.5;
            var headerAnimation = gsap.timeline();
            headerAnimation.fromTo(".site-header",{ opacity: 0,},{ durationTime, opacity: 1}, "+=0.05");
            headerAnimation.play();

            var header = document.getElementById("siteHeader");
            var fixedSocialIcon = document.getElementById("FixedSocialIcon");
            var scrollToTopBtnDiv = document.getElementById("scrolltoTopDiv");

            var sticky = header.offsetTop;

            if (window.pageYOffset > sticky) {
                header.classList.add("scrolled");
            }else{
                header.classList.remove("scrolled");
            }

            // Fixed Animation on Scroll
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                console.log('socialFixedIcon');
                fixedSocialIcon.classList.add("scrolled");
                scrollToTopBtnDiv.classList.add("show");
              }else{
                fixedSocialIcon.classList.remove("scrolled");
                scrollToTopBtnDiv.classList.remove("show");
            }
            // Fixed Animation on Scroll

            window.onscroll = function() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("scrolled");
                }else{
                    header.classList.remove("scrolled");
                }

                // Fixed Animation on Scroll
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    fixedSocialIcon.classList.add("scrolled");
                    scrollToTopBtnDiv.classList.add("show");
                  }else{
                    fixedSocialIcon.classList.remove("scrolled");
                    scrollToTopBtnDiv.classList.remove("show");
                }
                // Fixed Animation on Scroll
            } 
        }
    }, 200);
    
    return (
        <>
            <header className="site-header fixed-top reveal-fade" id="siteHeader">
                <Container>
                    <div className="header-wrap">
                    <Navbar expand="xl">
                            <LinkContainer to="/">
                                <Navbar.Brand>
                                    <figure className="logo-default"><img src="assets/images/Waaree-logo.svg" alt="Logo" /></figure>
                                </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Collapse id="navbarMain">
                                <Nav className="ml-auto main-navigation">
                                    <LinkContainer to="/about-waaree"><Nav.Link>About us</Nav.Link></LinkContainer>
                                    <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>
                                    <LinkContainer to="/services"><Nav.Link>Services</Nav.Link></LinkContainer>
                                    <LinkContainer to="/contact-waaree"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
                                    <MoreMenuModel />
                                    <SearchPopup />
                                    <NavDropdown id="languageDropdown" className="language-dropdown" title={<span className= "selected-value"><img src="assets/images/india-flag.png" className="flag-img" alt="Flag" /></span>}>
                                            <LanguageDropdown imageSrc = "assets/images/india-flag.png" countryName = "India"/>
                                            <LanguageDropdown imageSrc = "assets/images/united-states-flag.png" countryName = "United State"/>
                                            <LanguageDropdown imageSrc = "assets/images/united-kingdom-flag.png" countryName = "United Kingdom"/>
                                            <LanguageDropdown imageSrc = "assets/images/japan-flag.png" countryName = "Japan"/>
                                            <LanguageDropdown imageSrc = "assets/images/germany-flagg.png" countryName = "Germany"/>
                                            <LanguageDropdown imageSrc = "assets/images/russia-flag.png" countryName = "Russia"/>
                                            <LanguageDropdown imageSrc = "assets/images/russia-flag.png" countryName = "Russia"/>
                                            <LanguageDropdown imageSrc = "assets/images/russia-flag.png" countryName = "Russia"/>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;