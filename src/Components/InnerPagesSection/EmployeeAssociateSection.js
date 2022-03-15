import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { TwoColSecContentCol } from './TwoColSecColSingle';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import RoundSvgSectionTop from '../InnerPagesSection/RoundSvgSectionTop';
import RadialPieChart from '../InnerPagesSection/RadialPieChart';

const EmployeeAssociateSection = () => {
    return (
        <>
            <section className="section two-col-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <SectionTitle sectionTitle="Employees Association With Us" titleTheme="dark-title" />
                            <div className="alternate-col-wrap">
                                <Row className="image-content-row title-none">
                                    <TwoColSecContentCol contentColText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in diam arcu. Duis ut congue tortor. Vivamus ut mi non est consequat pharetra. Pellentesque mattis vehicula pellentesque. Vestibulum mauris nulla, fringilla quis enim ut, mattis rhoncus sapien." contentColText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in diam arcu. Duis ut congue tortor. Vivamus ut mi non est consequat pharetra. Pellentesque mattis vehicula pellentesque. Vestibulum mauris nulla, fringilla quis enim ut, mattis rhoncus sapien." />
                                    <Col lg={6}>
                                        <RadialPieChart />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default EmployeeAssociateSection;