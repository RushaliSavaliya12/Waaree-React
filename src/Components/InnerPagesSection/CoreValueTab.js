import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, NavDropdown, TabContainer, TabContent, TabPane, Accordion } from 'react-bootstrap';

const CoreValueTab = () => {

    useEffect(() => {
        openTabLoad();
      });

    const CoreValueTabData = [
        {
            id: 1,
            TabTitle: "Intergrity",
            TabTitleIconHover: "assets/images/intergrity-icon-green.png",
            TabTitleIcon: "assets/images/intergrity-icon.png",
            TabTitleContent: "The core values of our organization are those values that underlie our work.",
            TabInnerImage1: "assets/images/respect-individual-bg-1.jpg",
            TabInnerImage2: "assets/images/respect-individual-bg-2.jpg",
        },
        {
            id: 2,
            TabTitle: "Respect for Individuals",
            TabTitleIconHover: "assets/images/respect-individual-icon-green.png",
            TabTitleIcon: "assets/images/respect-individual-icon.png",
            TabTitleContent: "The core values of our organization are those values that underlie our work & strategies we employ to fulfill our vision & mission.",
            TabInnerImage1: "assets/images/about-banner.jpg",
            TabInnerImage2: "assets/images/apply-now-bg.jpg",
        },
        {
            id: 3,
            TabTitle: "Customer First",
            TabTitleIconHover: "assets/images/customer-first-icon-green.png",
            TabTitleIcon: "assets/images/customer-first-icon.png",
            TabTitleContent: "The core values of our organization are those values that underlie our work & strategies we employ to fulfill our vision & mission.",
            TabInnerImage1: "assets/images/respect-individual-bg-1.jpg",
            TabInnerImage2: "assets/images/respect-individual-bg-2.jpg",
        },
        {
            id: 4,
            TabTitle: "Passion for Excellence Excellence",
            TabTitleIconHover: "assets/images/passion-icon-green.png",
            TabTitleIcon: "assets/images/passion-icon.png",
            TabTitleContent: "The core values of our organization are those values.",
            TabInnerImage1: "assets/images/about-banner.jpg",
            TabInnerImage2: "assets/images/apply-now-bg.jpg",
        },
        {
            id: 5,
            TabTitle: "Continuous Improvements & Innovation",
            TabTitleIconHover: "assets/images/improvement-inovation-icon-green.png",
            TabTitleIcon: "assets/images/improvement-inovation-icon.png",
            TabTitleContent: "The core values of our organization.",
            TabInnerImage1: "assets/images/respect-individual-bg-1.jpg",
            TabInnerImage2: "assets/images/respect-individual-bg-2.jpg",
        }
    ]

    const openTabLoad = () =>{
        var tabFirstChild = document.querySelector('.custom-tab-nav .nav-item:first-child a');
        console.log(tabFirstChild);
        tabFirstChild.click();
    }
    return (
        <Tab.Container id="coreValueTab">
            <Row>
                <Col lg={6}>
                    <Nav variant="pills" className="flex-column custom-tab-nav">

                        {CoreValueTabData.map((val) =>
                            <Nav.Item className="reveal-fade stagger-animation">
                                <Nav.Link eventKey={val.id}>
                                    <div className="icon-wrap">
                                        <img src={val.TabTitleIcon} alt="" className="icon-default" />
                                        <img src={val.TabTitleIconHover} alt="" className="hover-icon" />
                                    </div>
                                    <div className="title-wrap">
                                        <h4 className="tab-title-text">{val.TabTitle}</h4>
                                    </div>

                                </Nav.Link>
                                <div className="tab-title-content">
                                    {val.TabTitleContent}
                                </div>
                            </Nav.Item>
                        )}
                    </Nav>
                </Col>
                <Col lg={6} className="tab-content-col reveal-fade stagger-animation">
                    <Tab.Content>
                        {CoreValueTabData.map((val) =>
                            <Tab.Pane eventKey={val.id} key={val.id}>
                                <div className="tab-content-wrap">
                                    <div className="core-value-tab-content">
                                        <div className="top-image-wrap image-wrap">
                                            <img src={val.TabInnerImage1} />
                                        </div>
                                        <div className="bottom-image-wrap image-wrap">
                                            <img src={val.TabInnerImage2} />
                                            <div className="tab-title-box">
                                                <h4>{val.TabTitle}</h4>
                                            </div>
                                            <div className="green-round"></div>
                                            <div className="yellow-round"></div>
                                        </div>

                                    </div>
                                </div>
                            </Tab.Pane>
                        )}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container >
    )
}

export default CoreValueTab;