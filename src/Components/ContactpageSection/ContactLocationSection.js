import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const ContactLocationSection = () =>{
    return(
        <section class="section company-location-section" style={{backgroundColor:"#effff3"}}>
                    <div class="section-inner ">
                        <Container class="container">
                            <div class="section-wrap">
                                <Row class="location-sec-row">
                                    <Col lg={6} className="location-col-single reveal-fade">
                                        
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
        </section>
    )
}

export default ContactLocationSection;