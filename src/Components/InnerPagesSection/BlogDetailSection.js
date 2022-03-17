import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BlogDetailCol from './BlogDetailCol';
import BlogRightCol from './BlogRightCol';
import RoundSvgSectionTop from './RoundSvgSectionTop';
import BlogPagination from './BlogPagination';


const BlogDetailSection = (props) => {

    return (
        <>
            <section className="section Blog-detail-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="blog-main-row">
                                <Row>
                                    <Col lg={8} className="blog-detail-col">
                                        <div className="col-inner">
                                            <div className="blog-wrap">
                                                <BlogDetailCol />
                                            </div>
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

export default BlogDetailSection;