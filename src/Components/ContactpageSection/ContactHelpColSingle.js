import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
            helpSecLink:"https://www.waaree.com/enquiry",
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
        <Col className="help-col-single" key={val.id}>
            <img src={val.helpSecBgSrc} alt="" />
                <div className="col-inner">
                    <h3 className="reveal-fade">{val.helpSecTitle}</h3>
                    <div className="btn-wrap reveal-fade">
                        <a href={val.helpSecLink} className="btn btn-primary" target="_blank">{val.helpSecBtnText}<i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
        </Col>
        )}
        </>
    )
}

export default ContactHelpSection;