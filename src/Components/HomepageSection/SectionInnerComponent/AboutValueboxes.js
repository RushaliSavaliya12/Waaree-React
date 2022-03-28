import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const AboutValueboxes = (props) =>{
  return (
    <Col xl={props.col} className={`value-box-col reveal-fade ${props.extraclassName}`}>
      <div className="value-col-inner">
        <div className="box-image">
          <Link to={props.valueURL}>
            <img src={props.valueImageSrc} alt="Vision Image" />
          </Link>
        </div>
        <div className="box-content">
          <h4 className="box-title">{props.valueBoxTitle}</h4>
          <div className="value-text">
            <p>{props.valueText}</p>
          </div>
          <div className="read-more-link">
            <Link to={props.valueURL} className="read-more">Read More<i className="fa fa-chevron-right"></i></Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default AboutValueboxes;