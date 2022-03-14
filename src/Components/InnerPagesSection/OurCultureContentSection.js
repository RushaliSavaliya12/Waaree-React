import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const OurCultureContentSection = () => {
    return (
        <>
            <section className="section simple-content-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in sem eu purus sollicitudin scelerisque sed id tellus. Phasellus ac aliquam velit, vel placerat lectus. Aliquam erat volutpat. Maecenas consectetur velit id laoreet euismod. Mauris dapibus id lorem sed egestas. Cras eget interdum metus. Maecenas a augue accumsan, ultrices velit ut, auctor dui. Pellentesque at hendrerit quam. Ut et urna in tortor tempus cursus. Vivamus dignissim fringilla mi sed dignissim. Nam hendrerit tempor justo, sit amet pretium est fermentum vitae. </p>
                            </div>
                        </div>
                    </Container>
                    <div className="content-bg">
                        <img src="assets/images/culture-content-bg.jpg" alt="content bg"/>
                    </div>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default OurCultureContentSection;