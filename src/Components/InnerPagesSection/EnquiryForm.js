import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import "https://www.google.com/recaptcha/api.js";

const EnquiryForm = () => {

    const InputGroup = (props) => {
        return (
            <Col md={props.colW} className="form-inner-col reveal-fade" key={props.inputId}>
                <div className="form-group">
                    <input type={props.inputType} name={props.inputName} id={props.inputId} placeholder={props.inputPlaceholder} required />
                    <span className="icon-wrap"><i class={props.inputIconclassName}></i></span>
                </div>
            </Col>
        )
    }

    return (
        <form id="EnquiryForm" action="" method="post">
            <div className="form-inner">
                <Row className="form-row">
                    <Col xl={6}>
                        <div className="form-col">
                            <div className="form-inner-row row">
                                <InputGroup colW="6" inputType="text" inputName="name" inputId="Name" inputPlaceholder="Name" inputIconclassName="fas fa-user" />
                                <InputGroup colW="6" inputType="email" inputName="Email" inputId="Email" inputPlaceholder="Email" inputIconclassName="far fa-envelope" />
                                <InputGroup colW="6" inputType="number" inputName="mobileNumber" inputId="mobileNumber" inputPlaceholder="Contact Number" inputIconclassName="fas fa-mobile-alt" />
                                <InputGroup colW="6" inputType="text" inputName="city" inputId="City" inputPlaceholder="City" inputIconclassName="far fa-building" />
                                <Col md={12} className="form-inner-col reveal-fade">
                                    <div className="form-group">
                                        <div className="custom-dropdown-wrapper reveal-fade">
                                            <select>
                                                <option disable>Select Reason for Contact</option>
                                                <option>Feedback</option>
                                                <option>Channel partner</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>


                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className="textarea-col">
                        <div className="form-col reveal-fade">
                            <div className="form-group">
                                <textarea placeholder="Message" ></textarea>
                                <span className="icon-wrap"><i className="far fa-envelope"></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} className="text-center recaptcha-col reveal-fade">
                        <div className="g-recaptcha" id="rcaptcha" data-sitekey="site key"></div>
                    </Col>
                    <Col sm={12} className="btn-wrap text-center reveal-fade">
                        <div className="submit-group">
                            <input type="submit" className="btn btn-primary" value="Send Enquiry" />
                        </div>
                    </Col>
                </Row>
            </div>
        </form>

    )
}

export default EnquiryForm;