import React from 'react';
import { Col } from 'react-bootstrap';

const DownloadPdfCol = (props) => {


    return (
        <>
            <Col lg={3} sm={6} className="accordion-box-single">
                <div className="column-inner">
                    <div className="pdf-icon">
                        <img src="assets/images/pdf-icon.png" alt="PDF ICON" />
                    </div>
                    <div className="column-content">
                        <h5 className="pdf-title">{props.pdfTitle}</h5>
                    </div>
                    <div className="download-btn">
                        <a href={props.pdfHref} className="btn" download="">Download<i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>
            </Col>
        </>
    )

}


export default DownloadPdfCol;