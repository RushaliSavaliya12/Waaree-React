import React from 'react';
import { Navbar, Nav, NavDropdown, Container, row, Col, Row, Modal} from 'react-bootstrap';
import { useState } from 'react';

const PrivacyPolicyPopup = () => {
    const [PrivacyPopupShow, setPrivacyPopupShow] = useState('show');
    const handleClose = () => setPrivacyPopupShow({moreMenuShow:''});

    return(
        <div className={`cookie-policy-wrap ${PrivacyPopupShow}`} id="cookiePolicy">
        <div className="container">
            <div className="row cookie-row">
                <div className="col-lg-7 cookie-text">
                    <p>This website uses cookies to ensure you get the 
                        best experience on our website.</p>
                </div>
                <div className="col-lg-5 cookie-btn">
                    <a href="#" className="btn">Cookie Policy</a>
                    <a href="#" className="btn btn-primary" id="cookieAcceptBtn" onClick={handleClose}>Accept & Close</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PrivacyPolicyPopup;