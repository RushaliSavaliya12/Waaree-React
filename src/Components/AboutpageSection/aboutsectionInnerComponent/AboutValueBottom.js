import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutValueBottom = () => {

  const AboutValueboxSingle = (props) =>{
    return(
      <Col md={6} className="boxes-single reveal-fade">
        <div className="column-wrap">
          <h4>{props.CoreValueTitle}</h4>
          <div className="image-wrap">
            <img src={props.valueImage} alt={props.CoreValueTitle} />
          </div>
          <div className="content-text">
            <p>{props.valueContentText}</p>
          </div>
        </div>
      </Col>
    )
  }

  return (
    <Row className="value-boxes-row">
        <AboutValueboxSingle  CoreValueTitle="Vision" valueImage="assets/images/vision-image.jpg" valueContentText="Our Vision is to provide high quality and cost effective sustainable energy solutions across all the markets, reducing carbon foot print - paving way for sustainable energy thereby improving quality of present and future human life."/>
        <AboutValueboxSingle  CoreValueTitle="Mission" valueImage="assets/images/mission-image.jpg" valueContentText="By virtue of our commitment to our stakeholders, we strive for continuous improvement in the quality of our products & services."/>
    </Row>
  )
}

export default AboutValueBottom;