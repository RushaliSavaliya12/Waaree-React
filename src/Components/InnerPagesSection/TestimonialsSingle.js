import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


const TestimonialsSingle = () => {
    const TestimonialsSingleData = [
        {
            id: 1,
            TestiLogoImage: "assets/images/testimonial-logo/abellon-logo.jpg",
            testimonialTitle: "“ Abellon-Clean-Energy",
            testimonialText: "Team Waaree, is a company synonymous with solar EPC. To manage each and every thing for 2 MW solar power plant within 35 days is not a joke as it requires meticulous planning, understanding of subject and requirements at site, we appreciate efforts of all involved from Waaree Group."
        },
        {
            id: 2,
            TestiLogoImage: "assets/images/testimonial-logo/sharada-logo.jpg",
            testimonialTitle: "“ Sharda Construction & Corporation Limited",
            testimonialText: "Suspendisse nisl sapien, rhoncus a orci nec, dapibus vulputate nisi. Nam lacus sem, finibus sollicitudin metus vel, hendrerit aliquam sapien. Phasellus vitae nisl vestibulum, sollicitudin tellus non, molestie erat. Donec ipsum dui, luctus sed tempor a, fringilla quis quam. Fusce ac nulla lacus. Sed cursus diam vitae gravida varius."
        },
        {
            id: 3,
            TestiLogoImage: "assets/images/testimonial-logo/friends-group.jpg",
            testimonialTitle: "“ Friends Group of Companies",
            testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus tellus ac ipsum mattis, ac eleifend lacus rhoncus. Phasellus cursus libero non augue tincidunt, id mollis quam convallis. Maecenas non sollicitudin arcu, vitae volutpat dui. Curabitur rhoncus, purus blandit imperdiet vulputate, turpis sem mattis augue, et commodo ipsum est in lorem."
        },
        {
            id: 4,
            TestiLogoImage: "assets/images/testimonial-logo/MSL-logo.jpg",
            testimonialTitle: "“ Maharashtra Seamless Limited (MSL)",
            testimonialText: "Integer consequat metus tortor, vitae interdum purus iaculis fringilla. Morbi fermentum mollis neque, at porttitor ligula congue quis. Proin aliquet leo sed turpis laoreet, a placerat ex ullamcorper. Aenean posuere nibh vel diam pulvinar finibus. Sed convallis tincidunt mauris, non viverra quam. "
        },
        {
            id: 5,
            TestiLogoImage: "assets/images/testimonial-logo/mcd-logo.jpg",
            testimonialTitle: "“ McDonald's",
            testimonialText: "Team Waaree, is a company synonymous with solar EPC. To manage each and every thing for 2 MW solar power plant within 35 days is not a joke as it requires meticulous planning, understanding of subject and requirements at site, we appreciate efforts of all involved from Waaree Group."
        },
        {
            id: 6,
            TestiLogoImage: "assets/images/testimonial-logo/bmw-logo.jpg",
            testimonialTitle: "“ Bayerische Motoren Werke AG",
            testimonialText: "Suspendisse nisl sapien, rhoncus a orci nec, dapibus vulputate nisi. Nam lacus sem, finibus sollicitudin metus vel, hendrerit aliquam sapien. Phasellus vitae nisl vestibulum, sollicitudin tellus non, molestie erat. Donec ipsum dui, luctus sed tempor a, fringilla quis quam. Fusce ac nulla lacus. Sed cursus diam vitae gravida varius."
        },
        {
            id: 7,
            TestiLogoImage: "assets/images/testimonial-logo/surf-coffe-logo.jpg",
            testimonialTitle: "“ Surf Coffee",
            testimonialText: "In hac habitasse platea dictumst. Donec ac velit sit amet leo placerat convallis id id lorem. In malesuada vestibulum enim, vel tempus turpis convallis vitae. Aenean lorem ligula, aliquam a egestas vel, gravida id orci. Praesent blandit nulla at enim porttitor, in maximus tellus elementum. Suspendisse potenti. "
        },
        {
            id: 8,
            TestiLogoImage: "assets/images/testimonial-logo/starburks-logo.jpg",
            testimonialTitle: "“ Starbucks",
            testimonialText: "Donec ac velit sit amet leo placerat convallis id id lorem. In malesuada vestibulum enim, vel tempus turpis convallis vitae. Aenean lorem ligula, aliquam a egestas vel, gravida id orci. Praesent blandit nulla at enim porttitor, in maximus tellus elementum. Suspendisse potenti. Aliquam erat volutpat. Integer dui metus, commodo id leo quis, vehicula sodales orci."
        },
        {
            id: 9,
            TestiLogoImage: "assets/images/testimonial-logo/mercydes-logo.jpg",
            testimonialTitle: "“ Mercedes-Benz",
            testimonialText: "Vivamus venenatis lacus sem, eu venenatis massa placerat vitae. Sed eu porttitor neque, vel fringilla arcu. Duis et facilisis erat. Sed condimentum nisl ut felis malesuada vulputate. Aliquam elementum nibh nisi, eget pulvinar turpis blandit nec."
        },

    ]
    return (
        <>
            <div className="testimonial-listing">


                {TestimonialsSingleData.map((val) =>
                    <div className="testimonial-single reveal-fade stagger-animation">
                        <div className="testimonial-single-wrap">
                            <Row>
                                <Col lg={2} md={4} className="testimonial-image-col">
                                    <div className="col-inner">
                                        <div className="testimonial-image">
                                            <img src={val.TestiLogoImage} alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={10} md={8} className="testimonial-content-col">
                                    <div className="col-inner">
                                        <h4 className="testimonial-company-title green-title">
                                            {val.testimonialTitle}
                                        </h4>
                                        <div className="content-text">
                                            <p>{val.testimonialText}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
            </div>
        </>


    )
}

export default TestimonialsSingle;