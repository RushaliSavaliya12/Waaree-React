import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WaareePrimeHelpCol = () => {

    const HelpColData = [
        {
            id:"1",
            helpSecBgSrc:"assets/images/waaree-prime-login-bg.jpg",
            helpSecTitle:"Get Started with Waaree Prime",
            helpSecLink:"https://survey.zohopublic.com/zs/OMCshf",
            helpSecBtnText:"Login",
            buttonStyle:"black",
            buttonTypeClassName: "",
        },
        {
            id:"2",
            helpSecBgSrc:"assets/images/download-program.jpg",
            helpSecTitle:"Download the Program Brochure",
            helpSecLink:"https://www.waaree.com/enquiry",
            helpSecBtnText:"Download",
            buttonStyle:"white",
            buttonTypeClassName: "download",
        },
    ]

    return (
        <>
        {HelpColData.map((val) =>
        <Col lg={6} className="help-col-single" key={val.id}>
            <img src={val.helpSecBgSrc} alt="" />
                <div className="col-inner">
                    <h3 className="reveal-fade">{val.helpSecTitle}</h3>
                    <div className={`btn-wrap reveal-fade ${val.buttonTypeClassName}`}>
                        <a href={val.helpSecLink} className={`btn btn-primary ${val.buttonStyle}`} target="_blank">{val.helpSecBtnText}<i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
        </Col>
        )}
        </>
    )
}

export default WaareePrimeHelpCol;