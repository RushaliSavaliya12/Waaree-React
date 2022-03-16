import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import IconCounterSingle from './IconCounterSingle';

const IconCounterSection = () => {
    return (
        <>
            <section className="section join-community-section" style={{backgroundColor:"#f0faf2"}}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <h2 className="section-title green-title text-center mb-80">
                                Join a community<br/>
                                Donec gravida varius sollicitudin" 
                            </h2>
                            <Row className="counter-row p-inner-50">
                                <IconCounterSingle />
                            </Row>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default IconCounterSection;