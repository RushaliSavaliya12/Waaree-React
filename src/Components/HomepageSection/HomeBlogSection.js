import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionInnerComponent/SectionTitle';
import ButtonDiv from './SectionInnerComponent/ButtonDiv';
import BlogSingle from './SectionInnerComponent/BlogSingle';

const HomeBlogSection = () => {
    return (
        <div className="section blog-section" style={{backgroundColor: "#f0faf2"}}>
            <div className="section-inner">
                <Container>
                    <div className="section-wrap">
                        <div className="blog-inner">
                            <SectionTitle sectionTitle="Blogs" titleTheme="dark-title" />
                            <Row className="blog-row">
                                <BlogSingle blogBg="assets/images/solar-panel-blog.png" blogDate="3 July 2021" blogTitle="5 MW Solar Power Energy Plant in India: Profit, Cost & Land Requirement" blogLink="/blog-detail" />
                                <BlogSingle blogBg="assets/images/solar-panel-house-blog.png" blogDate="5 August 2021" blogTitle="What is a Solar Inverter?" blogLink="/blog-detail" />
                                <BlogSingle blogBg="assets/images/solar-panel-terres-blog.png" blogDate="9 August 2021" blogTitle="Solar Energy - Advantages and Disadvantages" blogLink="/blog-detail" />
                            </Row>
                            <div className="view-all-btn text-center reveal-fade">
                                <ButtonDiv buttonText="View All Blogs" buttonHref="/blog" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="inner-round-shape top-right custom-round">
                <div className="green-round big reveal-fade"></div>
                <div className="yellow-round small reveal-fade"></div>
            </div>
        </div>
    )
}

export default HomeBlogSection;