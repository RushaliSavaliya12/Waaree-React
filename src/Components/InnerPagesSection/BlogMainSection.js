import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BlogSingle from './BlogSingle';
import BlogRightCol from './BlogRightCol';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import BlogPagination from './BlogPagination';

const BlogMainSection = (props) => {

    return (
        <>
            <section className="section Blog-page-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="blog-main-row">
                                <Row>
                                    <Col lg={8} className="blog-listing-col">
                                        <div className="col-inner">
                                            <div className="blog-wrap">
                                                <BlogSingle />
                                            </div>
                                            
                                            <BlogPagination />
                                        </div>
                                    </Col>
                                    <Col lg={4} className="blog-right-col reveal-fade">
                                        <div className="col-inner">
                                            <BlogRightCol />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default BlogMainSection;