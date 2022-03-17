import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';


const TeamReviewSlider = () => {
  const TeamReviewSliderData = [
    {
      id:1,
      teamReviewText:"We encourage out people to think innotively in all that we do. Our people chalenge the covential way of doing business at every point. Where others see problems, we see opportunities.",
      teamMemberName:"Hitesh Chimanlal Doshi",
      teamMemberPosition:"Chairman & Managing Director",
      teamMemberImageSrc:"assets/images/hitesh-chimanlal-without-bg.png",
    },
    {
      id:2,
      teamReviewText:"We encourage out people to think innotively in all that we do. Our people chalenge the covential way of doing business at every point. Where others see problems, we see opportunities.",
      teamMemberName:"Hitesh Pranjivan Mehta",
      teamMemberPosition:"Whole-time Director & CFO",
      teamMemberImageSrc:"assets/images/hitesh-mehta-without-bg.png",
    },
    {
      id:3,
      teamReviewText:"We encourage out people to think innotively in all that we do. Our people chalenge the covential way of doing business at every point. Where others see problems, we see opportunities.",
      teamMemberName:"Virenkumar Chimanlal Doshi",
      teamMemberPosition:"Whole-time Director",
      teamMemberImageSrc:"assets/images/Waaree-Viren-Doshi-without-bg.png",
    },
  ]
  var settingsTeamReview = {
    speed:1000,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade:true,
  };
  
    return (
          <Slider className="team-review-slider" {...settingsTeamReview}>
                {TeamReviewSliderData.map((val) =>
                  <div className="slide-inner">
                      <Container>
                      <Row>
                          <Col lg={7} className="review-left-col reveal-fade">
                              <div className="col-inner">
                                  <div className="review-text">
                                      <h4>{val.teamReviewText}</h4>
                                  </div>
                                  <div className="team-info">
                                      <h4 className="team-member-name">{val.teamMemberName}</h4>
                                      <span className="team-member-position">{val.teamMemberPosition}</span>
                                  </div>
                              </div>
                          </Col>
                          <Col lg={5} className="team-image-col reveal-fade">
                            <div className="col-inner">
                                <div className="team-member-image">
                                    <img src={val.teamMemberImageSrc} alt="" />
                                </div>
                            </div>
                          </Col>
                      </Row>
                      </Container>
                  </div>
                )}
          </Slider>
      
    );
  }
export default TeamReviewSlider;