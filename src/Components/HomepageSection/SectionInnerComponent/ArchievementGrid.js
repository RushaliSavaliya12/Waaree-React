import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const ArchievementGrid = (props) => {
  return(
    <Col md={6} className={`inner-grid-col reveal-fade ${props.bgtheme}`}>
      <div className="inner-grid-col-wrap">
        <div className="achievement-image">
            <img src={props.archivementBg} alt="Film History" />
        </div>
        <div className="achievement-content">
          <div className="achievement-content-wrap">
            <h4 className="achievement-title">{props.achievementTitle}</h4>
            <div className="content-text">
              <p>{props.achievementText}</p>
              <div className="read-more-link">
                <Link to={props.achievementButton} className="read-more">Read More<i className="fa fa-chevron-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ArchievementGrid;