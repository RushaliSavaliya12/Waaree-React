import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const CaseStudySlider = () => {
  const CaseStudySliderData = [
    {
      id:1,
      partnerLogoSrc:"assets/images/gargee-logo.png",
      partnerCompanyName:"Gargee Energies (Indore, MP)",
      caseStudyDetail1:"Continuous follow-ups and client service resulted in success and business growth.Here is story of one project execution.We have installed total 144 No’s of 350Wp Mono-Crystalline Modules of WAAREE with 25kWp*2nos of Inverter of WAAREE.Also we had synchronised 75 kVa DG with it.",
      caseStudyDetail2:"Now, It's been one and half year to the project it is working satisfactory well without any failure. Also client happily given us performance certificate as we built his more trust on WAAREE and on us. After that we synchronised lots of project one of them is 250kWp with 3 DG’s. That’s all happened due to our Waaree’s franchise manager and Waaree’s technical team support.",
    },
    {
      id:2,
      partnerLogoSrc:"assets/images/MSL-company.png",
      partnerCompanyName:"Maharashtra Seamless Limited",
      caseStudyDetail1:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
      caseStudyDetail2:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
      caseStudyDetail3:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
    },
    {
      id:3,
      partnerLogoSrc:"assets/images/MSL-company.png",
      partnerCompanyName:"Maharashtra Seamless Limited",
      caseStudyDetail1:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
      caseStudyDetail2:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
      caseStudyDetail3:"",
    },
    {
      id:4,
      partnerLogoSrc:"assets/images/MSL-company.png",
      partnerCompanyName:"Maharashtra Seamless Limited",
      caseStudyDetail1:"We appreciate the effort's put in by you and your team at site as well as at head office under experts supervision for commissioning of 14 mw solar photovoltaic power plant at Beed, Maharashtra. The successful commissioning of the proj",
      caseStudyDetail2:"",
      caseStudyDetail3:"",
    },
  ]
  var settingsCaseStudy = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }
      },
    ]
  };
  
    return (
          <Slider className="case-study-slider" {...settingsCaseStudy}>
                {CaseStudySliderData.map((val) =>
                  <div className="case-study-inner">
                      <div className="case-study-content">
                          <Row className="case-study-row">
                              <Col lg={3} md={4} className="col-left">
                                  <div className="col-inner">
                                      <h4 className="franchisee-loc-title">Franchisee Partner</h4>
                                      <div className="partner-logo">
                                          <img src={val.partnerLogoSrc} alt=""/>
                                      </div>
                                      <div className="partner-company-name">
                                          <span>{val.partnerCompanyName}</span>
                                      </div>
                                  </div>
                              </Col>
                              <Col lg={9} md={8} className="col-right">
                                <div className="col-inner">
                                    <div className='case-study-detail'>
                                        <p>{val.caseStudyDetail1}</p>
                                        <p>{val.caseStudyDetail2}</p>
                                        <p>{val.caseStudyDetail3}</p>
                                    </div>
                                </div>
                              </Col>
                          </Row>
                      </div>
                  </div>
                )}
          </Slider>
      
    );
  }
export default CaseStudySlider;