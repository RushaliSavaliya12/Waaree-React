import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';


const AboutAwardsSection = () => {

    const AwardImage = (props) =>{
        return(
        <div className="image-wrap reveal-fade" key={props.id}>
            <img src={props.awardImageSrc} alt="Award Image" />
        </div>
        )
    }   

    return (
        <section className="section award-section" style={{backgroundColor: "#f0faf2"}}>
            <div className="section-inner">
                <div className="container">
                    <div className="section-wrap">
                        <div className="row award-row">
                            <div className="col-lg-4 award-image-column">
                                <div className="image-column-wrap">
                                    <div className="left-image">
                                       <AwardImage  awardImageSrc="assets/images/award-1.jpg" id="awardImage1"/>
                                       <AwardImage  awardImageSrc="assets/images/award-2.jpg" id="awardImage2"/>
                                    </div>
                                    <div className="right-image">
                                        <AwardImage  awardImageSrc="assets/images/award-3.jpg" id="awardImage3"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 award-content-column">
                                <div className="content-column-wrap">
                                    <SectionTitle sectionTitle="Awarded as India’s Greatest Brand." titleTheme="dark-title" />
                                    <div className="content-text reveal-fade">
                                        <p>Waaree has acquired honors on numerous occasions from Industry, Government and Our Overseas partners.</p>
                                    </div>
                                    <div className="btn-wrap reveal-fade">
                                        <a href="https://www.waaree.com/awards" className="btn btn-primary" target="_blank">Read More<i className="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAwardsSection;