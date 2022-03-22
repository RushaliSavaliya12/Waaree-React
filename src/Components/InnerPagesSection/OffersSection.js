import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import OffersSlider from './OffersSlider';


const OffersSection = (props) => {
    return (
        <>
            <section className="section offers-slider-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Offers" titleTheme="dark-title mb-80"/>
                            <div className='offers-slider-wrap'>
                                <OffersSlider />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default OffersSection;