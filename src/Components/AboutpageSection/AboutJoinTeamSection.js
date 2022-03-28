import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import { Outlet, Link } from "react-router-dom";


const AboutJoinTeamSection = (props) => {
    return (
        <section className="section join-team-section" style={{backgroundImage: `url(${props.joinTeamBgSrc})`}}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="join-team-content text-center">
                        <SectionTitle sectionTitle={props.joinTeamTitle} className={props.titleTheme} />
                            <div className="team-content-text reveal-fade">
                                <p>{props.joinTeamContent}</p>
                            </div>
                            <div className="btn-wrap reveal-fade">
                                <Link to={props.joinBtnLink} className="btn btn-primary">{props.BgbtnText}<i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default AboutJoinTeamSection;