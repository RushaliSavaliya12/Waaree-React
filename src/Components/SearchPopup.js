import React from 'react';
import { Navbar, Nav, NavDropdown, Container, row, Col, Row, Modal} from 'react-bootstrap';
import { gsap, Power3, TimelineMax} from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { useState } from 'react';


const SearchPopup = () => {

    gsap.registerPlugin(TextPlugin);

    
    const [show, setShow] = useState(false);
    const handleClose = () => 
    {
        setShow(false);
        setShowClass("");

    }
    const handleShow = () => {
        setShow(true);

        setTimeout(function() {
            const SearchPlaceholder = "What are you looking for?";
            const SearchAnimation = gsap.timeline();

            SearchAnimation.to("#typedtext-all",{ 
            duration:1.2,
            text:SearchPlaceholder,
            delimiter:" ",
            });
            SearchAnimation.play();

            console.log(SearchAnimation);
        }, 300);
            
    };
    
    const [showClass, setShowClass] = useState('show');


    const handleHideClass = () => {
        setShowClass("hide")
    };



    
    return(
        <>
        <Nav.Link href="#home" id="btn-search" className="search-menu">
            <span className="search-icon" onClick={handleShow}>
                <i className="fas fa-search"></i>
            </span>
            <div id="btn-search-close" className="btn-search-close" style={{display:"none"}} onClick={handleClose}>
                <span className="close-icon"></span>
            </div>                   
        </Nav.Link>
            <Modal className="search-popup" show={show}>
                <Modal.Body>
                    <div className="search">
                        <Container>
                            <form className="search__form" action="https://www.waaree.com/search.php" method="post" autoComplete="off">
                                <input id="search__input" className="search__input" name="keys" type="search" placeholder="" autoComplete="off" autoCorrect="off"
                                    autoCapitalize="off" spellCheck="false" required onFocus={handleHideClass}/>
                                <span id="typedtext" className={showClass}><span id="typedtext-all" className="typedtext-all-wrap"></span><span className='underscore'>_</span></span>
                            </form>
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>
        
        
        </>
    )

}

export default SearchPopup;