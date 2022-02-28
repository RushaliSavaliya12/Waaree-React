import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SectionTitle from '../HomepageSection/SectionInnerComponent/SectionTitle';
import ButtonDiv from '../HomepageSection/SectionInnerComponent/ButtonDiv';
import BlogSingle from '../HomepageSection/SectionInnerComponent/BlogSingle';



const RelatedBlogSection = (props) => {

    return (
        <>
            <section className="section related-blog-section" style={{ backgroundColor: "#f0faf2" }}>
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="blog-inner">
                                <SectionTitle sectionTitle="Related Blogs" titleTheme="dark-title" />
                                <Row className="blog-row">
                                    <BlogSingle blogBg="assets/images/solar-panel-blog.png" blogDate="16 September 2021" blogTitle="Types of solar panels find the Right Solar Panel That Fits yor Home" blogLink="#" />
                                    <BlogSingle blogBg="assets/images/solar-panel-house-blog.png" blogDate="14 September 2021" blogTitle="Awesome Facts about Solar Energy You Can’t Miss" blogLink="#" />
                                    <BlogSingle blogBg="assets/images/solar-panel-terres-blog.png" blogDate="16 September 2021" blogTitle="Best Solar System for Home" blogLink="#" />
                                </Row>
                                <div className="view-all-btn text-center reveal-fade">
                                    <ButtonDiv buttonText="View All Related Blogs" buttonHref="#" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default RelatedBlogSection;