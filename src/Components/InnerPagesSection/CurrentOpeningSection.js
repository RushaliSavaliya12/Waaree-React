import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CurrentOpeningSlider from './CurrentOpeningSlider';

const CurrentOpeningSection = () => {

    return (
        <section className="section case-study-section current-opening-section" style={{backgroundColor:"#f0faf2"}}>
            <div className="section-inner reveal-fade">
                <Container>
                    <div className="section-wrap">
                        <div className="current-opening-slider-wrap">
                                <CurrentOpeningSlider />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )

}

export default CurrentOpeningSection;