import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import JobOpportunityRow from './JobOpportunityRow';

const JobOpportunitySection = () => {

    return (
        <section className="section job-opportunity-section">
            <div className="section-inner">
                    <div className="section-wrap">
                            <Container>
                                <SectionTitle sectionTitle="Job Opportunities" titleTheme="dark-title" />
                                <JobOpportunityRow />
                            </Container>
                    </div>
            </div>
        </section>
    )

}

export default JobOpportunitySection;