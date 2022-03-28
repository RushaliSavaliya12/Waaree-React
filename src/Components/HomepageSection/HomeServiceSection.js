import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import ButtonDiv from './SectionInnerComponent/ButtonDiv';
import ServiceSlider from './SectionInnerComponent/ServiceSlider';

const HomeServiceSection = () => {
    return (
        <div className="section service-section" style={{backgroundColor:"#effff3"}}>
                    <div className="fp-fixed-inr">
                        <div className="fp-fixed-content">
                            <div className="bg-image" style={{backgroundImage:"url(assets/images/service-bg.jpg)"}}></div>
                        </div>
                      </div>
                      <div className="section-inner">
                            <Container>
                                <div className="section-wrap">
                                  <div className="service-inner">
                                      <SectionTitle sectionTitle="Services" titleTheme="light-title" />
                                      <ServiceSlider />
                                      <div className="view-all-btn text-center reveal-fade">
                                            <ButtonDiv buttonText="View All Service" buttonHref="/services"/>
                                      </div>
                                  </div>
                                </div>
                              </Container>
                      </div>
                      <div className="inner-round-shape top-right custom-round">
                          <div className="green-round big reveal-fade"></div>
                          <div className="yellow-round small reveal-fade"></div>
                      </div>
        </div>
    )
}

export default HomeServiceSection;