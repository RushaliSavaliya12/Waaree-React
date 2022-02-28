import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import NewsSingle from './NewsSingle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv'



const PressReleaseSection = (props) => {

    return (
        <>
            <section className="section press-release-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="press-release-wrapper">
                                <div className="press-release-row">
                                    <NewsSingle />
                                </div>
                                <div className="btn-wrap text-center">
                                    <ButtonDiv buttonHref="#" buttonText="Load More" />
                                </div>
                                
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default PressReleaseSection;