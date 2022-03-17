import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'react-bootstrap';
import RoundSvgSectionTop from './RoundSvgSectionTop';

const SimpleContentSection = () => {
    return (
        <>
            <section className="section simple-content-section">
                <div className="section-inner">
                    <Container>
                        <div className="section-wrap">
                            <div className="content-text big-text reveal-fade">
                                <p>Curabitur eu quam imperdiet, tincidunt tellus nec, maximus felis. Morbi ut imperdiet sem. Sed consectetur ornare ligula, eu aliquam metus semper eget. Maecenas dolor velit, interdum ultricies dapibus ut, imperdiet ac nisi. Maecenas at aliquet justo. Sed volutpat, diam sed luctus consequat, dolor quam ultrices ligula, vulputate consectetur urna orci vitae purus.</p>
                            </div>
                        </div>
                    </Container>
                    <RoundSvgSectionTop />
                </div>
            </section>
        </>
    )
}

export default SimpleContentSection;