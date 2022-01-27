import React from 'react';

const CaseStudySingle = (props) => {
    return (
        <div className={`case-study-single reveal-fade ${props.feauredCaseStudyclassName}`}>
            <div className={props.caseStudyImageclassName}>
                <a href={props.caseStudyLink}>
                    <img src={props.caseStudySrc} alt={props.caseStudyTitle} />
                </a>
            </div>
            <div className="case-study-content">
                <h5 className="case-study-title">{props.caseStudyTitle}</h5>
                <div className="case-study-text">
                    <p>{props.caseStudyDisc}</p>
                </div>
                <div className="read-more-link">
                    <a href={props.caseStudyLink} className="read-more">Read More<i className="fas fa-chevron-right"></i></a>
                </div>

            </div>
        </div>
    )
}

export default CaseStudySingle;