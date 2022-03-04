import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import JobOpportunityRow from './JobOpportunityRow';

const ExploreLifeWaaree = () => {

    ExploreLifeGridData = [
        {
            id: 1,
            gridPageLink: "#",
            gridBgSrc: "assets/images/",
            gridTitle: "",
        },
        {
            id: 2,
            gridPageLink: "#",
            gridBgSrc: "assets/images/",
            gridTitle: "",
        },
        {
            id: 3,
            gridPageLink: "#",
            gridBgSrc: "assets/images/",
            gridTitle: "",
        }
    ]

    const ExploreLifeGridSingle = () => {
        return (
            <>
                {ExploreLifeGridData.map((key) =>
                    <div className="grid-col-single" >
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