import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const ContactHelpSection = () => {

    const HelpColData = [
        {
            id:"1",
            helpSecBgSrc:"assets/images/feedback-image.jpg",
            helpSecTitle:"Feedback",
            helpSecLink:"https://survey.zohopublic.com/zs/OMCshf",
            helpSecBtnText:"Send Feedback",
        },
        {
            id:"2",
            helpSecBgSrc:"assets/images/franchiees-image.jpg",
            helpSecTitle:"Franchisee",
            helpSecLink:"/enquiry",
            helpSecBtnText:"Franchise Enquiry",
        },
        {
            id:"3",
            helpSecBgSrc:"assets/images/help-supprt-bg.jpg",
            helpSecTitle:"Help & Support",
            helpSecLink:"https://www.waaree.com/support",
            helpSecBtnText:"Go to Support",
        }
    ]

    return (
        <>
        {HelpColData.map((val) =>
        <Col lg={4} className="help-col-single" key={val.id}>
            <img src={val.helpSecBgSrc} alt="" />
                <div className="col-inner">
                    <h3 className="reveal-fade">{val.helpSecTitle}</h3>
                    <div className="btn-wrap reveal-fade">
                        <Link to={val.helpSecLink} className="btn btn-primary">{val.helpSecBtnText}<i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
        </Col>
        )}
        </>
    )
}

export default ContactHelpSection;