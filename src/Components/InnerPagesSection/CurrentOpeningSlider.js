import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';

const CurrentOpeningSlider = () => {
  const CurrentOpeningSliderData = [
    {
      id:1,
      imageSrc:"assets/images/case-study-bg.jpg",
      openingTitle:"Looking to change your career?",
      contentText:"Duis fringilla nisl vitae ante laoreet, ac sodales nisl elementum. Nulla facilisi. Mauris id metus posuere, lobortis lacus a, pellentesque libero. Vivamus volutpat neque id est dapibus, eu mollis leo facilisis. ",
      buttonHref:"#",
    },
    {
      id:2,
      imageSrc:"assets/images/case-study-building.jpg",
      openingTitle:"Looking to change your career?",
      contentText:"Duis fringilla nisl vitae ante laoreet, ac sodales nisl elementum. Nulla facilisi. Mauris id metus posuere, lobortis lacus a, pellentesque libero. Vivamus volutpat neque id est dapibus, eu mollis leo facilisis. ",
      buttonHref:"#",
    },
    
  ]
  var settingsOpeningSlider = {
    speed:600,
    arrows:true,
    infinite:true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
    return (
          <Slider className="current-opening-slider" {...CurrentOpeningSliderData}>
                {CurrentOpeningSliderData.map((val) =>
                  <div className="slide-inner" key={val.id}> 
                      <Row className="current-opening-row">
                        <Col lg={6}>
                          <div className='col-inner'>
                              <h2 className="title">
                                Current Opening
                              </h2>
                              <div className="opening-content">
                                  <h4>{val.openingTitle}</h4>
                                  <div className="content-text">
                                      <p>{val.contentText}</p>
                                  </div>
                                  <ButtonDiv buttonText="Explore Current Opening" buttonHref={val.buttonHref}/>
                              </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="col-inner">
                            <img src={val.imageSrc} alt="" />
                          </div>
                        </Col>
                      </Row>
                  </div>
                )}
          </Slider>
      
    );
  }
export default CurrentOpeningSlider;