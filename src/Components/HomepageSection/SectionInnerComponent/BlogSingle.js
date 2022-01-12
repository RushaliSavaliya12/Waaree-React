import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogSingle = (props) => {
  return(
    <Col xl={4} md={6} className="blog-col reveal-fade">
      <div className="col-inner">
        <div className="blog-image">
          <a href={props.blogLink}>
            <img src={props.blogBg} alt="Blog Image" />
          </a>
        </div>
        <div className="blog-content">
          <span className="blog-date">{props.blogDate}</span>
          <div className="blog-title">
            <a href={props.blogLink}>{props.blogTitle}</a>
          </div>
          <div className="read-more-link">
            <a href={props.blogLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BlogSingle;