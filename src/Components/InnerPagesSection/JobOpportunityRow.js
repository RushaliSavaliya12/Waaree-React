import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const JobOpportunityRow = () => {

    const JobOpportunityRowData = [
        {
            id: 1,
            opportunityIcon: "assets/images/sales-marketing-icon.png",
            contetText: "Sales, Marketing & Services",
            contetLinkUrl:"#",

        },
        {
            id: 2,
            opportunityIcon: "assets/images/engineering-icon.png",
            contetText: "Engineering, Procurement & Construction",
            contetLinkUrl:"#",

        },
        {
            id: 3,
            opportunityIcon: "assets/images/manufacture-opration-icon.png",
            contetText: "Manufacturing & Operations",
            contetLinkUrl:"#",

        },
        {
            id: 4,
            opportunityIcon: "assets/images/support-icon.png",
            contetText: "Support",
            contetLinkUrl:"#",

        },
        {
            id: 5,
            opportunityIcon: "assets/images/internship-icon.png",
            contetText: "Internship",
            contetLinkUrl:"#",

        },
    ]

    return (
        <Row className="job-opportunity-row">
            {JobOpportunityRowData.map((val) =>
                <Col md={3} key={val.id} className="col-20 reveal-fade stagger-animation">
                    <a href={val.contetLinkUrl}>
                        <div className="col-inner">
                            <div className="icon-wrap">
                                <img src={val.opportunityIcon} alt="" />
                            </div>
                            <div className="content-text">
                                <p>{val.contetText}</p>
                            </div>
                        </div>
                    </a>
                </Col>
            )}
        </Row>
    )

}

export default JobOpportunityRow;