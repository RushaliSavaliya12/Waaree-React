import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TeamReviewSlider from './TeamReviewSlider';


const TeamReviewSection = () => {

    return (
        <section className="section team-review-section" style={{backgroundColor:"#11582c"}}>
            <div className="section-inner">
                <div className="section-wrap">
                    <div className="team-review-slider-wrapper">
                        <div className="team-slider-main">
                                <TeamReviewSlider />
                        </div>
                        <div className="big-round-shape">
                            <div className="inner-round-shape"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default TeamReviewSection;