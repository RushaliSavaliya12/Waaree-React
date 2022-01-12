import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const AboutValueboxes = (props) =>{
  return (
    <Col xl={props.col} className={`value-box-col reveal-fade ${props.extraclassName}`}>
      <div className="value-col-inner">
        <div className="box-image">
          <a href={props.valueURL}>
            <img src={props.valueImageSrc} alt="Vision Image" />
          </a>
        </div>
        <div className="box-content">
          <h4 className="box-title">{props.valueBoxTitle}</h4>
          <div className="value-text">
            <p>{props.valueText}</p>
          </div>
          <div className="read-more-link">
            <a href={props.valueURL} className="read-more">Read More<i className="fa fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default AboutValueboxes;