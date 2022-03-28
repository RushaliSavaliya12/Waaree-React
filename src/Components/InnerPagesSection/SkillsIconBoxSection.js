import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SkillsIconBox from './SkillsIconBox';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';


const SkillsIconBoxSection = (props) => {

    return (
        <>
            <section className="section skills-icon-section" style={{ backgroundColor: "#11582c" }}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Skills to Services" titleTheme="light-title mb-80" />
                            <Row className="icon-box-row p-inner-50">
                                <SkillsIconBox />
                            </Row>
                            <div className="btn-wrap text-center">
                                <ButtonDiv buttonHref="#" buttonText="Become Waaree Expert now" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default SkillsIconBoxSection;