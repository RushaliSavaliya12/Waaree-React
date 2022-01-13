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
                                <BlogSingle blogBg="assets/images/solar-panel-blog.png" blogDate="16 September 2021" blogTitle="Types of solar panels find the Right Solar Panel That Fits yor Home" blogLink="#" />
                                <BlogSingle blogBg="assets/images/solar-panel-house-blog.png" blogDate="14 September 2021" blogTitle="Awesome Facts about Solar Energy You Can’t Miss" blogLink="#" />
                                <BlogSingle blogBg="assets/images/solar-panel-terres-blog.png" blogDate="16 September 2021" blogTitle="Best Solar System for Home" blogLink="#" />
                            </Row>
                            <div className="view-all-btn text-center reveal-fade">
                                <ButtonDiv buttonText="View All Blogs" buttonHref="#" />
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