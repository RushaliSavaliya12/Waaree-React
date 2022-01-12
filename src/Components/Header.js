import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
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
    return (
        <>
            <header className="site-header fixed-top reveal-fade">
                <Container>
                    <div className="header-wrap">
                    <Navbar expand="xl">
                            <Navbar.Brand href="/">
                                <figure className="logo-default"><img src="assets/images/Waaree-logo.svg" alt="Logo" /></figure>
                            </Navbar.Brand>
                            <Navbar.Collapse id="navbarMain">
                                <Nav className="ml-auto main-navigation">
                                    <Nav.Link href="#about">About Us</Nav.Link>
                                    <Nav.Link href="#Products">Products</Nav.Link>
                                    <Nav.Link href="#Services">Services</Nav.Link>
                                    <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
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