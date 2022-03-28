import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const BlogSingle = (props) => {
  return(
    <Col xl={4} md={6} className="blog-col reveal-fade">
      <div className="col-inner">
        <div className="blog-image">
          <Link to={props.blogLink}>
            <img src={props.blogBg} alt="Blog Image" />
          </Link>
        </div>
        <div className="blog-content">
          <span className="blog-date">{props.blogDate}</span>
          <div className="blog-title">
            <Link to={props.blogLink}>{props.blogTitle}</Link>
          </div>
          <div className="read-more-link">
            <Link to={props.blogLink} className="read-more">Read More<i className="fa fa-chevron-right"></i></Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BlogSingle;