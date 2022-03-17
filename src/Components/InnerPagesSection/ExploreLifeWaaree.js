import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import JobOpportunityRow from './JobOpportunityRow';

const ExploreLifeWaaree = () => {

    const ExploreLifeGridData = [
        {
            id: 1,
            gridPageLink: "#",
            gridBgSrc: "assets/images/clean-box-bg.jpg",
            gridTitle: "About us",
        },
        {
            id: 2,
            gridPageLink: "#",
            gridBgSrc: "assets/images/tumb-factory.jpg",
            gridTitle: "Life at Waaree",
        },
        {
            id: 3,
            gridPageLink: "#",
            gridBgSrc: "assets/images/waaree-expert-bg.jpg",
            gridTitle: "Our Culture",
        }
    ]

    const ExploreLifeGridSingle = () => {
        return (
            <>
                {ExploreLifeGridData.map((val) =>
                    <div className="grid-col-single reveal-fade stagger-animation" key={val.id}>
                        <div className="col-inner">
                            <a href={val.gridPageLink}>
                                <div className="grid-bg">
                                    <img src={val.gridBgSrc} />
                                </div>
                                <h4 className="grid-title">{val.gridTitle}</h4>
                            </a>
                        </div>
                    </div >
                )}
            </>
        )
    }

    return (
        <section className="section explore-waaree-section" style={{ backgroundColor: "#733256" }}>
            <div className="section-inner">
                <div className="section-wrap">
                    <Container>
                        <SectionTitle sectionTitle="Explore Life at Waaree" titleTheme="light-title" />
                        <Row className="explore-waaree-row">
                            <Col lg={6} className="explore-waaree-text-col">
                                <div className="col-inner">
                                    <div className="content-text reveal-fade">
                                        <p>WAAREE Recruitment process includes a selection stage when decisions are made as to the viability of a particular candidate's job application. We believe that it directly affects the overall productivity of an organization. A right selection may increase the overall performance of a company & a wrong one may lead to material and financial loss.</p>
                                        <p>A perfect selection process can help to pick the most eligible candidates amongst all applicants. The process of selecting candidates focuses on abilities, knowledge, skills, experience and various other related factors.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="explore-waaree-image-col">
                                <div className="col-inner">
                                    <div className="explore-waaree-masonary">
                                        <ExploreLifeGridSingle />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )

}

export default ExploreLifeWaaree;